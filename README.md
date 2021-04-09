# Pizza-Parlor 
## By Thomas Friedrichs

---

### Project Description

This project is a web application that takes in user peference on pizza toppings and size and returns a price.
---
### Technologies Used
1. HTML5+CSS3
2. JavaScript/ES6+
3. jQuery
4. Bootstrap
5. 

---
### Installation Instructions
1. Clone this repo: `git clone https://github.com/thomasfriedrichs/pizza-parlor`
2. Enter new directory `cd REPO DIR`
3. Begin a web server in order to interact with and view index.html
4. Drag and drop index.html into web browser 
---
### Known Issues:
1. NO KNOWN ISSUES
2. Please open a pull request if you have any issues!
---
### Test Suite/Specification

```

Describe: Pizza Parlor

  * Test: Pizza has Toppings property 
  * Code: const myPizza = new Pizza("olives")
          myPizza.toppings;
  * Expected Output: olives

  * Test: Pizza can take in multiple toppings
  * Code: const myPizza = new Pizza(["olives, cheese"])
          myPizza.toppings;
  * Expected Output: olives cheese 

  * Test: Pizza has size property
  * Code: const myPizza = new Pizza(["olives, cheese"], "small")
          myPizza.size;
  * Expected Output: small 

  * Test: Each topping adds 3 dollars to price 
  * Code: const myPizza = new Pizza(["olives"], "small")
          myPizza.totalPrice();
          myPizza
  * Expected Output: 3

  * Test: It will add price based on size 
  * Code: const myPizza = new Pizza(["olives"], "small")
          myPizza.totalPrice();
          myPizza
  * Expected Output: 8


```

---
### License is GPLv3 and I make no claim to copyright. 

