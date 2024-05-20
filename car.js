// U78784426

// Car class definition
class Car {constructor(make, speed) {this.make = make; this.speed = speed;}}

// Method for accelerating the car by 10 km/h
accelerate() ;
    this.speed += 10;
    console.log(`${this.make} accelerated to ${this.speed} km/h.`);

// Method for braking the car and decreasing speed by 5 km/h
brake() 
    this.speed -= 5;
    console.log(`${this.make} slowed down to ${this.speed} km/h.`);

// Test Data
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log("Starting speeds");
console.log('${car1.make} speed: ${car1.speed} km/h');
console.log('${car2.make} speed: ${car2.speed} km/h');

// Testing accelartion and braking methods Car 1
console.log("Testing Car 1:");
car1.accelerate();
car1.brake();
car1.accelerate();
car1.brake(); 

// Testing accelerating and braking methods Car 2
console.log("Testing Car 2:");
car2.accelerate();
car2.brake();
car2.accelerate();
car2.brake(); 
