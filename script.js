const openMenu = document.querySelector(".openmenu");
const closeMenu = document.querySelector(".closemenu");
const toggleMenu = document.querySelector(".toggle-menu");

openMenu.addEventListener("click", () => {
  toggleMenu.classList.add("left-0");
  openMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  toggleMenu.classList.remove("left-0");
  openMenu.classList.remove("hidden");
  closeMenu.classList.add("hidden");
});

// Making the carousel effect

let indexValue = 1;

function slide_left(e) {
  showImg((indexValue += e));
}

function slide_right(e) {
  showImg((indexValue -= e));
}

function showImg(e) {
  let i;
  const img = document.querySelectorAll(".carousel");
  if (e > img.length) {
    indexValue = 1;
  }

  if (e < 1) {
    indexValue = img.length;
  }

  for (let i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  img[indexValue - 1].style.display = "block";
}

// Quantity Selector button

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const quantity = document.querySelector(".quantity");

let quantity_number = 0;

plus.addEventListener("click", () => {
  quantity_number++;
  quantity.textContent = quantity_number;
  // console.log(quantity_number);
});

minus.addEventListener("click", () => {
  quantity_number--;
  if (quantity_number < 0) {
    quantity_number = 0;
  }
  quantity.textContent = quantity_number;
  // console.log(quantity_number);
});

// Cart hover effect

// const cart_hover = document.querySelector(".cart-hover");
// const cart = document.querySelector(".cart");

// cart.addEventListener("click", () => {
//   cart_hover.classList.toggle("cart-hover");
// });

// lightbox effect

let overlay = document.querySelector(".gallery-show");
let imageBox = document.querySelector(".img-show");
let img = document.querySelector(".img-show img");
let closeLightBox = document.querySelector(".close-lightbox");

const gallery = document.querySelector("#gallery");
const gallery2 = document.querySelector("#gallery-2");

gallery2.addEventListener("click", (event) => {
  let currentImgPath = event.target.src;
  if (currentImgPath !== undefined) {
    overlay.classList.add("lg:block");
    imageBox.classList.add("lg:scale-100");
    img.src = currentImgPath;
  }
});

gallery.addEventListener("click", (event) => {
  let currentImgPath = event.target.src;
  if (currentImgPath !== undefined) {
    overlay.classList.add("lg:block");
    imageBox.classList.add("lg:scale-100");
    img.src = currentImgPath;
  }
});

closeLightBox.addEventListener("click", () => {
  overlay.classList.remove("lg:block");
  imageBox.classList.remove("lg:scale-100");
});

// Implementing the function Add to cart button

const products = [
  {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    image: "./images/image-product-1-thumbnail.jpg",
    price: "$125.00",
  },
];

// empty cart-button
const cartEmpty = document.querySelector(".cart-empty");
const cart = document.querySelector(".cart");

cart.addEventListener("click", () => {
  cartEmpty.classList.toggle("cart-empty");
});

const button = document.querySelector(".add-to-cart");
const emptyCart = document.querySelector(".empty-cart");
const cartFull = document.querySelector(".cart-full");

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (product) {
    let cartItems = document.querySelector(".cart-items");
    let quantitySelector = document.querySelector("quantity");
    let total = product.price * quantitySelector;

    cartItems.innerHTML = `
       <div class="flex gap-8 items-center px-5 py-7">
                <img
                  class="w-12 rounded-md"
                  src="${product.image}"
                  alt=""
                />
                <div class="discription">
                  <p>${product.name}</p>
                  <p>
                    $${product.price}* 3
                    <span class="font-bold text-black pl-3">$${product.total}</span>
                  </p>
                </div>
                <img class="lg:h-4" src="./images/icon-delete.svg" alt="" />
              </div>
              <div class="flex justify-center items-center">
                <button class="button-buy w-[90%] py-4 rounded-md font-bold">
                  Checkout
                </button>
              </div>
    `;
  }
}

button.addEventListener("click", () => {
  addToCart(1);
});
