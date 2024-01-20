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
}

class ProductItem {
  render() {
    const appEl = document.getElementById("app");
    const ulEl = document.createElement("ul");
    for (const prod of this.product) {
      /* this keyword is an object(productsList) */
      const liEl = document.createElement("li");
      liEl.className = "list-el";
      liEl.innerHTML = `
     <img src="${prod.image}" width="30%" alt="${prod.title} " > 
     <div> 
     <h3> ${prod.title} </h3>
     <h4> Price: ${prod.price} </h4>
     <p>Description: ${prod.description}</p>
     </div>
      `;
      ulEl.append(liEl);
    }
    appEl.append(ulEl);
  }
}

/* const productsList = {
  render() {},
};

productsList.render(); */

const productList = new ProductList();
productList.render();
