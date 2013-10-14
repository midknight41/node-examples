// Interface
interface IVehicle {
    accelerate(): void;
    brake(): void;
    cruise(): void;
    speed: number;
}

// Module
module Vehicles {

    // Class
    export class Car implements IVehicle {

        public speed: number;

        constructor(public topSpeed: number) {
            this.speed = 0;
        }

        public accelerate()
        {
            console.log("speeding up!");
            this.speed = this.speed + 20;
            //vroom vroom 
        }

        public brake() {
            console.log("slowing down!");
            this.speed = this.speed - 10;
        }

        public cruise() {
            console.log("holding speed at", this.speed);
        }

    }

    export function drive(vehicle: IVehicle, speedLimit: number) {

        if (vehicle.speed < speedLimit) {
            vehicle.accelerate();
            return
        }

        if (vehicle.speed > speedLimit) {
            vehicle.brake();
            return
        }

        if (vehicle.speed = speedLimit) {
            vehicle.cruise();
            return
        }
    }
}

var vehicle: IVehicle = new Vehicles.Car(120);
var speedLimit = 70;

console.log("[joining the motorway]");

setInterval(function() {
    Vehicles.drive(vehicle, speedLimit);
}, 100);

setTimeout(function () {
    console.log("[entering a 30 zone]");
    speedLimit = 30;
}, 3000);

