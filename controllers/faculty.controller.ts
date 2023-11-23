import { FastifyRequest, FastifyReply } from 'fastify';

export async function getAllFalcultiets(request: FastifyRequest, reply: FastifyReply) {

  let results = await request.server.prisma.faculty.findMany({
    orderBy: { id: 'desc' }
  });

  if (results.length === 0) {
    return reply.status(404).send({ message: "No faculty found" });
  }

  return reply.status(200).send({ results });
}

export async function addFaculty(request: FastifyRequest<AddFaculty>, reply: FastifyReply) {
    const { name, courseId } = request.body;
  
    let student = await request.server.prisma.faculty.create({
      data: {
        name,
        courseId
      }
    });
  
    return reply.status(201).send(student);
  }
  
