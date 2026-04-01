function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("show");
}

/* SHOPPING CART */
let cart = [];

function addToCart(name, price) {
  let existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1
    });
  }

  displayCart();
}

function removeFromCart(name) {
  let itemIndex = cart.findIndex(item => item.name === name);

  if (itemIndex !== -1) {
    if (cart[itemIndex].quantity > 1) {
      cart[itemIndex].quantity -= 1;
    } else {
      cart.splice(itemIndex, 1);
    }
  }

  displayCart();
}

function clearCart() {
  cart = [];
  displayCart();
}

function displayCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (!cartItemsContainer || !cartTotal) {
    return;
  }

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    cartTotal.textContent = "0.00";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>Price: $${item.price.toFixed(2)}</p>
        <p>Quantity: ${item.quantity}</p>
      </div>
      <button class="remove-btn" onclick="removeFromCart('${item.name}')">Remove</button>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  cartTotal.textContent = total.toFixed(2);
}

/* GALLERY SLIDER */
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  if (slides.length === 0) {
    return;
  }

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach(slide => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}