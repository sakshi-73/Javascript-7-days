//Write your code below this line.
"use strict";
for (var i of my_array) {
  if (i === i.split("").reverse().join("")) {
    console.log(i);
  }
}
