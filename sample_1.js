'use strict';

var numList;
var n = process.env.MAX_NUM || 4;

(function () {
  for (var i = n; i > 0; i--) {
    numList = '';
    displayNum(i);
  }

  function displayNum(num) {
    if (num > 0) {
      numList = numList + ' ' + num.toString();
      displayNum(--num);
    } else {
      console.log(numList);
      return;
    }
  }
})();