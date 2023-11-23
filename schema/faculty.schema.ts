// GET '/'
export const getAllFacultiesSchema = {
    tags: ['faculties'],
    description: 'List all faculties.',
    response: {
      200: {
        type: 'object',
        properties: {
          results: { type: 'array', items: { $ref: 'facultySchema#' } },
        }
      },
      404: { $ref: 'messageResponseSchema#' },
    },
  };

// POST '/'
export const addFacultySchema = {
  tags: ['faculties'],
  description: 'Add faculty.',
  body: {
    type: 'object',
    required: ['name', 'courseId'],
    properties: {
      name: { type: 'string' },
      joinDate: { type: 'string' },
      courseId: { type: 'number'}
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        results: { type: 'array', items: { $ref: 'facultySchema#' } },
      }
    },
    404: { $ref: 'messageResponseSchema#' },
  },
};