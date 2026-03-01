class Vehicle{
    constructor(name, price, model){
        this.name=name;
        this.price=price;
        this.model=model;
    }
    printVehicle(){
        console.log("Name :", this.name)
        console.log("Price :", this.price)
        console.log("Model :", this.model)
        
    }
}

class Car extends Vehicle{
    constructor(name, price, model, type, fuel, horsePower){
        super(name,price,model);
        this.type=type;
        this.fuel=fuel;
        this.horsePower=horsePower;
    }
    printCar(){
        this.printVehicle()
        console.log("Type :", this.type)
        console.log("Fuel :", this.fuel)
        console.log("HorsePower :", this.horsePower)
        
    }
}

class Bike extends Vehicle{
    constructor(name, price, model, CC, acceleration){
        super(name,price,model);
        this.CC=CC;
        this.acceleration=acceleration;
        
    }
    printBike(){
        this.printVehicle()
        console.log("CC", this.CC)
        console.log("Acceleration :", this.Acceleration)
       
        
    }
}

let Audi = new Car("Audi", 100000000, "A6", "Automatic", "Hybrid", 4000 )
Audi.printCar()

let KTM = new Bike("KTM", 1000000, "DUKE", 350,400 )
KTM.printBike()

console.log(KTM.__proto__.__proto__==Audi.__proto__.__proto__)