const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 125,
    colors: [
      {
        code: "black",
        img: "./img/product/air.png",
      },
      {
        code: "darkblue",
        img: "./img/product/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 153,
    colors: [
      {
        code: "lightgray",
        img: "./img/product/jordan.png",
      },
      {
        code: "green",
        img: "./img/product/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 145,
    colors: [
      {
        code: "lightgray",
        img: "./img/product/blazer.png",
      },
      {
        code: "green",
        img: "./img/product/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 171,
    colors: [
      {
        code: "black",
        img: "./img/product/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/product/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/product/hippie.png",
      },
      {
        code: "black",
        img: "./img/product/hippie2.png",
      },
    ],
  },
  {
    id: 6,
    title: "Air Max",
    price: 999,
    colors: [
      {
        code: "pink",
        img: "./img/product/max.jpg",
      },
      {
        code: "red",
        img: "./img/product/max2.jpg",
      },
    ],
  },
  {
    id: 7,
    title: "CROCS",
    price: 999,
    colors: [
      {
        code: "red",
        img: "./img/product/red.jpg",
      },
      {
        code: "orange",
        img: "./img/product/red2.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

let currentIndex = 0;

function autoSlide() {
  currentIndex = (currentIndex + 1) % products.length;
  menuItems[currentIndex].click();
}

// Start the auto slider every 4 seconds
let autoSlideInterval = setInterval(autoSlide, 3000);

// Optional: Pause auto slider on user interaction and resume after a delay
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    clearInterval(autoSlideInterval); // Stop auto sliding on manual click

    // Restart auto slider after 10 seconds
    setTimeout(() => {
      autoSlideInterval = setInterval(autoSlide, 2000);
    }, 1000);
  });
});
