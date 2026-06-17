// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
function toggleNav() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks.style.display === 'flex' && navLinks.style.position === 'absolute') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '5%';
    navLinks.style.width = '90%';
    navLinks.style.background = 'rgba(20, 20, 20, 0.9)';
    navLinks.style.backdropFilter = 'blur(20px)';
    navLinks.style.padding = '2rem';
    navLinks.style.borderRadius = '24px';
    navLinks.style.border = '1px solid rgba(255,255,255,0.1)';
  }
}

// Modal handling
function openModal(tab) {
  const modal = document.getElementById('authModal');
  modal.classList.add('active');
  switchTab(tab);
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('authModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function closeModalOutside(event) {
  if (event.target.id === 'authModal') {
    closeModal();
  }
}

function switchTab(tab) {
  const loginTab = document.getElementById('loginTab');
  const registerTab = document.getElementById('registerTab');
  
  if (tab === 'login') {
    loginTab.classList.remove('hidden');
    registerTab.classList.add('hidden');
  } else {
    loginTab.classList.add('hidden');
    registerTab.classList.remove('hidden');
  }
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const isActive = item.classList.contains('active');
    
    // Close all FAQs
    document.querySelectorAll('.faq-item').forEach(faq => {
      faq.classList.remove('active');
    });
    
    // Open clicked FAQ if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu if open
      const navLinks = document.getElementById('navLinks');
      if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
      }
    }
  });
});

// Scroll Reveal Animations
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal(); // trigger on load
