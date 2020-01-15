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
      for (let i = 0; i < this.maxSize; i++) {
        this.availableSlots.push(i);
      }
      return `Created a parking lot with ${this.availableSlots.length} slots`;
    } catch (error) {
      return 'Value should be Number';
    }
  }
}

module.exports = Solution;