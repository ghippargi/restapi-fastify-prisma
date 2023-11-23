import fastify from 'fastify';
import pino from 'pino';
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import prismaPlugin from '../plugins/prisma'
import StudentRouter from "../routes/students.route";
import CourseRouter from "../routes/courses.route";
import FacultyRouter from "../routes/faculties.route";
import { courseSchema, facultySchema, studentSchema } from '../schema/models.schema';
import { messageSchema, paramIdSchema } from '../schema/common.schema';

function buildServer() {
    const server = fastify({
        logger: pino({ level: 'info' })
    });

    const swaggerOptions = {
        swagger: {
            info: {
                title: "REST API Fastify Prisma PostgreSQL",
                description: "Application that exposes REST API. Used fasify, Prismo and Postgresql to build the APIs.",
                version: "0.1.0",
            },
            host: "localhost",
            schemes: ["http", "https"],
            consumes: ["application/json"],
            produces: ["application/json"],
            tags: [{ name: "Default", description: "Default" }],
        },
    };
    
    const swaggerUiOptions = {
        routePrefix: "/docs",
        exposeRoute: true,
    };

    server.register(fastifySwagger, swaggerOptions);
    server.register(fastifySwaggerUi, swaggerUiOptions);
    server.register(prismaPlugin);

    // Json Schemas
    server.addSchema(studentSchema);
    server.addSchema(courseSchema);
    server.addSchema(facultySchema);
    server.addSchema(messageSchema);
    server.addSchema(paramIdSchema);
    
    server.get("/healthcheck", async function () {
        return { status: "OK" };
    });

    // Register the Student route
    server.register(StudentRouter, { prefix: '/api/v1/student' });

    // Register the Course route
    server.register(CourseRouter, { prefix: '/api/v1/course' });

    // Register the Faculty route
    server.register(FacultyRouter, { prefix: '/api/v1/faculty' });

    return server;
}

export default buildServer;