// GET '/'
export const getAllCoursesSchema = {
    tags: ['courses'],
    description: 'List all courses.',
    response: {
      200: {
        type: 'object',
        properties: {
          results: { type: 'array', items: { $ref: 'courseSchema#' } },
        }
      },
      404: { $ref: 'messageResponseSchema#' },
    },
  };

// POST '/'
export const addCourseSchema = {
  tags: ['courses'],
  description: 'Add course.',
  body: {
    type: 'object',
    required: ['name', 'duration'],
    properties: {
      name: { type: 'string' },
      duration: { type: 'number' }
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        results: { type: 'array', items: { $ref: 'courseSchema#' } },
      }
    },
    404: { $ref: 'messageResponseSchema#' },
  },
};