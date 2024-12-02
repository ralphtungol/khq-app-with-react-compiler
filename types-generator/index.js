const config = require("./config").config;

const fs = require("fs");
const createClient = require("@hey-api/openapi-ts").createClient;

(async () => {
  // remove old generated files before generating a new ones
  fs.rmSync("./src/generated", { recursive: true, force: true });

  for (const [key, value] of Object.entries(config.apiUrls)) {
    await createClient({
      input: value.swaggerOpenApiUrl
        ? `${value.swaggerOpenApiUrl}/swagger/v1/swagger.json`
        : value.schemaPath,
      output: `./src/generated/${key}`,
      client: "axios",
      useOptions: true,
      schemas: false,
      services: {
        asClass: true,
      },
    });
  }
})();
