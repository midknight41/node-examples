///<reference path=".\typed\node.d.ts"/>

module fixed {

    function IsGreaterThanZero(value, callback) {

        setTimeout(function () {

            console.log("do some work");

            if (value > 0)
                callback(true);
            else
                callback(false);

        }, 1000);

    }

    IsGreaterThanZero(0, function (value) {
        console.log("0:", value);

        IsGreaterThanZero(-1, function (value) {
            console.log("-1:", value);

            IsGreaterThanZero(1, function (value) {
                console.log("1:", value);
            });
        });
    });
    
}