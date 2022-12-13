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
    GreetResponse: [
      "Subject: Happy birthday!\n",
      "Happy birthday, dear John!\n",
      "We offer special discount 20% off for the following items:\n",
      "White Wine, iPhone X\n",
      "Subject: Happy birthday!\n",
      "Happy birthday, dear Mary!\n",
      "We offer special discount 50% off for the following items:\n",
      "Cosmetic, LV Handbags\n",
    ].join(""),
    User: {
      id: "clbl1m9d20000976xz5frzady",
      firstName: "John",
      lastName: "Doe",
      gender: "MALE",
      dateOfBirth: "1987-06-05T00:00:00.000Z",
      email: "johndoe@example.com",
    },
    UserWithoutId: {
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
