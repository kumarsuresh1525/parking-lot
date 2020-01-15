'use strict';

class Solution {
  constructor() {
    if (!(this instanceof Solution)) {
      return new Solution();
    }
    this.maxSize = 0;
    this.availableSlots = [];
    this.carDetails = [];
  }

  createParkingLot(noOfLot) {
    try {
      if (isNaN(noOfLot)) throw new Error('Value should be number')
      this.maxSize = parseInt(noOfLot);
      for (let i = 1; i <= this.maxSize; i++) {
        this.availableSlots.push(i);
      }
      return `Created a parking lot with ${this.availableSlots.length} slots`;
    } catch (error) {
      return 'Value should be Number';
    }
  }

  park(registratonNo, color) {
    if (this.maxSize === 0) return 'Please Create Parking lot first';
    if (this.maxSize === this.carDetails.length) return 'Sorry, parking lot is full';
    const lot = {
      slot: this.availableSlots[0],
      registratonNo,
      color
    }
    this.carDetails.push(lot);
    this.availableSlots.shift();
    return `Allocated slot number: ${lot.slot}`;
  }

  leaveParking(value) {
    const lot = parseInt(value);
    if (this.maxSize === 0) return 'Please Create Parking lot first';
    if (this.carDetails.length > 0) {
      const findLot = this.carDetails.filter((item) => item.slot === lot);
      if (findLot.length > 0) {
        // remove lot
        this.carDetails = this.carDetails.filter((item) => item.slot !== lot);
        this.availableSlots.push(lot);
        this.availableSlots.sort();
        return `Slot  numbmer ${lot} is free`;
      } else {
        return `Slot number ${lot} is already empty`;
      }
    } else {
      return 'Parking lot is Empty';
    }
  }

  status() {
    if (this.maxSize === 0) return 'Please Create Parking lot first';
    if (this.carDetails.length > 0) {
      console.log("Slot No.\tRegistration No.\tColor");
      this.carDetails.forEach(car => {
        console.log(car.slot + "\t        " + car.registratonNo + "\t        " + car.color);
      });
    } else {
      return 'Parking lot is Empty';
    }
  }

  getRegistrationNoFromColor(color) {
    if (this.maxSize === 0) return 'Please Create Parking lot first';
    const result = [];
    this.carDetails.forEach((car) => {
      if (car.color === color) {
        result.push(car.registratonNo);
      }
    });
    if (result.length === 0) return 'Not Found';
    return result.join(', ');
  }

  getSlotNumberFromColor(color) {
    if (this.maxSize === 0) return 'Please Create Parking lot first';
    const result = [];
    this.carDetails.forEach((car) => {
      if (car.color === color) {
        result.push(car.slot);
      }
    });
    if (result.length === 0) return 'Not Found';
    return result.join(', ');
  }

  getSlotNumberFromRegistrationNo(registratonNo) {
    if (this.maxSize === 0) return 'Please Create Parking lot first';
    const result = [];
    this.carDetails.forEach((car) => {
      if (car.registratonNo === registratonNo) {
        result.push(car.slot);
      }
    });
    if (result.length === 0) return 'Not Found';
    return result.join(', ');
  }
}

module.exports = Solution;