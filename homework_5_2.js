var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    price(){
        totalPrice = 0;
        for (let key in this){
            let value = parseInt(this[key]);
            if (!isNaN(value)) { 
                totalPrice += value;
            }
        }
        return `${totalPrice} грн`;
        },

    minPrice(){
        let minPrice = Infinity;
        for (let key in this) {
            let value = parseInt(this[key]);
            if (!isNaN(value) && value < minPrice) {
                minPrice = value;
            }
        }
        return `${minPrice} грн`;
    },

    maxPrice() {
        let maxPrice = 0;
        for (let key in this) {
            let value = parseInt(this[key]);
            if (!isNaN(value) && value > maxPrice) {
                maxPrice = value;
            }
        }
        return `${maxPrice} грн`;
    }
}
