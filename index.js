const readline = require('readline');
const Parking = require('./src/main');
const parking = new Parking();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const init = () => {
  rl.on('line', (input) => {
    const inputStr = input.split(" ");
    switch (inputStr[0]) {
      case 'create_parking_lot':
        try {
          const result = parking.createParkingLot(inputStr[1]);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
        break;
      case 'park':
        try {
          const registrationNo = inputStr[1].trim();
          const color = inputStr[2].trim();
          const result = parking.park(registrationNo, color);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
        break;
      case 'leave':
        try {
          const slotNo = inputStr[1];
          const result = parking.leaveParking(slotNo);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
        break;
      case 'status':
        try {
          parking.status();
        } catch (error) {
          console.log(error);
        }
        break;
      case 'registration_numbers_for_cars_with_colour':
        try {
          const color = inputStr[1];
          const result = parking.getRegistrationNoFromColor(color);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
        break;
      case 'slot_numbers_for_cars_with_colour':
        try {
          const color = inputStr[1];
          const result = parking.getSlotNumberFromColor(color);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
        break;
      case 'slot_number_for_registration_number':
        try {
          const registrationNo = inputStr[1];
          const result = parking.getSlotNumberFromRegistrationNo(registrationNo);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
        break;
      case ('exit'):
        rl.pause();
        break;
      default:
        console.log("Please enter valid command");
    }
  });
}

rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit? (yes/no) ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});

init();