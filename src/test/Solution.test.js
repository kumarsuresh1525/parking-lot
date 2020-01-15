const Solution = require('../main');

describe('Test for Create parking lot', () => {
  const parking = new Solution();
  it('Should be able to create 6 parking slots', () => {
    const actual = parking.createParkingLot(6);
    const expected = 'Created a parking lot with 6 slots';
    expect(actual).toStrictEqual(expected);
  });

  it('Should be return error if value is not number', () => {
    const actual = parking.createParkingLot('a');
    const expected = 'Value should be Number';
    expect(actual).toStrictEqual(expected);
  });
});

describe('Test for parking alotment', () => {
  const parking = new Solution();
  it('Should get error if lot is not created', () => {
    const actual = parking.park('KA-01-HH-1234', 'white');
    const expected = 'Please Create Parking lot first';
    expect(actual).toStrictEqual(expected);
  });

  it('Should able to alot parking for registration number KA-01-HH-1234', () => {
    parking.createParkingLot(6);
    const actual = parking.park('KA-01-HH-1234', 'white');
    const expected = 'Allocated slot number: 0';
    expect(actual).toStrictEqual(expected);
  });

  it('Should able to alot parking for registration number KA-01-HH-9999', () => {
    parking.createParkingLot(6);
    const actual = parking.park('KA-01-HH-9999', 'white');
    const expected = 'Allocated slot number: 1';
    expect(actual).toStrictEqual(expected);
  });

  it('Should able to alot parking for registration number KA-01-BB-0001', () => {
    parking.createParkingLot(6);
    const actual = parking.park('KA-01-BB-0001', 'black');
    const expected = 'Allocated slot number: 2';
    expect(actual).toStrictEqual(expected);
  });

  it('Should able to alot parking for registration number KA-01-HH-2701', () => {
    parking.createParkingLot(6);
    const actual = parking.park('KA-01-HH-2701', 'blue');
    const expected = 'Allocated slot number: 3';
    expect(actual).toStrictEqual(expected);
  });

  it('Should able to alot parking for registration number KA-01-HH-3141', () => {
    parking.createParkingLot(6);
    const actual = parking.park('KA-01-HH-3141', 'black');
    const expected = 'Allocated slot number: 4';
    expect(actual).toStrictEqual(expected);
  });

  it('Should able to alot parking for registration number KA-01-HH-3142', () => {
    parking.createParkingLot(6);
    const actual = parking.park('KA-01-HH-3142', 'black');
    const expected = 'Allocated slot number: 5';
    expect(actual).toStrictEqual(expected);
  });

  it('Should able to show parking full message if alotment exceed more than alotment', () => {
    parking.createParkingLot(6);
    const actual = parking.park('KA-01-HH-3143', 'black');
    const expected = 'Sorry Parking is Full';
    expect(actual).toStrictEqual(expected);
  });
});

describe('Test for leave parking', () => {
  const parking = new Solution();
  it('Should able show free slot message when slot is avaliable', () => {
    parking.createParkingLot(6);
    parking.park('KA-01-HH-3141', 'black');
    parking.park('KA-01-HH-3143', 'white');
    const actual = parking.leaveParking(1);
    const expected = 'Slot  numbmer 1 is free';
    expect(actual).toStrictEqual(expected);
  });

  it('Should able show message if alotment is already free', () => {
    parking.park('KA-01-HH-3141', 'black');
    const actual = parking.leaveParking(2);
    const expected = 'Slot number 2 is already empty';
    expect(actual).toStrictEqual(expected);
  });
});

describe('Test to check status of parking', () => {
  const parking = new Solution();
  it('Should status of the parking', () => {
    parking.createParkingLot(6);
    parking.park('KA-01-HH-3141', 'black');
    parking.park('KA-01-HH-3143', 'white');
    const expected = [
      {
        slot: 0, registratonNo: 'KA-01-HH-3141', color: 'black'
      },
      {
        slot: 1, registratonNo: 'KA-01-HH-3143', color: 'white'
      }
    ];
    expect(parking.carDetails).toStrictEqual(expected);
  });
});

describe('Test registration number', () => {
  const parking = new Solution();
  it('Should able to get registration number from color', () => {
    parking.createParkingLot(6);
    parking.park('KA-01-HH-3141', 'black');
    parking.park('KA-01-HH-3143', 'white');
    parking.park('KA-01-HH-1234', 'white');
    const actual = parking.getRegistrationNoFromColor('white')
    const expected = 'KA-01-HH-3143,KA-01-HH-1234';
    expect(actual).toStrictEqual(expected);
  });

  it('Should show not found error if not found', () => {
    const actual = parking.getRegistrationNoFromColor('red')
    const expected = 'Not Found';
    expect(actual).toStrictEqual(expected);
  });
});

describe('Test slot number', () => {
  const parking = new Solution();
  it('Should able to get slot number from color', () => {
    parking.createParkingLot(6);
    parking.park('KA-01-HH-3141', 'black');
    parking.park('KA-01-HH-3143', 'white');
    parking.park('KA-01-HH-1234', 'white');
    const actual = parking.getSlotNumberFromColor('white')
    const expected = '1,2';
    expect(actual).toStrictEqual(expected);
  });

  it('Should show not found error if not found', () => {
    const actual = parking.getSlotNumberFromColor('red')
    const expected = 'Not Found';
    expect(actual).toStrictEqual(expected);
  });
});

describe('Test slot number', () => {
  const parking = new Solution();
  it('Should able to get slot number from color', () => {
    parking.createParkingLot(6);
    parking.park('KA-01-HH-3141', 'black');
    parking.park('KA-01-HH-3143', 'white');
    parking.park('KA-01-HH-1234', 'white');
    const actual = parking.getSlotNumberFromColor('white')
    const expected = '1,2';
    expect(actual).toStrictEqual(expected);
  });

  it('Should show not found error if not found', () => {
    const actual = parking.getSlotNumberFromColor('red')
    const expected = 'Not Found';
    expect(actual).toStrictEqual(expected);
  });
});

describe('Test slot number from registration number', () => {
  const parking = new Solution();
  it('Should able to get slot number from registration no.', () => {
    parking.createParkingLot(6);
    parking.park('KA-01-HH-3141', 'black');
    parking.park('KA-01-HH-3143', 'white');
    parking.park('KA-01-HH-1234', 'white');
    const actual = parking.getSlotNumberFromRegistrationNo('KA-01-HH-3143')
    const expected = '1';
    expect(actual).toStrictEqual(expected);
  });

  it('Should show not found error if not found', () => {
    const actual = parking.getSlotNumberFromRegistrationNo('KA-01-HH-3140')
    const expected = 'Not Found';
    expect(actual).toStrictEqual(expected);
  });
});