import { Router, Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import { SuccessResponse } from '../utils/success.response';
import resourceRoute from './resource.route';
import swaggerSpec from '../swagger';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  new SuccessResponse({
    metadata: [],
    message: 'Welcome to the API',
  }).send(res);
});

// Swagger UI route
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

router.use('/api/v1/resources', resourceRoute)


export default router;