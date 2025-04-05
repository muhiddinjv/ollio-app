import { createServer } from 'bare-http1'

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello From Bare!\n')
})

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000')
})

// install with `npm i bare-http1`
// and run with `bare http-server.mjs`