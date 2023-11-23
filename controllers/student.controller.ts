import { FastifyRequest, FastifyReply } from 'fastify';

export async function getAllStudents(request: FastifyRequest, reply: FastifyReply) {

  let results = await request.server.prisma.student.findMany({
    orderBy: { id: 'desc' },
    include: { enrolledCourses: {include: { course: true } } }
  });

  if (results.length === 0) {
    return reply.status(404).send({ message: "No elements found" });
  }

  return reply.status(200).send({ results });
}

export async function addStudent(request: FastifyRequest<AddStudent>, reply: FastifyReply) {
    const { name, email, details } = request.body;
  
    let student = await request.server.prisma.student.create({
      data: {
        name,
        email,
        details
      }
    });
  
    return reply.status(201).send(student);
}

export async function associateCourseWithStudent(request: FastifyRequest<AddCourseStudent>, reply: FastifyReply) {
  const { studentId, courseId, assignedAt } = request.body;

  let student = await request.server.prisma.studentCourse.create({
    data: {
      studentId,
      courseId,
      assignedAt
    }
  });

  return reply.status(201).send(student);
}
  
