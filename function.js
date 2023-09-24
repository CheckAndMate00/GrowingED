// Initialize Auth0 Client
const auth0 = new Auth0Client({
    domain: 'your-auth0-domain.auth0.com',
    client_id: 'your-client-id',
    redirect_uri: 'https://your-app-callback-url',
  });

  // Function to initiate login
async function login() {
    try {
      await auth0.loginWithRedirect();
    } catch (error) {
      console.error('Login error:', error);
    }
  }
  
  // Function to initiate logout
  async function logout() {
    try {
      await auth0.logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
  
  // Attach login and logout functions to your HTML buttons
  document.getElementById('login').addEventListener('click', login);
  document.getElementById('logout').addEventListener('click', logout);

  // Handle authentication callback
async function handleAuthCallback() {
    try {
      const isAuthenticated = await auth0.isAuthenticated();
  
      if (isAuthenticated) {
        // User is authenticated, perform actions (e.g., update UI, fetch user profile)
        const user = await auth0.getUser();
        console.log('Authenticated user:', user);
      } else {
        // User is not authenticated, handle accordingly
      }
    } catch (error) {
      console.error('Authentication callback error:', error);
    }
  }
  
  var axios = require("axios").default;

  var options = {
    method: 'PATCH',
    url: 'https://{yourDomain}/api/v2/clients//{yourClientId}',
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer API2_ACCESS_TOKEN',
      'cache-control': 'no-cache'
    },
    data: {initiate_login_uri: '<login_url>'}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://{yourDomain}/api/v2/tickets/password-change',
  headers: {
    'content-type': 'application/json',
    authorization: 'Bearer MGMT_API_ACCESS_TOKEN'
  },
  data: {user_id: 'A_USER_ID', client_id: 'A_CLIENT_ID'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

  // Call the handleAuthCallback function on page load
  window.addEventListener('load', handleAuthCallback);

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
