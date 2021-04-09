//Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings
  this.size = size 
  this.price = 0 
}

Pizza.prototype.totalPrice = function() {
  if (this.toppings.length === 1) this.price += 3
  else if (this.toppings.length === 2) this.price += 6 
  else if (this.toppings.length === 3) this.price += 9 
}


const myPizza = new Pizza(["olives"], "small")
myPizza.totalPrice(); 



