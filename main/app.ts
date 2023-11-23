import buildServer from "./server";

const server = buildServer();

async function main() {
    await server.listen({ port: 8888 }, (err, address) => {
        if (err) {
          server.log.error(err)
          process.exit(1)
        }
        console.log(`Server listening at ${address}`)
      })
}

main();