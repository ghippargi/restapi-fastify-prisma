import { FastifyInstance } from "fastify";
import { addStudentSchema, getAllStudentsSchema, joinStudentCourseSchema } from "../schema/student.schema";
import { addStudent, associateCourseWithStudent, getAllStudents } from "../controllers/student.controller";

export default async function (fastify: FastifyInstance) {
  // List all students
  fastify.get('/', { schema: getAllStudentsSchema }, getAllStudents);

  // Add students
  fastify.post('/', { schema: addStudentSchema }, addStudent);

  // Add course to student
  fastify.post('/associate', { schema: joinStudentCourseSchema }, associateCourseWithStudent);
}