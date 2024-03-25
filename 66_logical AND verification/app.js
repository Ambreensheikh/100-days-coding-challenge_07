"use strict";
//logical && verification
//if both sides are true in a function
function checkBothTrue(shape1, shape2) {
    return shape1 == shape2 && shape1 != shape2;
}
console.log(checkBothTrue(true, false));
