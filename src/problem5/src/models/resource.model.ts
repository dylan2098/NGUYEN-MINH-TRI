import table from '../databases/table';
import knex from '../databases/knex';
import { Resource } from '../core/types/resource.type';
import { ResourceStatus } from '../core/types/resource.type';

const column = [
  'resource_id',
  'resource_name',
  'resource_desc',
  'resource_score',
  'resource_status',
  'resource_created_at',
  'resource_updated_at',
];

class ResourceModel {
  createResource(payload: Resource): Promise<Resource[]> {
    return knex(table.resources).returning(column).insert(payload);
  }
  
  updateResource(payload: Resource) {
    payload.resource_updated_at = new Date().toISOString();
    return knex(table.resources)
      .where('resource_id', payload.resource_id)
      .update(payload)
      .returning(column);
  }

  async deleteResource(payload: Resource) {
    var resource = await this.findOneResource(payload);

    // case update status when resource is active
    if (resource && resource.length > 0 && resource[0].resource_status == ResourceStatus.Active) {
      payload.resource_status = ResourceStatus.Inactive;

      return knex(table.resources)
        .where('resource_id', payload.resource_id)
        .update(payload)
        .returning(['resource_id']);
    }

    // case delete when status resource is inactive
    return knex(table.resources)
      .where('resource_id', payload.resource_id)
      .del()
      .returning(['resource_id']);
  }

  findOneResource(payload: Resource) {
    const { resource_id } = payload;
    return knex.select(column).from(table.resources).where('resource_id', resource_id);
  }

  paginatedData(pageSize: number, offset: number, search: string): Promise<Resource[]> {
    const query = knex.select(column).from(table.resources).limit(pageSize).offset(offset);
    if (search) {
      query.where('resource_name', 'ilike', `%${search}%`);
    }

    return query;
  }

  async existsResource(payload: Resource) {
    const result = await this.findOneResource(payload);
    if (result && result.length > 0) {
      return true;
    }
    return false;
  }

  async totalRecords(search) {
    const query = knex.from(table.resources);

    if (search) {
      query.where('resource_name', 'ilike', `%${search}%`);
    }

    const records: any = await query.count('resource_id as count').first();
    if (records.count) {
      return parseInt(records.count);
    }

    return 0;
  }
}

export default new ResourceModel();
