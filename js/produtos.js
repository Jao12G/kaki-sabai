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

// Carrinho ^^^^^

const productImages = document.querySelectorAll(".product img");

// Função para trocar a imagem do produto quando o mouse estiver em cima
function changeProductImage() {
  const newImageSrc = this.getAttribute("data-hover-image");
  this.src = newImageSrc;
}

// Adiciona o evento de mouseover e mouseout para cada imagem do produto
productImages.forEach(image => {
  image.addEventListener("mouseover", changeProductImage);
  image.addEventListener("mouseout", function() {
    const originalImageSrc = this.getAttribute("data-original-image");
    this.src = originalImageSrc;
  });
});
