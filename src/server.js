require('dotenv').config()
const debug = require('debug')('evaluation:server')
const app = require('./app')
const http = require('http')
const mongoose = require('mongoose')
const server = http.createServer(app)

const normalizePort = val => {
  const port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  };
  if (port >= 0) {
    return port
  };

  return false
}

const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

const onError = error => {
  if (error.syscall !== 'listen') {
    throw error
  };
  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)

    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)

    default:
      throw error
  };
}

const onListening = () => {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  debug('Listening on ' + bind)
}

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Database Connected!')
  server.listen(port)
  server.on('error', onError)
  server.on('listening', onListening)
  console.log(`Server listening in port ${port}`)
})