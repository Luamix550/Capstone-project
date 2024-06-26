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
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    id: { type: "string" },
                    name: { type: "string" },
                    lastname: { type: "string" },
                    email: { type: "string" },
                    createdAt: { type: "string", format: "date-time" },
                    updatedAt: { type: "string", format: "date-time" },
                  },
                },
              },
            },
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
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    lastname: { type: "string" },
                    email: { type: "string" },
                    createdAt: { type: "string", format: "date-time" },
                    updatedAt: { type: "string", format: "date-time" },
                  },
                },
              },
            },
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
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    lastname: { type: "string" },
                    email: { type: "string" },
                    createdAt: { type: "string", format: "date-time" },
                    updatedAt: { type: "string", format: "date-time" },
                  },
                },
              },
            },
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
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
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
                      createdAt: { type: "string", format: "date-time" },
                      updatedAt: { type: "string", format: "date-time" },
                    },
                  },
                },
              },
            },
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
          201: {
            description: "Feedback created successfully",
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
                    createdAt: { type: "string", format: "date-time" },
                    updatedAt: { type: "string", format: "date-time" },
                  },
                },
              },
            },
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
                    createdAt: { type: "string", format: "date-time" },
                    updatedAt: { type: "string", format: "date-time" },
                  },
                },
              },
            },
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
                    createdAt: { type: "string", format: "date-time" },
                    updatedAt: { type: "string", format: "date-time" },
                  },
                },
              },
            },
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
    "/api/users": {
      get: {
        summary: "Get all users",
        tags: ["Admin"],
        responses: {
          200: {
            description: "List of all users",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string" },
                      name: { type: "string" },
                      lastname: { type: "string" },
                      email: { type: "string" },
                      createdAt: { type: "string", format: "date-time" },
                      updatedAt: { type: "string", format: "date-time" },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/user/{id}": {
      get: {
        summary: "Get user by ID",
        tags: ["Admin"],
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
            description: "User retrieved successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    id: { type: "string" },
                    name: { type: "string" },
                    lastname: { type: "string" },
                    email: { type: "string" },
                    createdAt: { type: "string", format: "date-time" },
                    updatedAt: { type: "string", format: "date-time" },
                  },
                },
              },
            },
          },
        },
      },
      delete: {
        summary: "Delete user by ID",
        tags: ["Admin"],
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
            description: "User deleted successfully",
          },
        },
      },
    },
  },
};
