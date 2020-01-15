const readline = require('readline');
const Parking = require('./src/main');
const parking = new Parking();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const init = () => {
  rl.on('line', (input) => {
    console.log(`Received: ${input}`);
  });
}

rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit? (yes/no) ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});

init();