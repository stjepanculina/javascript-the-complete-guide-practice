class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShopingCart {
  item = [];


addProduct(product) {
  this.item.push(product);
  this.totalOutput = `<h2> Total: \$${1} </h2>`

}
  render() {
    const shopingEl = document.createElement("section");
    shopingEl.innerHTML = `
    <h2> Total: \$${0} </h2>
    <button> Buy Now! </button>
    `;
    shopingEl.className = "cart";
    this.totalOutput = shopingEl.querySelector('h2');
    return shopingEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log("Adding product to cart...");
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pillows_on_a_hotel_bed.jpg/1024px-Pillows_on_a_hotel_bed.jpg",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg",
      "A carpet which you might like - or not.",
      89.99
    ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");
    /* render ProductList */
    const cart = new ProductList();
    const cartEl = cart.render();
    /* render ShopingCart */
    const shopingCart = new ShopingCart();
    const shopingEl = shopingCart.render();

    renderHook.append(cartEl);
    renderHook.append(prodList);
  }
}

const shop = new Shop();
console.log(shop),
shop.render();
