interface Car {
    manufacturer: string;
    model: string;
   [key: string]: any; 
}

function car_information(manufacturer: string, model: string, ...args: [string, any][]): Car {
    const car: Car = {
        manufacturer: manufacturer,
       model: model,
    }
    args.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}


const car2: Car = car_information('Toyota', 'Camry', ['color', 'blue'], ['optional_feature', 'sunroof']);
console.log(car2);


interface Cartype {
    model : string,
    manufacturer: string,
    [key:string]:any
}

function myCar(model:string,manufacturer:string, ...args:[string,any][]) {
   const car1: Cartype ={
    model: model,
    manufacturer:manufacturer,
   }
    args.forEach(([key ,value]) =>{
        car1[key] = value;
    });
      return car1          
   }
   const car:Cartype = myCar("Tyota","Camry",["color","red"],["roof",["sunroof"]])
console.log(car)
   