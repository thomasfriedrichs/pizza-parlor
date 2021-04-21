//Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings
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
  } else {
    this.price += 0;
  }

  if (this.size === "small") { 
    this.price += 5;
  } else if (this.size === "medium") {
    this.price += 10;
  } else { 
    this.price += 15;
  }
  return this.price 
};

//UI Logic

$(document).ready(function() {
  $("form").submit(function(event) { 
    event.preventDefault();
    let toppings = []
    $("input:checkbox[name=toppings]:checked").each(() => {
      let topping = $(this).val();
      toppings.push(topping);
    })
    const size = $("input:radio[name=size]:checked").val();
    myPizza = new Pizza(toppings, size);
    console.log(myPizza)
    const price = myPizza.totalPrice();
    $(".total").text(price.toString());
    $(".result").show();
  });
});

