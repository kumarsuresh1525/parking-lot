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
}

module.exports = Solution;