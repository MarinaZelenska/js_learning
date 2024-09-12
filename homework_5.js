

const car = {
    "engineType": ['GAS', 'DIESEL', 'ELECTRICITY', 'PETROL'],
    "carType": ['Sedan', 'Hatchback', 'Crossower', 'Jeep'],
    "country": ['Germany', 'France', 'Italy', 'USA', 'Spain'],
    
    getInfo(){
        const result = {};
        // Was added loop in function getInfo() for skip function from result
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                result[key] = this[key];
            }
        }
        return result;
    }
}

console.log(car.getInfo())
car.doorsCount = [2, 4, 5]
console.log(car.getInfo())

