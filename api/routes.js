const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 8081,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => 'Home',
  });

  server.route({
    method: 'GET',
    path: '/welcome',
    handler: () => 'Hello World!',
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
