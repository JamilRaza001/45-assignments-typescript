"use strict";
function car_information(manufacturer, model, ...args) {
    const car = {
        manufacturer: manufacturer,
        model: model,
    };
    args.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const car2 = car_information('Toyota', 'Camry', ['color', 'blue'], ['optional_feature', 'sunroof']);
console.log(car2);
function myCar(model, manufacturer, ...args) {
    const car1 = {
        model: model,
        manufacturer: manufacturer,
    };
    args.forEach(([key, value]) => {
        car1[key] = value;
    });
    return car1;
}
const car = myCar("Tyota", "Camry", ["color", "red"], ["roof", ["sunroof"]]);
console.log(car);
