// U78784426

// Car class definition
class Car {constructor(make, speed) {this.make = make; this.speed = speed;}}

    // Method used to accelerate the car by 10 km/h
    Car.prototype.accelerate = function() {
        this.speed += 10;
        console.log(this.make + 'accelerated to' + this.speed + ' km/h.');}
    
    // Method used to brake the car and decrease speed by 5 km/h
    Car.prototype.brake = function() {
        this.speed -= 5;
        console.log(this.make +'slowed down to'+ this.speed +' km/h.');}

// Test Data
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log("Starting speeds");
console.log(`${car1.make} initial speed: ${car1.speed} km/h`);
console.log(`${car2.make} initial speed: ${car2.speed} km/h`);

// Testing acceleration and braking methods Car 1
console.log("Testing Car 1:");
car1.accelerate(); // BMW accelerated to 130 km/h.
car1.brake(); // BMW slowed down to 125 km/h.
car1.accelerate(); //BMW accelerated to 135 km/h.
car1.brake(); // BMW slowed down to 130 km/h.

// Testing accelerating and braking methods Car 2
console.log("Testing Car 2:");
car2.accelerate(); // Mercedes accelerated to 105 km/h.
car2.brake(); // Mercedes slowed down to 100 km/h.
car2.accelerate(); // Mercedes accelerated to 110 km/h.
car2.brake(); // Mercedes slowed down to 105 km/h. 