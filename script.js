// JavaScript to enhance portfolio interactivity

// Function to display a welcome alert message when the page loads
window.onload = function() {
    alert("Welcome to Maruf Hasan Bhuiyan's Portfolio!");
};

// Smooth scrolling to different sections (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
