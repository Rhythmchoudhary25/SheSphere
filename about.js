// DOM Elements
const loginButton = document.getElementById('login-button');
const signupButton = document.getElementById('signup-button');
const aboutJoinButton = document.getElementById('about-join-button');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const closeButtons = document.querySelectorAll('.close-modal');
const showSignupLink = document.getElementById('show-signup');
const showLoginLink = document.getElementById('show-login');

// Show Login Modal
function showLoginModal() {
  loginModal.style.display = 'flex';
}

// Show Signup Modal
function showSignupModal() {
  signupModal.style.display = 'flex';
}

// Close Modals
function closeModals() {
  loginModal.style.display = 'none';
  signupModal.style.display = 'none';
}

// Event Listeners
loginButton.addEventListener('click', showLoginModal);
signupButton.addEventListener('click', showSignupModal);
aboutJoinButton.addEventListener('click', showSignupModal);

showSignupLink.addEventListener('click', function(e) {
  e.preventDefault();
  loginModal.style.display = 'none';
  signupModal.style.display = 'flex';
});

showLoginLink.addEventListener('click', function(e) {
  e.preventDefault();
  signupModal.style.display = 'none';
  loginModal.style.display = 'flex';
});

closeButtons.forEach(button => {
  button.addEventListener('click', closeModals);
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
  if (e.target === signupModal) {
    signupModal.style.display = 'none';
  }
});

// Form submissions
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  closeModals();
  alert('Login successful! (This is a demo - no actual authentication is happening)');
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  closeModals();
  alert('Account created! Check your email for verification instructions. (This is a demo - no actual signup is happening)');
});