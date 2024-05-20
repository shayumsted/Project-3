// U78784426

// Car class definition
class Car {constructor(make, speed) {this.make = make; this.speed = speed;}}

// Method for accelerating the car by 10 km/h
accelerate(speedIncrease) {this.speed += 10;
    console.log(`${this.make} accelerated to ${this.speed} km/h.`);}

