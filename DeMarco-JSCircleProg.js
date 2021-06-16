function Circle(diameter){

    this.diameter = diameter;

    //radius method
    this.radius = function () {
        return this.diameter / 2;
    };

    //circumference method
    this.circumference = function () {
        return 2 * Math.PI * this.radius();
    };

    //area method
    this.area = function () {
        return Math.PI * this.radius() * this.radius();
    };

}

var c = new Circle(10);
console.log('Diameter = ', c.diameter.toFixed(2));
console.log('Radius = ', c.radius().toFixed(2));
console.log('Circumference = ', c.circumference().toFixed(2));
console.log('Area = ', c.area().toFixed(2));



