import SwaggerAutogen from "swagger-autogen";

const swagger = SwaggerAutogen();

const docs = {
  info: {
    version: "0.1.0",
    title: "Greeting Server",
    description: "Greet all members whose birthday is today",
  },
  host: "localhost:8000",
  tags: [{ name: "default" }, { name: "Greet" }, { name: "Users" }],
  definitions: {
    GreetResponse: {
      title: "Subject: Happy birthday!",
      content: "Happy birthday, dear John!",
    },
    User: {
      id: "6398ba9e2bb5c53b28501195",
      firstName: "John",
      lastName: "Doe",
      gender: "MALE",
      dateOfBirth: "1987-06-05T00:00:00.000Z",
      email: "johndoe@example.com",
    },
    UserCreate: {
      $firstName: "John",
      $lastName: "Doe",
      $gender: "MALE",
      $dateOfBirth: "1987-06-05T00:00:00.000Z",
      $email: "johndoe@example.com",
    },
    UserUpdate: {
      firstName: "John",
      lastName: "Doe",
      gender: "MALE",
      dateOfBirth: "1987-06-05T00:00:00.000Z",
      email: "johndoe@example.com",
    },
    UserNotFound: {
      message: "User not found",
    },
  },
};

const outputFile = "./openapi.json";
const endpointsFiles = ["../server.ts"];

swagger(outputFile, endpointsFiles, docs);
