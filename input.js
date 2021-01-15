let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = (usersInput) => {
    if (usersInput === '\u0003') {
      process.exit();
    }
    if (usersInput === '\u0077') {
      connection.write('Move: up');
    }
    if (usersInput === '\u0061') {
      connection.write('Move: left');
    }
    if (usersInput === '\u0073') {
      connection.write('Move: down');
    }
    if (usersInput === '\u0064') {
      connection.write('Move: right');
    }
  };
  stdin.on('data',(key) => {
    handleUserInput(key);
  });
  return stdin;
};

module.exports =  { setupInput };