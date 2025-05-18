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