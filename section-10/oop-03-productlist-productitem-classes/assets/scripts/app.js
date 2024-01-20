class Product {
  title = 'DEFAULT'
  imageUrl;
  price;
  description;
}

console.log(new Product())

const productList = {
  products: [
    {
      title: "Steam Deck",
      imageUrl: "https://i.pcmag.com/imagery/reviews/02en94vZRDlIFeB9IKuQAlI-20.fit_scale.size_1028x578.v1646419997.jpg",
      price: "$560",
      description: "512 GB storage Steam Deck",
    },
    {
      title: "DualSense wireles controller",
      imageUrl: "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-sterling-silver-screenshot-01-en-04sep23?$1200px$",
      price: "$1,580",
      description: "Playstation 5 Controller, Model: CFI-ZCP1",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `<div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class="product-item_content">
          <h2>${prod.title} </h2>
          <h3>\$${prod.price} </h3>
          <p>${prod.description} </p>
          <button> Add to Cart </button>
          </div>
      </div>`;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
