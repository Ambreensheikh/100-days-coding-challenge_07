 //logical && verification
 //if both sides are true in a function
 function checkBothTrue(shape1: boolean, shape2: boolean): boolean {
      return shape1 == shape2  && shape1 != shape2
 }
 console.log(checkBothTrue(true , false));