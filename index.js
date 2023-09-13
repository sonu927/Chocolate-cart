// Selecting elements from the HTML
let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

// Adding event listeners to open and close the shopping cart
openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

// Array of product data
let products = [
  {
    id: 1,
    title: "Milk Chocolate",
    price: 2.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQobJZU_2A9KZOKJ7bBbSZz8bWaDV_mGwxeHA&usqp=CAU",
  },
  {
    id: 2,
    title: "Dark Chocolate",
    price: 3.49,
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2021/02/dark-chocolate-bar-732x549-thumbnail.jpg",
  },
  {
    id: 3,
    title: "White Chocolate",
    price: 2.79,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Chocolate-branco-2.webp/1024px-Chocolate-branco-2.webp.png",
  },
  {
    id: 4,
    title: "Hazelnut Chocolate",
    price: 4.99,
    image: "https://static.toiimg.com/thumb/53315235.cms?width=1200&height=900",
  },
  {
    id: 5,
    title: "Caramel Chocolate",
    price: 3.99,
    image:
      "https://www.moipot.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/caramel_chocolate.jpg",
  },
  {
    id: 6,
    title: "Mint Chocolate",
    price: 3.29,
    image:
      "https://butterwithasideofbread.com/wp-content/uploads/2017/12/Mint-Chocolates.BSB_.IMG_5668.jpg",
  },
  {
    id: 7,
    title: "Almond Chocolate",
    price: 4.49,
    image:
      "https://moddys.in/cdn/shop/products/RoastedALmond_1201x.png?v=1593857104",
  },
  {
    id: 8,
    title: "Raspberry Chocolate",
    price: 3.79,
    image:
      "https://whatmollymade.com/wp-content/uploads/2021/08/chocolate-covered-raspberries-1.jpg",
  },
  {
    id: 9,
    title: "Orange Chocolate",
    price: 3.49,
    image:
      "https://i.etsystatic.com/22866487/r/il/da3b37/2326380595/il_570xN.2326380595_i8tb.jpg",
  },
  {
    id: 10,
    title: "Coconut Chocolate",
    price: 3.99,
    image:
      "https://elavegan.com/wp-content/uploads/2019/04/vegan-coconut-chocolate-bounty-bars-on-a-plate.jpg",
  },
  {
    id: 11,
    title: "Peanut Butter Chocolate",
    price: 4.29,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZA1TPHzNl_P6Jq8n9_hn008S_DkEd-hZLw&usqp=CAU",
  },
];

// Array to store items in the cart
let listCards = [];

// Initialize the application by creating product elements
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.setAttribute("data-key", key);
    newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.title}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}
initApp();

// Function to calculate the total quantity of items in the cart
function getTotalQuantity() {
  let totalQuantity = 0;
  listCards.forEach((value) => {
    if (value != null && value.quantity) {
      totalQuantity += value.quantity;
    }
  });
  return totalQuantity;
}

// Function to add an item to the cart
function addToCard(key) {
  if (getTotalQuantity() === 8) {
    const dialogBox = document.getElementById("dialog-box");
    dialogBox.style.display = "block";

    return;
  }
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
    const itemDiv = list.querySelector(`.item[data-key="${key}"]`);
    itemDiv.querySelector("button").innerText = "Added";
  }
  reloadCard();
}

// Function to reload and display the cart items
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.title}</div>
                <div>$${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = "Total : $" + totalPrice.toLocaleString();
  quantity.innerText = count;
}

// Function to change the quantity of an item in the cart
function changeQuantity(key, quantity) {
  if (getTotalQuantity() === 8) {
    const dialogBox = document.getElementById("dialog-box");
    dialogBox.style.display = "block";

    return;
  }
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}

// Add an event listener for the close button
const closeDialogButton = document.getElementById("close-dialog-button");
closeDialogButton.addEventListener("click", () => {
  const dialogBox = document.getElementById("dialog-box");
  dialogBox.style.display = "none";
});
