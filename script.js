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
        name: "Agile Workflow",
        icon: "fa-solid fa-users-gear",
        desc: "Experienced in cross-functional team collaboration, Scrum practices, and managing structured workflows for timely delivery.",
        position: { x: "15%", y: "45%" },
        stemAngle: "-25deg",
        delay: "0.1s"
    },
    {
        name: "IoT & Sensors",
        icon: "fa-solid fa-microchip",
        desc: "Researching and developing smart sensor networks for environmental monitoring, agriculture, and sustainable data-driven solutions.",
        position: { x: "28%", y: "22%" },
        stemAngle: "-15deg",
        delay: "0.2s"
    },
    {
        name: "Swift Ecosystem",
        icon: "fa-brands fa-swift",
        desc: "My core environment for building fluid, native Apple-platform experiences with SwiftData, AVFoundation, and declarative UI.",
        position: { x: "44%", y: "12%" },
        stemAngle: "-5deg",
        delay: "0.3s"
    },
    {
        name: "Supabase",
        icon: "fa-solid fa-database",
        desc: "My go-to backend-as-a-service for secure authentication, real-time databases, and seamless integration with applications.",
        position: { x: "58%", y: "12%" },
        stemAngle: "5deg",
        delay: "0.4s"
    },
    {
        name: "Machine Learning",
        icon: "fa-solid fa-brain",
        desc: "Integrating predictive models and intelligent algorithms, from bird migration tracking to complex risk assessment engines.",
        position: { x: "74%", y: "22%" },
        stemAngle: "15deg",
        delay: "0.5s"
    },
    {
        name: "UI/UX Design",
        icon: "fa-solid fa-wand-magic-sparkles",
        desc: "Designing immersive, nature-inspired digital interfaces that balance beautiful aesthetics with intuitive user experiences.",
        position: { x: "32%", y: "55%" },
        stemAngle: "-10deg",
        delay: "0.7s"
    },
    {
        name: "C++ & OOP",
        icon: "fa-solid fa-code",
        desc: "Strong foundational knowledge in Object-Oriented Programming, dynamic memory allocation, and core software design principles.",
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
            <p class="skill-desc">${skill.desc}</p>
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

    drawBranches();
    window.addEventListener('resize', () => {
        requestAnimationFrame(drawBranches);
    });
}

function drawBranches() {
    const svg = document.getElementById('tree-branches');
    const canvas = document.querySelector('.tree-canvas');
    if (!svg || !canvas) return;

    svg.innerHTML = '';

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const trunkX = width / 2;
    const trunkY = height * 0.9;

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
        <linearGradient id="branch-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#1a2e1a" stop-opacity="0.8" />
            <stop offset="100%" stop-color="rgba(74, 222, 128, 0.5)" />
        </linearGradient>
    `;
    svg.appendChild(defs);

    skillsData.forEach(skill => {
        const xPercent = parseFloat(skill.position.x) / 100;
        const yPercent = parseFloat(skill.position.y) / 100;

        const fruitCenterX = (width * xPercent) + 42.5;
        const fruitCenterY = (height * yPercent) + 42.5;

        const cp1X = trunkX;
        const cp1Y = trunkY - (trunkY - fruitCenterY) * 0.6;
        const cp2X = fruitCenterX - (fruitCenterX - trunkX) * 0.2;
        const cp2Y = fruitCenterY + (trunkY - fruitCenterY) * 0.4;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = `M ${trunkX} ${trunkY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${fruitCenterX} ${fruitCenterY}`;

        path.setAttribute('d', d);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', 'url(#branch-gradient)');
        path.setAttribute('stroke-width', '3');
        path.setAttribute('class', 'tree-branch-path');

        svg.appendChild(path);
    });
}

const experienceData = [
    {
        role: "iOS Application Development Intern",
        type: "Internship",
        company: "Infosys",
        duration: "Apr 2026 - May 2026",
        location: "On-site • Mysore",
        description: [
            "Collaborated within a 10-member cross-functional team to implement Agile Scrum practices in a structured project environment.",
            "Enhanced Agile workflows by participating in sprint planning, daily stand-ups, and reviews, leading to improved team coordination and timely task completion.",
            "Completed intensive leadership training sessions, including Accentuating Business Communication, Presentation Powerhouse, Communication Catalyst, Stakeholder Synergy, and Client Value Accelerator, which enhanced client-facing and presentation skills.",
            "Increased team productivity and communication efficiency through active discussions, delivering presentations, and aligning with team goals in a fast-paced environment."
        ],
        technologies: ["SwiftUI", "Supabase", "Jira"],
        icon: "fa-brands fa-apple"
    },
    {
        role: "Courses Facilitator Intern",
        type: "Internship",
        company: "MyCaptain",
        duration: "Jun 2025 - Aug 2025",
        location: "Remote",
        description: [
            "Mentored 200+ students through structured sessions and collaborative activities, enhancing engagement and knowledge sharing in coordination with the team captain and core coordinators.",
            "Developed leadership, communication, and management skills by hosting sessions, managing participant data in Excel, coordinating via Zoom, and creating impactful presentations using Canva."
        ],
        technologies: ["Microsoft Excel", "Zoom", "Canva"],
        icon: "fa-solid fa-person-chalkboard"
    }
];

function initExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    experienceData.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'specimen-card experience-specimen';

        let descHTML = exp.description.map(point => `<li>${point}</li>`).join('');

        card.innerHTML = `
            <div class="specimen-badge-row">
                <span class="specimen-badge">${exp.type}</span>
                <span class="specimen-date">${exp.duration}</span>
            </div>
            <div class="specimen-content">
                <div class="specimen-title">
                    <i class="${exp.icon}"></i>
                    <h3>${exp.role}</h3>
                </div>
                <h4 class="company-name">${exp.company} <span class="location-text">| ${exp.location}</span></h4>
                <ul class="experience-list">
                    ${descHTML}
                </ul>
                <div class="specimen-tags">
                    ${exp.technologies.map(tag => `<span class="specimen-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        container.appendChild(card);
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
    },
    {
        title: "Loan Management System",
        eyebrow: "Fintech iOS Ecosystem",
        description: "A full-stack fintech solution consisting of two native iOS applications (Udhar De & Udhar Le) for intelligent risk assessment and automated KYC.",
        image: "Assets/LMS.jpg",
        icon: "fa-solid fa-money-check-dollar",
        accent: "accent-emerald",
        status: "Internship Build",
        year: "2026",
        tags: ["SwiftUI", "Supabase", "VisionKit OCR", "AHP Engine"],
        highlights: ["Intelligent Risk Assessment", "Automated KYC", "Two App Ecosystem"],
        link: "https://github.com/Aradhya-Bhagwat/Loan-Management-System.git"
    },
    {
        title: "GreenAura",
        eyebrow: "Swift Student Challenge",
        description: "An immersive wellness app blending ancient breathing practices with modern design. Features a living dashboard and dynamic aura visualization to find your flow in nature's rhythm.",
        image: "Assets/GreenAura.png",
        icon: "fa-solid fa-leaf",
        accent: "accent-green",
        status: "Contest Build",
        year: "2026",
        tags: ["SwiftUI", "Swift 6", "AVFoundation", "Animations"],
        highlights: ["Bio-Dialogue", "Immersive Audio", "Aura Resonance"],
        link: "https://github.com/Aradhya-Bhagwat/GreenAura.git"
    },
    {
        title: "Interactive Calculator",
        eyebrow: "SQL & NoSQL Integration",
        description: "A full-stack calculator application featuring user authentication and calculation history persistence, designed with a dynamic backend adapter supporting both MySQL and MongoDB.",
        image: "Assets/calculator-screenshot.png",
        icon: "fa-solid fa-calculator",
        accent: "accent-emerald",
        status: "Database Build",
        year: "2026",
        tags: ["Node.js", "Express", "MySQL", "MongoDB", "JWT Auth", "Vanilla JS"],
        highlights: ["Dual-Database Switcher", "Persistent History", "Secure JWT Authentication"],
        link: "https://github.com/Aradhya-Bhagwat/Calculator.git"
    },
    {
        title: "Banking System",
        eyebrow: "The Beginning",
        description: "An initial project demonstrating Object-Oriented Programming (OOP) concepts in C++. This terminal-based application highlights my early foundations in software development.",
        image: "Assets/Cpp.png",
        icon: "fa-solid fa-building-columns",
        accent: "accent-slate",
        status: "Archived",
        year: "2022",
        tags: ["C++", "OOP", "CLI", "File I/O"],
        highlights: ["Polymorphism", "Dynamic Allocation", "Persistent Storage"],
        link: "https://github.com/Aradhya-Bhagwat/Banking-System-in-C.git"
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
        badge: "Patent Application",
        title: "Indian Patent for GUI-based Species Identification",
        subtitle: "Patent Application",
        description: "Co-inventor of Indian Patent Application titled \"A System for Species Identification Using a Graphical User Interface\" published by the Indian Patent Office. The system focuses on species identification using GUI-based electronic methodologies.",
        date: "09 Mar 2026",
        venue: "Indian Patent Office",
        icon: "fa-solid fa-lightbulb",
        link: "https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus",
        linkLabel: "Patent",
        tags: ["Species ID", "GUI", "Patent"]
    },
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

        const badgeText = item.badge || 'Published';

        card.innerHTML = `
            <div class="specimen-badge-row">
                <span class="specimen-badge">${badgeText}</span>
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

function initMobileMenu() {
    const nav = document.querySelector('nav');
    const openBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('mobile-menu-close');
    if (!nav || !openBtn || !closeBtn) return;

    const toggleMenu = (open) => {
        nav.classList.toggle('active', open);
        openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    openBtn.addEventListener('click', () => toggleMenu(true));
    closeBtn.addEventListener('click', () => toggleMenu(false));
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });
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

function initEnvelope() {
    const wrapper = document.querySelector('.envelope-wrapper');
    if (!wrapper) return;

    wrapper.addEventListener('click', (e) => {
        if (!e.target.closest('.contact-link')) {
            wrapper.classList.toggle('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    type();
    initSkillPlant();
    initExperience();
    initProjects();
    initResearch();
    initBackgroundAnimation();
    initHeaderScroll();
    initMobileMenu();
    initRevealOnScroll();
    initEnvelope();
});

