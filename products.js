const products = [
  {
    id: 1,
    title: "New Sneakers",
    price: "£ 50",
    sizes: [7, 8, 9],
    colors: [
      {
        code: "#2d3e66",
        img: ["./images/sneaker blue 2.png", "./images/sneaker blue 3.png"],
      },
      {
        code: "#4e4d4e",
        img: ["./images/sneaker grey 2.png", "./images/sneaker grey 3.png"],
      },
    ],
  },
  {
    id: 2,
    title: "New Polo",
    price: "£ 30",
    sizes: ["S", "M", "L"],
    colors: [
      {
        code: "#2d3e66",
        img: [
          "./images/polo shirt blue 1.png",
          "./images/polo shirt blue 2.png",
        ],
      },
      {
        code: "black",
        img: [
          "./images/polo shirt black 1.png",
          "./images/polo shirt black 2.png",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "New Hoodie",
    price: "£ 40",
    sizes: ["S", "M", "L"],
    colors: [
      {
        code: "white",
        img: ["./images/hoodie white 1.png", "./images/hoodie white 2.png"],
      },
      {
        code: "#ebe9e9",
        img: ["./images/hoodie grey 1.png", "./images/hoodie grey 2.png"],
      },
    ],
  },
  {
    id: 4,
    title: "New Jogger",
    price: "£ 35",
    sizes: ["S", "M", "L"],
    colors: [
      {
        code: "#2b2b2b",
        img: ["./images/jogger grey 1.png", "./images/jogger grey 2.png"],
      },
      {
        code: "#2a2d4c",
        img: ["./images/jogger blue 1.png", "./images/jogger blue 2.png"],
      },
    ],
  },
  {
    id: 5,
    title: "New Shorts",
    price: "£ 45",
    sizes: ["S", "M", "L"],
    colors: [
      {
        code: "black",
        img: ["./images/shorts black 1.png", "./images/shorts black 2.png"],
      },
      {
        code: "9e7c5f",
        img: ["./images/shorts brown 1.png", "./images/shorts brown 2.png"],
      },
    ],
  },
];

const slideBar = document.querySelector(".slideBar");
const navItems = document.querySelectorAll(".navItem");
let chosenProduct = products[0];
const chosenProductImg = document.querySelectorAll(".productImg");
const chosenProductTitle = document.querySelector(".productTitle");
const chosenProductPrice = document.querySelector(".productPrice");
const chosenProductColors = document.querySelectorAll(".productColor");
const chosenProductColor1 = document.querySelector(".productColor1");
const chosenProductColor2 = document.querySelector(".productColor2");
const chosenProductSizes = document.querySelectorAll(".productSize");

//
chosenProductTitle.textContent = chosenProduct.title.toUpperCase();
chosenProductPrice.textContent = chosenProduct.price;
chosenProductImg.forEach((img, i) => {
  img.src = chosenProduct.colors[0].img[i];
});

chosenProductColors.forEach((color, i) => {
  color.style.backgroundColor = chosenProduct.colors[i].code;
});
chosenProductSizes.forEach((size, i) => {
  size.addEventListener("click", () => {
    chosenProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
  size.textContent = chosenProduct.sizes[i];
});
//
navItems.forEach((item, i) => {
  item.addEventListener("click", function () {
    slideBar.style.transform = `translateX(${-100 * i}vw)`;
    chosenProduct = products[i];
    chosenProductTitle.textContent = chosenProduct.title.toUpperCase();
    chosenProductPrice.textContent = chosenProduct.price;
    chosenProductImg.forEach((img, i) => {
      img.src = chosenProduct.colors[0].img[i];
    });
    chosenProductColors.forEach((color, i) => {
      color.style.backgroundColor = chosenProduct.colors[i].code;
    });
    chosenProductSizes.forEach((size, i) => {
      size.addEventListener("click", () => {
        chosenProductSizes.forEach((size) => {
          size.style.backgroundColor = "white";
          size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
      });
      size.textContent = chosenProduct.sizes[i];
    });
  });
});
chosenProductColor1.addEventListener("click", () => {
  chosenProductImg.forEach((img, i) => {
    img.src = chosenProduct.colors[0].img[i];
  });
});
chosenProductColor2.addEventListener("click", () => {
  chosenProductImg.forEach((img, i) => {
    img.src = chosenProduct.colors[1].img[i];
  });
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".payment").style.display = "none";
});
document.querySelector(".productBuy").addEventListener("click", () => {
  document.querySelector(".payment").style.display = "block";
});
