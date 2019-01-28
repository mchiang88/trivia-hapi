'use strict';

const Hapi = require('hapi');
const Path = require('path');

const server = Hapi.server({
  port: 1128,
  host: 'localhost'
});

const init = async () => {

  await server.register(require('inert'));

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: './public'
      }
    }
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();