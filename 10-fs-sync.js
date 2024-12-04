const { log } = require('console');
const {readFileSync, writeFileSync} = require('fs');
// alternative of above:
// const fs = require('fs');
// fs.read
// fs.write
log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

log(first, second)

writeFileSync(
  `./content/result-sync.txt`, 
  `\nHere is the result:\n\n${first}\n${second}`,
  {flag: 'a'})


  log('done')
  log('start2')
