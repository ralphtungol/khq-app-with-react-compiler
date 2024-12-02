const config = {
  apiUrls: {
    yourApiName: {
      swaggerOpenApiUrl: "your_base_api_url", // if your api use openapi swagger
      schemaPath: "path_to_api_schema_json_file", // remote or local path to json schema
    },
  },
};

module.exports.config = config;
