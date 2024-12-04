const { log } = require('console');
const path = require('path');

console.log('separator: '+path.sep)

const filePath = path.join('content','subfolder','test.txt')
log('full path: '+filePath)

const base = path.basename(filePath)
log('base name: '+base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
log('absolut: '+absolute)