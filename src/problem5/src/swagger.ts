import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'TypeScript API Documentation',
    version: '1.0.0',
    description: 'API documentation for a TypeScript-based Express project',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/swaggers/*.ts'], // Adjust path based on route files
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;