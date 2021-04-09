//Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings
  this.size = size 
  this.price = 0 
}

Pizza.prototype.totalPrice = function() {
  if (this.toppings[i] === 1) {
    this.price += 3
  }
}


const myPizza = new Pizza(["olives"], "small")
          myPizza.totalPrice();



