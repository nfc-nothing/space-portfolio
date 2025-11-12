// Mobile menu toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Skills data
const skillsData = [
    // First row - SKILL_DATA
    { name: 'HTML', image: 'html.png', width: 80, height: 80 },
    { name: 'CSS', image: 'css.png', width: 80, height: 80 },
    { name: 'JavaScript', image: 'js.png', width: 65, height: 65 },
    { name: 'Tailwind CSS', image: 'tailwind.png', width: 80, height: 80 },
    { name: 'React', image: 'react.png', width: 80, height: 80 },
    { name: 'Redux', image: 'redux.png', width: 80, height: 80 },
    { name: 'React Query', image: 'reactquery.png', width: 80, height: 80 },
    { name: 'TypeScript', image: 'ts.png', width: 80, height: 80 },
    { name: 'Next.js 14', image: 'next.png', width: 80, height: 80 },
    { name: 'Framer Motion', image: 'framer.png', width: 80, height: 80 },
    { name: 'Stripe', image: 'stripe.png', width: 80, height: 80 },
    { name: 'Node.js', image: 'node.png', width: 80, height: 80 },
    { name: 'MongoDB', image: 'mongodb.png', width: 40, height: 40 },
    // Second row - FRONTEND_SKILL
    { name: 'Material UI', image: 'mui.png', width: 80, height: 80 },
    // Third row - BACKEND_SKILL
    { name: 'Express.js', image: 'express.png', width: 80, height: 80 },
    { name: 'Firebase', image: 'firebase.png', width: 55, height: 55 },
    { name: 'PostgreSQL', image: 'postgresql.png', width: 70, height: 70 },
    { name: 'MySQL', image: 'mysql.png', width: 70, height: 70 },
    { name: 'Prisma', image: 'prisma.png', width: 70, height: 70 },
    { name: 'Graphql', image: 'graphql.png', width: 80, height: 80 },
    // Fourth row - FULLSTACK_SKILL
    { name: 'React Native', image: 'reactnative.png', width: 70, height: 70 },
    { name: 'Tauri', image: 'tauri.png', width: 70, height: 70 },
    { name: 'Docker', image: 'docker.png', width: 70, height: 70 },
    { name: 'Figma', image: 'figma.png', width: 50, height: 50 },
    // Fifth row - OTHER_SKILL
    { name: 'Go', image: 'go.png', width: 60, height: 60 }
];

// Populate skills grid
const skillsGrid = document.getElementById('skills-grid');
skillsData.forEach((skill, index) => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.style.animationDelay = `${index * 0.1}s`;
    
    const img = document.createElement('img');
    img.src = `/skills/${skill.image}`;
    img.alt = skill.name;
    img.width = skill.width;
    img.height = skill.height;
    img.title = skill.name;
    
    skillItem.appendChild(img);
    skillsGrid.appendChild(skillItem);
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll
document.querySelectorAll('.slide-in-view').forEach(element => {
    observer.observe(element);
});

// Add slide-in-view class to sections
const sectionsToAnimate = [
    '.skills-section',
    '.encryption-section',
    '.projects-section'
];

sectionsToAnimate.forEach(selector => {
    const section = document.querySelector(selector);
    if (section) {
        section.classList.add('slide-in-view');
    }
});

// Enhanced star animation
function createStars() {
    const starsCanvas = document.querySelector('.stars-canvas');
    const numberOfStars = 200;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.position = 'absolute';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random() * 0.8 + 0.2;
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
        starsCanvas.appendChild(star);
    }
}

// Add twinkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Initialize stars
createStars();

// Parallax effect for hero video
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo) {
        const scrollPercent = scrollTop / window.innerHeight;
        heroVideo.style.transform = `rotate(180deg) translateY(${scrollPercent * 50}px)`;
    }
    
    lastScrollTop = scrollTop;
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
