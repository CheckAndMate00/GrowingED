// Function to handle the intersection observer callback
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in'); // Add the fade-in class
        } else {
            entry.target.classList.remove('fade-in'); // Remove the fade-in class
        }
    });
}

// Set up the Intersection Observer
const logoObserver = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    threshold: 0.5, // Trigger when 50% of the element is in view
});

// Get the logo element and observe it
const logo = document.querySelector('.logo');
if (logo) {
    logoObserver.observe(logo);
}

// Add smooth scrolling to the "About" link
document.addEventListener("DOMContentLoaded", function () {
    // Get the "About" link element
    const aboutLink = document.querySelector('a[href="#about-us"]');

    // Add a click event listener to scroll smoothly to the "About Us" section
    aboutLink.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default link behavior
        const targetSection = document.getElementById("about-us");
        if (targetSection) {
            // Scroll smoothly to the target section
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});
