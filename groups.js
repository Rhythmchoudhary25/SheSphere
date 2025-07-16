// DOM Elements
const loginButton = document.getElementById('login-button');
const signupButton = document.getElementById('signup-button');
const createGroupButton = document.getElementById('create-group-button');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const createGroupModal = document.getElementById('create-group-modal');
const closeButtons = document.querySelectorAll('.close-modal');
const showSignupLink = document.getElementById('show-signup');
const showLoginLink = document.getElementById('show-login');
const joinButtons = document.querySelectorAll('.join-button');
const filterButtons = document.querySelectorAll('.filter-button');

// Show Modals
function showLoginModal() {
  loginModal.style.display = 'flex';
}

function showSignupModal() {
  signupModal.style.display = 'flex';
}

function showCreateGroupModal() {
  createGroupModal.style.display = 'flex';
}

// Close Modals
function closeModals() {
  loginModal.style.display = 'none';
  signupModal.style.display = 'none';
  createGroupModal.style.display = 'none';
}

// Event Listeners
loginButton.addEventListener('click', showLoginModal);
signupButton.addEventListener('click', showSignupModal);
createGroupButton.addEventListener('click', showCreateGroupModal);

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

// Join/Leave group functionality
joinButtons.forEach(button => {
  button.addEventListener('click', function() {
    if (button.textContent === 'Join Group') {
      button.textContent = 'Joined';
      button.classList.add('joined-button');
    } else {
      button.textContent = 'Join Group';
      button.classList.remove('joined-button');
    }
  });
});

// Filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
  if (e.target === signupModal) {
    signupModal.style.display = 'none';
  }
  if (e.target === createGroupModal) {
    createGroupModal.style.display = 'none';
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

document.getElementById('create-group-form').addEventListener('submit', function(e) {
  e.preventDefault();
  closeModals();
  alert('Your group has been created! (This is a demo - no actual group creation is happening)');
});