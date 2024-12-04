// Globals - no window

// __dirname - path to current dir
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log('__dirname: ' + __dirname)
setInterval(()=>{
  console.log('hello world')
},1000)
console.log('__filename: ' + __filename)
console.log('require: ' + require)
console.log('module: ' + module)
console.log('process: ' + process)
