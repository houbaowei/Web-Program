"use strict";

var arr = [10, 20, 1, 2];
arr.sort((x, y) => {
    return x-y;
});
console.log(arr); // [1, 2, 10, 20]