class Product {
  title;
  price;
  description;
  image;

  constructor(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}

class ProductItem {
  // responsible for rendering one item
  constructor(product) {
    // product parametar is prod argument from ProductList class -> render() -> for of... -> new ProductItem(prod)
    this.product = product;
  }

  addToCart() {
    console.log('Adding product to cart...');
    console.log(this.product);
  }

  render() {
    const liEl = document.createElement("li");
    liEl.className = "list-el";
    liEl.innerHTML = `
 <img src="${this.product.image}" width="30%" alt="${this.product.title} " > 
 <div> 
 <h3> ${this.product.title} </h3>
 <h4> Price: ${this.product.price} </h4>
 <p>Description: ${this.product.description}</p>
 <button> Add to cart </button>
 </div>
  `;
  const addToCartButton = liEl.querySelector('button');
  addToCartButton.addEventListener('click', this.addToCart.bind(this));
    return liEl;
  }
}

class ProductList {
  product = [
    new Product(
      "Steam Deck LCD",
      "$399",
      "Steam Deck LCD Version Featuring: 64 gb eMMC of Memory, 16 GB LPDDR5 RAM",
      `https://media.gamestop.com/i/gamestop/20003488-1?$pdp2x$`
    ),
    new Product(
      "Steam Controller",
      "$100",
      "Steam Controller! Designed by Valve made for you!",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Steam_Controller_B.jpg/1024px-Steam_Controller_B.jpg"
    ),
  ];
  render() {
    
    const ulEl = document.createElement("ul");
    for (const prod of this.product) {
      /* this keyword is an object(productsList) */
      const productItem = new ProductItem(prod);
      console.log(productItem);
      const liEl = productItem.render();
      ulEl.append(liEl);
    }
    return ulEl;
  }
}

class ShopingCart {
  item = [];

  render() {
    const sectionEl = document.createElement("section");
    sectionEl.innerHTML = `
    <h2> Price: \$ ${0} <h2>
    <button> Buy Now! </button>
    `;
    sectionEl.className = 'cart';
    return sectionEl;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");
    const cart = new ShopingCart();
    const cartEl = cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

const shop = new Shop();
shop.render();
