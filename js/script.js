const cartIcon = document.querySelector(".cart-icon");
const notification = document.querySelector(".notification");
let cartCount = 0;

// Função para adicionar um produto ao carrinho
function addToCart() {
  cartCount++;
  notification.innerText = cartCount;

  // Adicione o item ao carrinho
  const itemName = this.parentNode.querySelector("h3").innerText;
  const cartItems = document.getElementById("cart-items");
  const cartItem = document.createElement("div");
  cartItem.innerText = itemName;
  cartItems.appendChild(cartItem);
}

// Adiciona o evento de clique nos botões "Comprar"
const buyButtons = document.querySelectorAll(".buy-button");
buyButtons.forEach(button => {
  button.addEventListener("click", addToCart);
});

const cartDropdown = document.querySelector(".cart-dropdown");

// Função para abrir o carrinho de compras
function openCart() {
  cartDropdown.style.display = "block";
}

// Função para fechar o carrinho de compras
function closeCart() {
  cartDropdown.style.display = "none";
}

// Função para abrir ou fechar o carrinho de compras
function toggleCart() {
  if (cartDropdown.style.display === "block") {
    closeCart();
  } else {
    openCart();
  }
}

// Vincula o evento de clique ao ícone do carrinho
cartIcon.addEventListener("click", toggleCart);

// Função para finalizar a compra
function checkout() {
  // Coloque aqui a lógica para finalizar a compra
  // Por exemplo, redirecionar para uma página de checkout
  alert("Compra finalizada!");
  closeCart();
}

// Vincula o evento de clique ao botão "Finalizar Compra"
const checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", checkout);
