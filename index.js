// DOM Elements
const loginButton = document.getElementById('login-button');
const signupButton = document.getElementById('signup-button');
const joinNowButton = document.getElementById('join-now');
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
joinNowButton.addEventListener('click', showSignupModal);
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

// Like button functionality (for demo)
const likeButtons = document.querySelectorAll('.post-actions button:first-child');
likeButtons.forEach(button => {
  button.addEventListener('click', function() {
    if (button.textContent.includes('👍')) {
      button.textContent = '❤️ Liked';
    } else {
      button.textContent = '👍 Like';
    }
  });
});

// Category tag highlighting
const categoryTags = document.querySelectorAll('.category-tag');
categoryTags.forEach(tag => {
  tag.addEventListener('click', function(e) {
    e.preventDefault();
    // Visual feedback
    this.style.backgroundColor = (--primary-light);
    this.style.color = 'white';
    
    // Reset after 300ms
    setTimeout(() => {
      this.style.backgroundColor = '';
      this.style.color = '';
    }, 300);
  });
});