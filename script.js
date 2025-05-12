// Prices
const sizeRadios = document.querySelectorAll('input[name="size"]');
const sideCheckboxes = document.querySelectorAll('input[name="side"]');
const quantityDisplay = document.getElementById('quantity');
const totalSpan = document.getElementById('total');
const upArrow = document.querySelector('.quantity-arrow.up');
const downArrow = document.querySelector('.quantity-arrow.down');
const cartButton = document.querySelector('.cart-button');

let quantity = 1;

// Initial calculation
function calculateTotal() {
  let size = 50; // default (medium)
  sizeRadios.forEach(radio => {
    if (radio.checked) size = parseInt(radio.value);
  });

  let sides = 0;
  sideCheckboxes.forEach(box => {
    if (box.checked) sides += parseInt(box.value);
  });

  let total = (size + sides) * quantity;
  totalSpan.textContent = `${total} EGP`;
}

function incrementQuantity() {
  quantity++;
  quantityDisplay.textContent = quantity;
  calculateTotal();
}

// Quantity controls
upArrow.addEventListener('click', incrementQuantity);
cartButton.addEventListener('click', incrementQuantity);

downArrow.addEventListener('click', () => {
  if (quantity > 0) {
    quantity--;
    quantityDisplay.textContent = quantity;
    calculateTotal();
  }
});

// Event listeners
sizeRadios.forEach(radio => radio.addEventListener('change', calculateTotal));
sideCheckboxes.forEach(box => box.addEventListener('change', calculateTotal));

// Initial call
calculateTotal();