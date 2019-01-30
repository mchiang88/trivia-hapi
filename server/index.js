'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
  port: 1128,
  host: 'localhost'
});

const io = require('socket.io')(server.listener, { pingTimeout: 60000 });

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

io.on('connection', function(client) {
  console.log(`client: ${client.id} has connected`);
});