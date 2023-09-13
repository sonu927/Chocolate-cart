# Chocolate-cart
This is webpage with functionality to add 8 types to different chocolates to your custom pack.

## About  
In this you can add different types of chocolates of your choice in your pack.  
But 8 is the limit for a pack, you can only add 8 chocolates in your pack.  
When you add a chocolate in our pack you can increase the quantity of chocolate in your pack and similary decrease the quantity.  
To delete a chocolate from pack you just have to decrease the quantity to 0 and it will be deleted.

## Approach
### Structure (HTML)
In Html i made header to contain heading and cart icon which on clicking open the cart from right side.  
Then a div named list which contains all the chocolates which is added through javaScript.  
At last the cart div in which all the items added to pack are shown.

### Fuctionality (JavaScript)
Firstly I selected all the html elements which are needed like list cartList.  
Then made a array of products which contains all the chocolates as objects.  
Created a function initApp to add all chocolates to list when weppage is loded.  
Made a function addToCart to add items to cart which is acheived by adding the item to an array which contains cart items and this function is called on click of add to cart button of product.  
Fuction reloadCard is used to reload the cart card whenever new item is added.  
Function changeQuantity is used to increase the quantity of chocolate in pack.  
Whenever user try to add an item after adding 8 chocolates already then a dialog box appear with a close button. This is acheived by adding a check in both the functions addToCart and changeQuantity. 
