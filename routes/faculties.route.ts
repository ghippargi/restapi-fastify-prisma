import { FastifyInstance } from "fastify";
import { addFacultySchema, getAllFacultiesSchema } from "../schema/faculty.schema";
import { addFaculty, getAllFalcultiets } from "../controllers/faculty.controller";

export default async function (fastify: FastifyInstance) {
  // List all faculties
  fastify.get('/', { schema: getAllFacultiesSchema }, getAllFalcultiets);

  // Add faculty
  fastify.post('/', { schema: addFacultySchema }, addFaculty);
}