const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0", // Especifica la versión de OpenAPI
    info: {
      title: "Files Data API", // Título de tu API
      version: "1.0.0", // Versión de tu API
      description:
        "API para listar y formatear datos de archivos CSV desde una API externa.", // Descripción
    },
    servers: [
      {
        url: "http://localhost:4000", // URL base de tu API (ajusta si usas Docker o un puerto diferente)
        description: "Servidor de desarrollo local",
      },
      // Puedes añadir más servidores aquí, por ejemplo, para producción
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", // Opcional, si usas JWT para autenticación en otras rutas
        },
      },
    },
    // Definir etiquetas para agrupar las rutas en la UI de Swagger
    tags: [
      {
        name: "Files",
        description: "Operaciones relacionadas con la información de archivos",
      },
    ],
  },
  // Rutas donde swagger-jsdoc buscará los comentarios JSDoc para generar la documentación
  apis: ["./src/routes/*.js"], // Busca comentarios en todos los archivos .js dentro de src/routes/
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
