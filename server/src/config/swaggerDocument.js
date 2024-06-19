export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "API Documentation",
    version: "1.0.0",
    description: "Documentation for your API endpoints",
  },
  paths: {
    "/api/register": {
      post: {
        summary: "Register a new user",
        tags: ["Authentication"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  lastname: { type: "string" },
                  email: { type: "string" },
                  password: { type: "string" },
                },
                required: ["name", "lastname", "email", "password"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "User registered successfully",
          },
        },
      },
    },
    "/api/login": {
      post: {
        summary: "Login user",
        tags: ["Authentication"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: { type: "string" },
                  password: { type: "string" },
                },
                required: ["email", "password"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "User logged in successfully",
          },
        },
      },
    },
    "/api/logout": {
      post: {
        summary: "Logout user",
        tags: ["Authentication"],
        responses: {
          200: {
            description: "User logged out successfully",
          },
        },
      },
    },
    "/api/profile": {
      get: {
        summary: "Get user profile",
        tags: ["Authentication"],
        responses: {
          200: {
            description: "User profile retrieved successfully",
          },
        },
      },
    },
    "/api/feedbacks": {
      get: {
        summary: "Get all feedbacks",
        tags: ["Feedbacks"],
        responses: {
          200: {
            description: "List of all feedbacks",
          },
        },
      },
      post: {
        summary: "Create new feedback",
        tags: ["Feedbacks"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  userId: { type: "string" },
                  title: { type: "string" },
                  description: { type: "string" },
                  current_rating: { type: "number" },
                  status: {
                    type: "string",
                    enum: ["Not Started", "In Progress", "Done"],
                  },
                },
                required: ["userId", "title", "description"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "Feedback created successfully",
          },
        },
      },
    },
    "/api/feedbacks/{id}": {
      get: {
        summary: "Get feedback by ID",
        tags: ["Feedbacks"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Feedback retrieved successfully",
          },
        },
      },
      put: {
        summary: "Update feedback by ID",
        tags: ["Feedbacks"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  description: { type: "string" },
                  current_rating: { type: "number" },
                  status: {
                    type: "string",
                    enum: ["Not Started", "In Progress", "Done"],
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Feedback updated successfully",
          },
        },
      },
      delete: {
        summary: "Delete feedback by ID",
        tags: ["Feedbacks"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Feedback deleted successfully",
          },
        },
      },
    },
  },
};
