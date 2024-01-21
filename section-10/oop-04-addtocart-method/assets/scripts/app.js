class Product {
  title = "DEFAULT";
  imageUrl;
  price;
  description;
  
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}

const productList = {
  products: [
    new Product(
      "Steam Deck",
      "https://i.pcmag.com/imagery/reviews/02en94vZRDlIFeB9IKuQAlI-20.fit_scale.size_1028x578.v1646419997.jpg",
      "$560",
      "512 GB storage Steam Deck"
    ),
    new Product(
      "DualSense wireles controller",
      "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-sterling-silver-screenshot-01-en-04sep23?$1200px$",
      "$1,580",
      "Playstation 5 Controller, Model: CFI-ZCP1"
    ),
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `<div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item_content">
        <h2>${this.product.title} </h2>
        <h3>\$${this.product.price} </h3>
        <p>${this.product.description} </p>
        <button> Add to Cart </button>
        </div>
    </div>`;
    return prodEl;
  }
}

productList.render();
