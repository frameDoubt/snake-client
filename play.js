
const { connect }= require('./client');
const { setupInput } = require('./input');

console.log('Connecting...');


// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();
//   const handleUserInput = (key) => {
//     if (key === '\u0003') {
//       process.exit();
//     }
//   };
//   stdin.on('data',(key) => {
//     handleUserInput(key);
//   });
//   return stdin;
// };
setupInput(connect());

// module.exports = connect;