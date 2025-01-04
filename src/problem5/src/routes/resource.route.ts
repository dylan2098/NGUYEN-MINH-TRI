import { Router } from 'express';

import asyncHandler from '../helpers/asyncHandler';
import validate from '../middlewares/validate';
import schema from '../schemas/resource.schema';
import ResourceController from '../controllers/resource.controller';
import '../swaggers/index'

const router = Router();

router.post('/create', validate(schema), asyncHandler(ResourceController.create));

router.put('/update', validate(schema), asyncHandler(ResourceController.update));

router.delete('/delete', asyncHandler(ResourceController.delete));

router.get('/list', asyncHandler(ResourceController.list));

router.get('/detail/:resourceId', asyncHandler(ResourceController.detail));

export default router;