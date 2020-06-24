var rect = require('./rectange');
const rectange = require('./rectange');

function solveRect(l,b) {
     console.log("Solving for rectangle with l = " + l + "and b =" + b);

     rect(l,b,(err,rectange) => {
       if(err) {
           console.log("ERROR: ",err.message);
       }else{
           console.log("The area of the rectangle of dimentions l = " + l + " and b = " + b + "is " + rectange.area());
           console.log("The perimeter of the rectangle of dimentions l = " + l + " and b = " + b + "is " + rectange.perimeter());
       }
     });
     console.log("This statement is afer the call of rect()");

}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);