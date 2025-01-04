import { Request, Response } from 'express';
import ResourceService from '../services/resource.service';
import { CreatedSuccessResponse, SuccessResponse } from '../utils/success.response';

class ResourceController {
  create = async (req: Request, res: Response) => {
    new CreatedSuccessResponse({
      metadata: await ResourceService.create(req.body),
    }).send(res);
  };

  list = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 100;
    const search = (req.query.search as string) || '';

    new SuccessResponse({
      metadata: await ResourceService.getPaginatedData(page, pageSize, search),
    }).send(res);
  };

  update = async (req: Request, res: Response) => {
    new SuccessResponse({
      metadata: await ResourceService.update(req.body),
    }).send(res);
  };

  delete = async (req: Request, res: Response) => {
    new SuccessResponse({
      metadata: await ResourceService.delete(req.body),
    }).send(res);
  };

  detail = async (req: Request, res: Response) => {
    const resourceId = parseInt(req.params.resourceId);
    new SuccessResponse({
      metadata: await ResourceService.detail(resourceId),
    }).send(res);
  };
}

export default new ResourceController();
