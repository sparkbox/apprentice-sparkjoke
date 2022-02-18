import Hapi from '@hapi/hapi';

import getJokes from './jokes';

const init = async () => {
  const server = Hapi.server({
    port: 8081,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/welcome',
    handler: () => 'Hello World!',
  });

  server.route({
    method: 'GET',
    path: '/jokes/{jokeIdx}',
    options:{
      cors: {
        origin: ['*'] //array of allowed origins            
      },
    },
    handler: (request) => getJokes(request.params.jokeIdx),
  });

  server.route({
    method: 'GET',
    path: '/jokes/',
    handler: (request, h) => h.response({
      statusCode: 400,
      error: 'Bad Request',
      message: 'No joke index provided',
    }).code(400),
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
