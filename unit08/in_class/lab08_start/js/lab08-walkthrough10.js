/* code goes here */
var order = {}; 
 
// order.product = "Self Portrait in a Straw Hat"; 
// order.price = 15.0; 
// order.quantity = 2; 
// order.total = function() { return this.price * this.quantity; }; 

// order["product"] = "Self Portrait in a Straw Hat"; 
// order["price"] = 15.0; 
// order["quantity"] = 2; 
// order["total"] = function() { return this.price * this.quantity; }; 

// var order = { 
//     product: "Self Portrait in a Straw Hat", 
//     price: 15.0, 
//     quantity: 2, 
//     total: function() { return this.price * this.quantity; }     
// };

function order(product, price, quantity) { 
    this.product = product; 
    this.price = price; 
    this.quantity = quantity; 
    this.total = function() { return this.price * this.quantity; }   
}

var example1  = new order("Self Portrait in a Straw Hat", 15, 2); 
var example2  = new order("Untitled #23", 10, 4);

document.write("Product=" + order.product);
document.write("<br>Price=" + order.price); 
document.write("<br>Quantity=" + order.quantity); 
document.write("<br>Total=" + order.total()); 