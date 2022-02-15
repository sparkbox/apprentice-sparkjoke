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
    handler: (request) => getJokes(request.params.jokeIdx),
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
