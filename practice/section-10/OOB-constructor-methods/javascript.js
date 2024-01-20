const products = [
  {
    name: "Steam Deck LCD",
    price: "$399",
    description:
      "Steam Deck LCD Version Featuring: 64 gb eMMC of Memory, 16 GB LPDDR5 RAM",
    image: `https://media.gamestop.com/i/gamestop/20003488-1?$pdp2x$`,
  },
  {
    name: "Steam Controller",
    price: "$100",
    description: "Steam Controller designed by Valve made for you!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Steam_Controller_B.jpg/1024px-Steam_Controller_B.jpg",
  },
];

const render = () => {
  const appEl = document.getElementById("app");
  const ulEl = document.createElement("ul");
  for (const prod of products) {
    const liEl = document.createElement("li");
    liEl.className = "list-el";
    liEl.innerHTML = `
   
   <img src="${prod.image}" width="30%" alt="${prod.name} " > 
   
    `;
    ulEl.append(liEl);
  }
  appEl.append(ulEl);
};

render();
