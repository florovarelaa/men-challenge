const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'CodeaIT MEN challenge API',
      description: 'A rest API containing users,posts and comments',
      servers: ['http://localhost:3000'],
    },
  },
  apis: ['src/router/*.js'],
};

export default swaggerOptions;