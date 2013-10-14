// Module
var Vehicles;
(function (Vehicles) {
    // Class
    var Car = (function () {
        function Car(topSpeed) {
            this.topSpeed = topSpeed;
            this.speed = 0;
        }
        Car.prototype.accelerate = function () {
            console.log("speeding up!");
            this.speed = this.speed + 20;
        };

        Car.prototype.brake = function () {
            console.log("slowing down!");
            this.speed = this.speed - 10;
        };

        Car.prototype.cruise = function () {
            console.log("holding speed at", this.speed);
        };
        return Car;
    })();
    Vehicles.Car = Car;

    function drive(vehicle, speedLimit) {
        if (vehicle.speed < speedLimit) {
            vehicle.accelerate();
            return;
        }

        if (vehicle.speed > speedLimit) {
            vehicle.brake();
            return;
        }

        if (vehicle.speed = speedLimit) {
            vehicle.cruise();
            return;
        }
    }
    Vehicles.drive = drive;
})(Vehicles || (Vehicles = {}));

var vehicle = new Vehicles.Car(120);
var speedLimit = 70;

console.log("[joining the motorway]");

setInterval(function () {
    Vehicles.drive(vehicle, speedLimit);
}, 100);

setTimeout(function () {
    console.log("[entering a 30 zone]");
    speedLimit = 30;
}, 3000);
//@ sourceMappingURL=typescript_example.js.map
