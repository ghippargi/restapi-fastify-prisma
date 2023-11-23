import { FastifyRequest, FastifyReply } from 'fastify';

export async function getAllCourses(request: FastifyRequest, reply: FastifyReply) {

  let results = await request.server.prisma.course.findMany({
    orderBy: { id: 'desc' }
  });

  if (results.length === 0) {
    return reply.status(404).send({ message: "No courses found" });
  }

  return reply.status(200).send({ results });
}

export async function addCourse(request: FastifyRequest<AddCourse>, reply: FastifyReply) {
    const { name, duration } = request.body;
  
    let student = await request.server.prisma.course.create({
      data: {
        name,
        duration
      }
    });
  
    return reply.status(201).send(student);
  }
  
