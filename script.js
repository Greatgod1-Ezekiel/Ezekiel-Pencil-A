
// Toggle Mobile Menu
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Handle Review Submission
const reviewForm = document.getElementById('reviewForm');
const reviewList = document.getElementById('reviewList');

reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('reviewerName').value;
    const review = document.getElementById('reviewText').value;

    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    reviewItem.innerHTML = `<strong>${name}:</strong> <p>${review}</p>`;

    reviewList.prepend(reviewItem);

    reviewForm.reset();
});

// Show alerts only, form will still submit to Formsubmit
document.getElementById("orderForm").addEventListener("submit", function(){
    alert("Order submitted successfully! We will contact you soon.");
});

document.getElementById("contactForm").addEventListener("submit", function(){
    alert("Message sent successfully! We'll get back to you shortly.");
});