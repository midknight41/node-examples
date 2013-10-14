
    function DoSomethingNew(hello, callback) {
        callback(null, hello);
    }

    DoSomethingNew("hello world", function (err, data) {
        console.log("returning:", data);
    });

    function DoSomethingOld(hello) {
        return hello;
    }

    var ret = DoSomethingOld("hello world");
    console.log("returning:", ret);


    function someMethod(param, callback) {

    }

    var a = someMethod("data", function (err,data) {

    });