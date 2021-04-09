//Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings
  this.size = size 
  this.price = 0 
}

Pizza.prototype.totalPrice = function() {
  this.toppings.forEach(length()) 
    this.price += 3
  
}

const myPizza = new Pizza(["olives, cheese, pepperoni"], "small")
          myPizza;



