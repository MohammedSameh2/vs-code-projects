// Prices
const sizeRadios = document.querySelectorAll('input[name="size"]');
const sideCheckboxes = document.querySelectorAll('input[name="side"]');
const quantityDisplay = document.getElementById('quantity');
const totalSpan = document.getElementById('total');
const upArrow = document.querySelector('.quantity-arrow.up');
const downArrow = document.querySelector('.quantity-arrow.down');
const cartButton = document.querySelector('.cart-button');

let quantity = 1;
quantityDisplay.textContent = quantity; // Set initial display to 1

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

downArrow.addEventListener('click', () => {
  if (quantity > 1) { // Changed from 0 to 1
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

// Cart popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const cartButton = document.querySelector('.cart-button');
    const popup = document.getElementById('cartPopup');

    cartButton.addEventListener('click', function() {
        // Show the popup
        popup.style.display = 'flex';
        
        // Add animation
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.opacity = '1';
        }, 10);
    });
});



function submitReview() {
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value.trim();
    const about = document.getElementById("aboutwhat").value.trim();
    if (comment === "") {
        alert("Please write a review before submitting.");
        return;
    }

    if (about === "") {
        alert("Please write a review before submitting.");
        return;
    }

    const reviewsDiv = document.getElementById("reviews");

    // Create review element
    const review = document.createElement("div");
    review.className = "review";

    // Add stars
    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

    review.innerHTML = `
      <p class="stars">${stars}</p>
      <p> ${about}</p>
      <p>${comment}</p>
      
    `;

    // Add to page
    reviewsDiv.appendChild(review);

    // Clear textarea
    document.getElementById("comment").value = "";
    document.getElementById("aboutwhat").value = "";
}
window.submitReview = submitReview;