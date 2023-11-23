/*
* Some global schemas, representing our stuff from the Database.
* These will be used mostly when serializing data in our responses.
*
* See More: https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/
*/

export const studentSchema = {
  $id: 'studentSchema',
  type: 'object',
  nullable: true,
  properties: {
    id: { type: 'number' },
    name: { type: 'string' },
    email: { type: 'string', format: 'email' },
    studentId: { type: 'string' },
    admissionDate: { type: ['string', 'null'], format: 'date-time' },
    details: { type: 'string' },
    enrolledCourses: {
      type: 'array', items: {
        type: 'object',
        properties: {
          name: { type: 'string' }
        }
      }
    }
  },
};
  
  export const courseSchema = {
    $id: 'courseSchema',
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      duration: { type: 'number' },
      faculties: { type: 'array', items: { $ref: 'facultySchema#' } },
      students: { type: 'array', items: { $ref: 'studentSchema#' } }
    }
  };

  export const facultySchema = {
    $id: 'facultySchema',
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      joinDate: { type: ['string', 'null'], format: 'date-time' },
      course: { $ref: 'courseSchema#' }
    }
  };