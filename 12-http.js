const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res)=>{
  if(req.url === '/'){
    res.end('Welcome to our home pages')
  }
  else if(req.url === '/about'){
    res.end('Here is our short history')
  }
  else {
    res.end(`
  <h1>Opps!</h1>
  <p>We can't seem to find the page you're looking for</p>
  <a href="/">back hoome</a>
  `)
  }
})

server.listen(1000);