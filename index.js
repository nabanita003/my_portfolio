const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');
});



function myfunction() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    icon.classList.remove("bxs-moon");
    icon.classList.add("bxs-sun");
  } else {
    icon.classList.remove("bxs-sun");
    icon.classList.add("bxs-moon");
  }
}


 //technical skills
const aboutSection = document.querySelector('#about');
const progressBars = document.querySelectorAll('.progress-bar');
const percentLabels = document.querySelectorAll('.skill-percent');

function animateSkills() {
  progressBars.forEach((bar, index) => {
    const target = parseInt(bar.getAttribute('data-percent'));
    bar.style.width = '0%';
    percentLabels[index].innerText = '0%';

    let current = 0;
    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        bar.style.width = `${current}%`;
        percentLabels[index].innerText = `${current}%`;
      }
    }, 15);
  });
}

// Observer to trigger animation on enter AND reset on exit
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
    } else {
      // Reset when the section is out of view
      progressBars.forEach((bar, index) => {
        bar.style.width = '0%';
        percentLabels[index].innerText = '0%';
      });
    }
  });
}, {
  threshold: 0.4,
});

observer.observe(aboutSection);

//professional skills
const aboutSections = document.querySelector('#about');
const circularSkills = document.querySelectorAll('.circle-skill');

// Animate circular progress
function animateCircularSkills() {
  circularSkills.forEach(skill => {
    const circle = skill.querySelector('.progress-ring');
    const text = skill.querySelector('.circle-value');
    const target = parseInt(skill.getAttribute('data-percent'), 10);
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    let current = 0;

    const interval = setInterval(() => {
      if (current > target) {
        clearInterval(interval);
      } else {
        const offset = circumference - (current / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        text.textContent = `${current}%`;
        current++;
      }
    }, 15);
  });
}

// Reset circular progress
function resetCircularSkills() {
  circularSkills.forEach(skill => {
    const circle = skill.querySelector('.progress-ring');
    const text = skill.querySelector('.circle-value');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    text.textContent = '0%';
  });
}

// Observer
const observers = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCircularSkills();
    } else {
      resetCircularSkills();
    }
  });
}, {
  threshold: 0.4
});

// Start observing
observers.observe(aboutSections);

//Scroll behaviour
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Adjust based on your header height
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

  // change footer background on scroll 
  window.addEventListener('scroll', () => {
    const footer = document.querySelector('.ftco-footer');
    if (window.scrollY > 100) {
      footer.style.background = '#111';
    } else {
      footer.style.background = '#222';
    }
  });

  //for footer section scroll icon
  
const scrollTopBtn = document.getElementById("scroll-top-btn");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

// Smooth scroll to top on click
scrollTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


//preloading

/* Typing Text code */
const typed = new Typed('.multiple-text', {
      strings: ['<i>Frontend</i> Developer.', 'Programmer.'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay:1200,
      loop: true
    });


// ScrollReveal base configuration
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 200,
  reset: true // animations replay on scroll
});

// ===== HEADER =====
sr.reveal('header', {
  origin: 'top',
  delay: 100
});

// ===== HOME SECTION =====
sr.reveal('.home-content h3', { origin: 'top', delay: 200 });
sr.reveal('.home-content h1', { origin: 'left', delay: 300 });
sr.reveal('.home-content p', { origin: 'right', delay: 400 });
sr.reveal('.social-media a', { origin: 'bottom', interval: 200 });
sr.reveal('.home-img', { origin: 'bottom', delay: 500 });

// ===== ABOUT SECTION =====
sr.reveal('.about-left', { origin: 'left', delay: 200 });
sr.reveal('.about-right', { origin: 'right', delay: 300 });
sr.reveal('.skills', { origin: 'bottom', delay: 400 });
sr.reveal('.professional-skills', { origin: 'bottom', delay: 500 });

// ===== RESUME SECTION =====
sr.reveal('.resume-header', { origin: 'top', delay: 200 });
sr.reveal('.experience-card', { origin: 'bottom', interval: 300 });

// ===== PROJECTS SECTION =====
sr.reveal('.heading', { origin: 'top', delay: 200 });
sr.reveal('.portfolio-content .row-icon', { origin: 'bottom', interval: 200 });

// ===== CONTACT SECTION =====
sr.reveal('.contacts h2', { origin: 'top', delay: 200 });
sr.reveal('#contact-icon .icon-box', { origin: 'left', interval: 200 });
sr.reveal('form', { origin: 'right', delay: 300 });

// ===== FOOTER =====
sr.reveal('footer', { origin: 'bottom', delay: 200 });
