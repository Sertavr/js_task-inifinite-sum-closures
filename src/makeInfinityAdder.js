'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(init = 0) {
  let sum = init;
  const adder = (num) => {
    if (num === undefined) {
      const count = sum;

      sum = 0;

      return count;
    }

    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
