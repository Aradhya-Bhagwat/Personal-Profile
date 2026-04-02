const textElement = document.getElementById('typing-text');
const phrases = [
    "Software Engineer.",
    "Nature Tech Enthusiast.",
    "Tabla Player."
];

let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
        characterIndex--;
        typeSpeed = 80;
    } else {
        textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
        characterIndex++;
        typeSpeed = 120;
    }

    if (!isDeleting && characterIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

const skillsData = [
    {
        name: "HTML5",
        icon: "fa-brands fa-html5",
        desc: "The semantic backbone of the web. I use HTML to build clear, accessible and well-structured interfaces.",
        position: { x: "15%", y: "45%" },
        stemAngle: "-25deg",
        delay: "0.1s"
    },
    {
        name: "CSS3",
        icon: "fa-brands fa-css3-alt",
        desc: "I shape polished layouts, responsive systems and visual detail with modern CSS, animation, Grid and Flexbox.",
        position: { x: "28%", y: "22%" },
        stemAngle: "-15deg",
        delay: "0.2s"
    },
    {
        name: "Swift",
        icon: "fa-brands fa-swift",
        desc: "My core language for iOS work, helping me build fast, expressive and reliable native experiences.",
        position: { x: "44%", y: "12%" },
        stemAngle: "-5deg",
        delay: "0.3s"
    },
    {
        name: "SwiftUI",
        icon: "fa-solid fa-mobile-screen",
        desc: "I use SwiftUI to compose fluid Apple-platform interfaces with reusable views and a clean declarative approach.",
        position: { x: "58%", y: "12%" },
        stemAngle: "5deg",
        delay: "0.4s"
    },
    {
        name: "Git",
        icon: "fa-brands fa-github",
        desc: "Version control keeps my work collaborative and intentional, from clean commits to safer iteration.",
        position: { x: "74%", y: "22%" },
        stemAngle: "15deg",
        delay: "0.5s"
    },
    {
        name: "UI Design",
        icon: "fa-solid fa-wand-magic-sparkles",
        desc: "I enjoy shaping interfaces that feel intuitive, lively and grounded in a strong visual identity.",
        position: { x: "32%", y: "55%" },
        stemAngle: "-10deg",
        delay: "0.7s"
    },
    {
        name: "Problem Solving",
        icon: "fa-solid fa-lightbulb",
        desc: "From debugging to architecture decisions, I like breaking hard problems into clear, practical steps.",
        position: { x: "68%", y: "55%" },
        stemAngle: "10deg",
        delay: "0.8s"
    }
];

function initSkillPlant() {
    const container = document.getElementById('skills-fruits-container');
    const overlay = document.getElementById('skill-description-card');
    const closeBtn = document.getElementById('close-skill-card');
    
    const iconDisplay = document.getElementById('skill-icon-display');
    const nameDisplay = document.getElementById('skill-name-display');
    const descDisplay = document.getElementById('skill-desc-display');

    if (!container) return;

    skillsData.forEach(skill => {
        const fruit = document.createElement('button');
        fruit.type = 'button';
        fruit.className = `skill-fruit`;
        fruit.style.setProperty('--x', skill.position.x);
        fruit.style.setProperty('--y', skill.position.y);
        fruit.style.setProperty('--delay', skill.delay);
        fruit.style.setProperty('--stem-angle', skill.stemAngle);
        
        fruit.innerHTML = `
            <i class="${skill.icon}"></i>
            <span class="label">${skill.name}</span>
        `;

        fruit.addEventListener('click', () => {
            iconDisplay.className = skill.icon;
            nameDisplay.textContent = skill.name;
            descDisplay.textContent = skill.desc;
            overlay.classList.add('active');
        });

        container.appendChild(fruit);
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
}

const projectsData = [
    {
        title: "SkyTrails",
        eyebrow: "Featured iOS Product",
        description: "Smart Bird Identification and Migration Prediction iOS app using BirdFlow ML, SwiftData for local storage and Supabase for secure authentication.",
        image: "Assets/SkyTrails.png",
        icon: "fa-solid fa-crow",
        accent: "accent-sky",
        status: "Live Build",
        year: "2026",
        tags: ["Swift StoryBoard", "Supabase", "SwiftData", "Machine Learning"],
        highlights: ["Bird ID workflow", "Migration prediction", "Secure auth"],
        link: "https://github.com/Aradhya-Bhagwat/MITWPU-Group20-SkyTrails.git"
    }
];

function initProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = `specimen-card ${project.accent}`;
        
        card.innerHTML = `
            <div class="specimen-image">
                <img src="${project.image}" alt="${project.title} Specimen">
            </div>
            <div class="specimen-badge-row">
                <span class="specimen-badge">${project.status}</span>
                <span class="specimen-date">${project.year}</span>
            </div>
            <div class="specimen-content">
                <div class="specimen-title">
                    <i class="${project.icon}"></i>
                    <h3>${project.title}</h3>
                </div>
                <p class="specimen-description">${project.description}</p>
                <div class="specimen-tags">
                    ${project.tags.map(tag => `<span class="specimen-tag">${tag}</span>`).join('')}
                </div>
                <div class="specimen-actions">
                    <a href="${project.link}" target="_blank" class="specimen-btn specimen-btn-primary">
                        <i class="fa-brands fa-github"></i> View Repo
                    </a>
                    <a href="#contact" class="specimen-btn specimen-btn-secondary">
                        Details <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

const researchData = [
    {
        title: "IoT Environmental Monitoring",
        subtitle: "Climate Change & Sustainable Development",
        description: "A comprehensive study on leveraging IoT sensors for tracking pollution and climate metrics to drive data-informed sustainable decisions.",
        date: "Oct 2024",
        venue: "Routledge Publication",
        icon: "fa-solid fa-book",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop",
        link: "https://www.routledge.com/Smart-IoT-for-Sustainable-Development/Subhedar-Mahalle-Pawar/p/book/9781032887692",
        linkLabel: "Publication",
        tags: ["IoT", "Sustainability", "Smart Sensors"]
    },
    {
        title: "7-in-1 Soil IoT Sensor",
        subtitle: "Enhancing Farming Efficiency",
        description: "Research on multi-sensor systems designed for real-time soil health monitoring to optimize crop yield and agricultural efficiency.",
        date: "May 2024",
        venue: "ICAAICS 2024 (Pune)",
        icon: "fa-solid fa-microphone-lines",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
        link: "https://drive.google.com/file/d/1aCPhbEa8J0xbAX4fcRLLh-1DV4C3gj0q/view?usp=sharing",
        linkLabel: "Certificate",
        tags: ["AgriTech", "Data Science", "Sensors"]
    }
];

function initResearch() {
    const container = document.getElementById('research-container');
    if (!container) return;

    researchData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'specimen-card research-specimen';
        
        card.innerHTML = `
            <div class="specimen-badge-row">
                <span class="specimen-badge">Published</span>
                <span class="specimen-date">${item.date}</span>
            </div>
            <div class="specimen-content">
                <div class="specimen-title">
                    <i class="${item.icon}"></i>
                    <h3>${item.title}</h3>
                </div>
                <p class="specimen-description">${item.description}</p>
                <div class="specimen-tags">
                    ${item.tags.map(tag => `<span class="specimen-tag">${tag}</span>`).join('')}
                </div>
                <div class="specimen-actions">
                    <a href="${item.link}" target="_blank" class="specimen-btn specimen-btn-primary">
                        <i class="fa-solid fa-link"></i> ${item.linkLabel}
                    </a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function initBackgroundAnimation() {
    const container = document.getElementById('bg-animation-container');
    if (!container) return;

    const sporeCount = 30;

    for (let i = 0; i < sporeCount; i++) {
        const spore = document.createElement('div');
        spore.className = 'spore';
        
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 15 + 15;
        const delay = Math.random() * 20;
        const opacity = Math.random() * 0.5 + 0.2;

        spore.style.width = `${size}px`;
        spore.style.height = `${size}px`;
        spore.style.left = `${left}%`;
        spore.style.animationDuration = `${duration}s`;
        spore.style.animationDelay = `-${delay}s`;
        spore.style.opacity = opacity;

        container.appendChild(spore);
    }

    let lastMoveTime = 0;
    const throttleDelay = 50; 

    window.addEventListener('mousemove', (e) => {
        const currentTime = Date.now();
        if (currentTime - lastMoveTime < throttleDelay) return;
        lastMoveTime = currentTime;

        const mouseSpore = document.createElement('div');
        mouseSpore.className = 'mouse-spore';

        const size = Math.random() * 3 + 2; 
        mouseSpore.style.width = `${size}px`;
        mouseSpore.style.height = `${size}px`;
        mouseSpore.style.left = `${e.clientX}px`;
        mouseSpore.style.top = `${e.clientY}px`;

        container.appendChild(mouseSpore);

        setTimeout(() => {
            mouseSpore.remove();
        }, 2000);
    });
}

function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;
    
    const toggleHeader = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', toggleHeader);
    toggleHeader(); 
}

function initRevealOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal-on-scroll');
        observer.observe(section);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    type();
    initSkillPlant();
    initProjects();
    initResearch();
    initBackgroundAnimation();
    initHeaderScroll();
    initRevealOnScroll();
});
