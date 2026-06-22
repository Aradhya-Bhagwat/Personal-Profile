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
        category: "devops",
        color: "#00a8ff",
        icon: "fa-solid fa-users-gear",
        desc: "Experienced in cross-functional team collaboration, Scrum practices, and managing structured workflows for timely delivery.",
        position: { x: "12%", y: "65%" },
        stemAngle: "-25deg",
        delay: "0.1s"
    },
    {
        name: "Playwright",
        category: "devops",
        color: "#2e8b57",
        icon: "fa-solid fa-vial-circle-check",
        desc: "Automating reliable end-to-end browser testing, capturing UI regressions, and integrating automated QA runs.",
        position: { x: "23%", y: "72%" },
        stemAngle: "-20deg",
        delay: "0.15s"
    },
    {
        name: "HTML",
        category: "frontend",
        color: "#e34f26",
        icon: "fa-brands fa-html5",
        desc: "Structured semantic HTML5 markup for accessible, search-engine-friendly, and modern web layouts.",
        position: { x: "15%", y: "48%" },
        stemAngle: "-22deg",
        delay: "0.2s"
    },
    {
        name: "CSS",
        category: "frontend",
        color: "#1572b6",
        icon: "fa-brands fa-css3-alt",
        desc: "Advanced CSS styling, grid/flexbox layouts, responsive design, animations, and custom UI design systems.",
        position: { x: "27%", y: "53%" },
        stemAngle: "-15deg",
        delay: "0.25s"
    },
    {
        name: "Python",
        category: "lang",
        color: "#3776ab",
        icon: "fa-brands fa-python",
        desc: "Writing clean script logic, data analysis, and building machine learning interfaces with Python frameworks.",
        position: { x: "20%", y: "28%" },
        stemAngle: "-18deg",
        delay: "0.3s"
    },
    {
        name: "MongoDB",
        category: "backend",
        color: "#47a248",
        icon: "fa-solid fa-leaf",
        desc: "Designing flexible schema models, aggregation pipelines, and querying document databases in NoSQL architectures.",
        position: { x: "32%", y: "33%" },
        stemAngle: "-12deg",
        delay: "0.35s"
    },
    {
        name: "Supabase",
        category: "backend",
        color: "#3ecf8e",
        icon: "fa-solid fa-database",
        desc: "Configuring relational PostgreSQL instances, instant REST APIs, real-time subscriptions, and security rules.",
        position: { x: "36%", y: "15%" },
        stemAngle: "-8deg",
        delay: "0.4s"
    },
    {
        name: "IoT & Sensors",
        category: "specialized",
        color: "#00ff7f",
        icon: "fa-solid fa-microchip",
        desc: "Researching and developing smart sensor networks for environmental monitoring, agriculture, and sustainable data-driven solutions.",
        position: { x: "45%", y: "10%" },
        stemAngle: "-3deg",
        delay: "0.45s"
    },
    {
        name: "Swift Ecosystem",
        category: "lang",
        color: "#f05138",
        icon: "fa-brands fa-swift",
        desc: "My core environment for building fluid, native Apple-platform experiences with SwiftData, AVFoundation, and declarative UI.",
        position: { x: "55%", y: "10%" },
        stemAngle: "3deg",
        delay: "0.5s"
    },
    {
        name: "Machine Learning",
        category: "specialized",
        color: "#ba55d3",
        icon: "fa-solid fa-brain",
        desc: "Integrating predictive models and intelligent algorithms, from bird migration tracking to complex risk assessment engines.",
        position: { x: "64%", y: "15%" },
        stemAngle: "8deg",
        delay: "0.55s"
    },
    {
        name: "MySQL",
        category: "backend",
        color: "#00758f",
        icon: "fa-solid fa-server",
        desc: "Writing optimized SQL queries, managing relations, indexing, and ensuring transaction safety in relational systems.",
        position: { x: "68%", y: "33%" },
        stemAngle: "12deg",
        delay: "0.6s"
    },
    {
        name: "Firebase",
        category: "backend",
        color: "#ffca28",
        icon: "fa-solid fa-fire",
        desc: "Setting up real-time databases, secure OAuth user authentication, cloud functions, and hosting platforms.",
        position: { x: "80%", y: "28%" },
        stemAngle: "18deg",
        delay: "0.65s"
    },
    {
        name: "JavaScript",
        category: "frontend",
        color: "#f7df1e",
        icon: "fa-brands fa-js",
        desc: "Modern ES6+ JavaScript, DOM manipulation, asynchronous programming, event handling, and client-side logic.",
        position: { x: "73%", y: "53%" },
        stemAngle: "15deg",
        delay: "0.7s"
    },
    {
        name: "C/C++",
        category: "lang",
        color: "#00599c",
        icon: "fa-solid fa-code",
        desc: "Strong foundational knowledge in Object-Oriented Programming, dynamic memory allocation, and core software design principles in C and C++.",
        position: { x: "85%", y: "48%" },
        stemAngle: "22deg",
        delay: "0.75s"
    },
    {
        name: "Azure DevOps",
        category: "devops",
        color: "#0078d7",
        icon: "fa-solid fa-infinity",
        desc: "Configuring CI/CD pipelines, managing boards, code repositories, and automating software release workflows.",
        position: { x: "77%", y: "72%" },
        stemAngle: "20deg",
        delay: "0.8s"
    },
    {
        name: "UI/UX Design",
        category: "frontend",
        color: "#ff6b81",
        icon: "fa-solid fa-wand-magic-sparkles",
        desc: "Designing immersive, nature-inspired digital interfaces that balance beautiful aesthetics with intuitive user experiences.",
        position: { x: "88%", y: "65%" },
        stemAngle: "25deg",
        delay: "0.85s"
    }
];

function hexToRgba(hex, alpha) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
    return result ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})` : `rgba(74, 222, 128, ${alpha})`;
}

function initSkillPlant() {
    const container = document.getElementById('skills-fruits-container');
    const overlay = document.getElementById('skill-description-card');
    const closeBtn = document.getElementById('close-skill-card');

    const iconDisplay = document.getElementById('skill-icon-display');
    const nameDisplay = document.getElementById('skill-name-display');
    const descDisplay = document.getElementById('skill-desc-display');

    if (!container) return;

    skillsData.forEach((skill, index) => {
        const fruit = document.createElement('button');
        fruit.type = 'button';
        fruit.className = `skill-fruit`;
        fruit.setAttribute('data-category', skill.category);
        
        // Dynamic style variables for individual category glows
        fruit.style.setProperty('--x', skill.position.x);
        fruit.style.setProperty('--y', skill.position.y);
        fruit.style.setProperty('--delay', skill.delay);
        fruit.style.setProperty('--stem-angle', skill.stemAngle);
        fruit.style.setProperty('--skill-color', skill.color);
        fruit.style.setProperty('--skill-color-glow-thin', hexToRgba(skill.color, 0.2));
        fruit.style.setProperty('--skill-color-glow-thick', hexToRgba(skill.color, 0.45));

        fruit.innerHTML = `
            <i class="${skill.icon}"></i>
            <span class="label">${skill.name}</span>
            <p class="skill-desc">${skill.desc}</p>
        `;

        fruit.addEventListener('click', () => {
            iconDisplay.className = skill.icon;
            nameDisplay.textContent = skill.name;
            descDisplay.textContent = skill.desc;
            
            // Set dynamic variables for custom detail card glows
            overlay.style.setProperty('--card-color', skill.color);
            overlay.style.setProperty('--card-color-glow', hexToRgba(skill.color, 0.25));
            
            overlay.classList.add('active');
        });

        // Add mouseenter/mouseleave to highlight branches on hover
        fruit.addEventListener('mouseenter', () => {
            const branch = document.getElementById(`branch-path-${index}`);
            if (branch) branch.classList.add('highlighted');
        });
        
        fruit.addEventListener('mouseleave', () => {
            const branch = document.getElementById(`branch-path-${index}`);
            if (branch) branch.classList.remove('highlighted');
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
    
    // Dynamically generate unique branch gradients
    skillsData.forEach((skill, index) => {
        const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        grad.setAttribute('id', `branch-grad-${index}`);
        grad.setAttribute('x1', '0%');
        grad.setAttribute('y1', '100%');
        grad.setAttribute('x2', '0%');
        grad.setAttribute('y2', '0%');
        
        grad.innerHTML = `
            <stop offset="0%" stop-color="#1a2e1a" stop-opacity="0.8" />
            <stop offset="100%" stop-color="${skill.color}" stop-opacity="0.65" />
        `;
        defs.appendChild(grad);
    });
    
    svg.appendChild(defs);

    skillsData.forEach((skill, index) => {
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
        path.setAttribute('id', `branch-path-${index}`);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', `url(#branch-grad-${index})`);
        path.setAttribute('stroke-width', '3');
        // Set inline variables so the keyframes can inherit the custom glow colors
        path.style.setProperty('--skill-color', skill.color);
        path.style.setProperty('--skill-color-glow-thin', hexToRgba(skill.color, 0.2));
        path.setAttribute('class', `tree-branch-path cat-${skill.category}`);

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

