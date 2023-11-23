import { FastifyInstance } from "fastify";
import { addCourseSchema, getAllCoursesSchema } from "../schema/course.schema";
import { addCourse, getAllCourses } from "../controllers/course.controller";

export default async function (fastify: FastifyInstance) {
  // List all courses
  fastify.get('/', { schema: getAllCoursesSchema }, getAllCourses);

  // Add course
  fastify.post('/', { schema: addCourseSchema }, addCourse);
}