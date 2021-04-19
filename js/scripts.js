//Business Logic

function Pizza([], size) {
  this.toppings = []
  this.size = size 
  this.price = 0 
}

Pizza.prototype.totalPrice = function() {
  if (this.toppings.length === 1) {
    this.price += 3;
  } else if (this.toppings.length === 2) { 
    this.price += 6;
  } else if (this.toppings.length === 3) { 
    this.price += 9;
  }
  if (this.size === "small") { 
    this.price += 5;
  } else if (this.size === "medium") {
    this.price += 10;
  } else if (this.size === "large") {
    this.price += 15;
  }
  return this.price 
};

//UI Logic

$(document).ready(function() {
  $("form").submit(function(event) { 
    event.preventDefault();
    const toppings = [$("input:checkbox[name=toppings]:checked").val()];
    console.log(toppings)
    const size = $("input:radio[name=size]:checked").val();
    console.log(size)
    myPizza = new Pizza(toppings, size);
    const price = myPizza.totalPrice();
    console.log(price)
    $(".total").text(toString(price));
    $(".result").show();
  });
});

