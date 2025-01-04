
import { Resource } from '../core/types/resource.type';
import ResourceModel from '../models/resource.model';
import { BadRequestError } from '../utils/error.response';

class ResourceService {

  /**
   * Creates a new resource with the given payload
   * @param payload - The new resource object
   * @returns The newly created resource
   * @throws BadRequestError if the resource cannot be created
   */
  async create(payload: Resource) {
    try {
        if(payload.resource_id) {
            delete payload.resource_id;
        }

        return ResourceModel.createResource(payload);
    } catch (error) {
      throw error;
    }
  }


  /**
   * Gets all resources
   * @returns A list of all resources
   * @throws An error if the resources cannot be retrieved
   */
  async getPaginatedData(page: number, pageSize: number, search: string) {
      try {
        const offset = (page - 1) * pageSize;
        const listResouces = await ResourceModel.paginatedData(pageSize, offset, search);
        const totalRecords : number = await ResourceModel.totalRecords(search);
        const totalPages = Math.ceil(totalRecords / pageSize);

        return {
            resources: listResouces,
            totalRecords,
            totalPages,
            currentPage: page,
            pageSize,
            search
        }        
    } catch (error) {
      throw error;
    }
  }



  /**
   * Updates a resource with the given payload
   * @param payload - The resource object with the updated values
   * @returns The updated resource
   * @throws BadRequestError if the resource does not exist
   */
  async update(payload: Resource) {
    try {
        const { resource_id } = payload;
        const resourceExists = await ResourceModel.existsResource({ resource_id });
        if (!resourceExists) {
            throw new BadRequestError('Resource not exists');
        }

        return ResourceModel.updateResource(payload);
    } catch (error) {
      throw error;
    }
  }
  

  /**
   * Deletes a resource with the given resource_id. If the resource is active, it will be made inactive instead of deleted.
   * @param payload - The resource object with the resource_id to delete
   * @returns The deleted resource
   * @throws BadRequestError if the resource does not exist
   */
  async delete(payload: Resource) {
    try {
        const { resource_id } = payload;
        const resourceExists = await ResourceModel.existsResource({ resource_id });
        if (!resourceExists) {
            throw new BadRequestError('Resource not exists');
        }

        return ResourceModel.deleteResource(payload);
    } catch (error) {
      throw error;
    }
  }
  


  /**
   * Finds a resource by the given resource_id
   * @param payload - The resource object with the resource_id to find
   * @returns The found resource
   * @throws BadRequestError if the resource does not exist
   */
  async detail(resource_id: number) {
      try {
          const resourceExists = await ResourceModel.findOneResource({ resource_id });
          if (resourceExists && resourceExists.length == 0) {
              throw new BadRequestError('Resource not exists');
          }
          return resourceExists;
      } catch (error) {
          throw error;
      }
  }
}

export default new ResourceService();
