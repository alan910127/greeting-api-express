import SwaggerAutogen from "swagger-autogen";

const swagger = SwaggerAutogen({ openapi: "3.0.0" });

const docs = {
  info: {
    version: "0.1.0", // by default: '1.0.0'
    title: "Greeting API Server", // by default: 'REST API'
    description: "", // by default: ''
  },
  servers: [
    {
      url: "http://localhost:8000/",
    },
  ],
  consumes: ["application/json"], // by default: ['application/json']
  produces: ["application/json"], // by default: ['application/json']
  tags: [
    // by default: empty Array
    { name: "default" },
    { name: "Greet" },
    { name: "Users" },
  ],
  securityDefinitions: {}, // by default: empty object
  definitions: {
    Greet: [
      {
        title: "Subject: Happy birthday!",
        content: "Happy birthday, dear John!",
      },
    ],
    User: {
      id: "clbl1m9d20000976xz5frzady",
      firstName: "John",
      lastName: "Doe",
      gender: "MALE",
      dateOfBirth: "2000-01-01:00:00.000Z",
      email: "john.doe@example.com",
    },
    UserCreate: {
      $firstName: "John",
      $lastName: "Doe",
      $gender: "MALE",
      $dateOfBirth: "2000-01-01:00:00.000Z",
      $email: "john.doe@example.com",
    },
    UserUpdate: {
      firstName: "John",
      lastName: "Doe",
      gender: "MALE",
      dateOfBirth: "2000-01-01:00:00.000Z",
      email: "john.doe@example.com",
    },
    UserNotFound: {
      message: "User Not Found",
    },
  }, // by default: empty object (Swagger 2.0)
  components: {}, // by default: empty object (OpenAPI 3.x)
};

const outputFile = "./openapi.json";
const endpointsFiles = ["../server.ts"];

swagger(outputFile, endpointsFiles, docs);
