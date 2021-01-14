const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on("connect",() => {
    console.log('Successfully connected to game server');
    conn.write('Name: bad');
  });
  // message to the server for movement of snek
  // conn.on("connect", () => {
  //   let time = 1000;
  //   for(let i = 0; i < 4; i++){
  //     setTimeout(() => {
  //       conn.write('Move: up');
  //     }, time);
  //     time += 1000;
  //   };
  // });
  return conn;
};

module.exports = connect;