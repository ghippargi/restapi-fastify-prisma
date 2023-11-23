/*
* Schemas used for Validation and Validation and Serialization of our routes/endpoints
*
* These are used to:
*  - Validate incoming requests (URL params, body, headers, query string)
*  - Automatically serialize the response objects
*  - Also, Swagger uses these schemas to generate the documentation!
*
* See More: https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/
*/

// GET '/'
export const getAllStudentsSchema = {
    tags: ['students'],
    description: 'List all students.',
    response: {
      200: {
        type: 'object',
        properties: {
          results: { type: 'array', items: { $ref: 'studentSchema#' } },
        }
      },
      404: { $ref: 'messageResponseSchema#' },
    },
  };

// POST '/'
export const addStudentSchema = {
  tags: ['students'],
  description: 'Add students.',
  body: {
    type: 'object',
    required: ['name', 'email'],
    properties: {
      name: { type: 'string' },
      email: { type: 'string' },
      details: { type: 'string'}
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        results: { type: 'array', items: { $ref: 'studentSchema#' } },
      }
    },
    404: { $ref: 'messageResponseSchema#' },
  },
};

// POST '/associate'
export const joinStudentCourseSchema = {
  tags: ['students'],
  description: 'Add course to student.',
  body: {
    type: 'object',
    required: ['studentId', 'courseId'],
    properties: {
      studentId: { type: 'number' },
      courseId: { type: 'number'}
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        results: { type: 'array', items: { $ref: 'studentSchema#' } },
      }
    },
    404: { $ref: 'messageResponseSchema#' },
  },
};