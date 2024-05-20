// U78784426

// Car class definition
class Car {constructor(make, speed) {this.make = make; this.speed = speed;}}

// Method for accelerating the car by 10 km/h
accelerate() {this.speed += 10;
    console.log(`${this.make} accelerated to ${this.speed} km/h.`);}

// Method for braking the car and decreasing speed by 5 km/h
brake() {this.speed -= 5;
    console.log(`${this.make} slowed down to ${this.speed} km/h.`);}

