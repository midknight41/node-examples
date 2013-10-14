///<reference path=".\typed\node.d.ts"/>

function IsGreaterThanZero(value) {

    setTimeout(function () {

        console.log("do some work");

        if (value > 0)
            return true;
        else
            return false;

    }, 1000);

}

console.log(" 0:", IsGreaterThanZero(0));
console.log("-1:", IsGreaterThanZero(-1));
console.log(" 1:", IsGreaterThanZero(1));