/**
 * Typing Animation for Hero Section
 */
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

/**
 * Skill Plant Logic
 */
const skillsData = [
    { name: "HTML5", icon: "fa-brands fa-html5", desc: "The backbone of the web. I use semantic HTML to build accessible and well-structured digital experiences.", pos: { bottom: '22%', left: '-80px' }, delay: 0.1 },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", desc: "Crafting beautiful, responsive layouts with modern CSS features like Grid, Flexbox, and complex animations.", pos: { bottom: '42%', right: '-80px' }, delay: 0.2 },
    { name: "Swift", icon: "fa-brands fa-swift", desc: "My primary language for mobile development. Clean, powerful, and safe code for iOS applications.", pos: { bottom: '62%', left: '-80px' }, delay: 0.3 },
    { name: "SwiftUI", icon: "fa-solid fa-mobile-screen", desc: "Declarative UI building for Apple platforms. I love its efficiency and how it mirrors nature's modularity.", pos: { bottom: '82%', right: '-80px' }, delay: 0.4 },
    { name: "Git", icon: "fa-brands fa-github", desc: "Version control is essential. I use Git for collaborative development and maintaining clean project histories.", pos: { bottom: '92%', left: '10px' }, delay: 0.5 }
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
        const fruit = document.createElement('div');
        fruit.className = 'skill-fruit';
        
        if (skill.pos.bottom) fruit.style.bottom = skill.pos.bottom;
        if (skill.pos.left) fruit.style.left = skill.pos.left;
        if (skill.pos.right) fruit.style.right = skill.pos.right;
        
        fruit.style.animationDelay = `${skill.delay}s`;
        
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

/**
 * Projects Logic
 */
const projectsData = [
    {
        title: "SkyTrails",
        description: "Smart Bird Identification and Migration Prediction iOS app using BirdFlow ML, SwiftData for local storage, and Supabase for secure authentication.",
        image: "Assets/SkyTrails.png",
        icon: "fa-solid fa-crow",
        tags: ["Swift StoryBoard", "Supabase", "SwiftData", "Machine Learning"],
        link: "https://github.com/Aradhya-Bhagwat/MITWPU-Group20-SkyTrails.git"
    },
    {
        title: "NewsNexus",
        description: "A native news application focused on secure API key storage and real-time requirement engineering.",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop",
        icon: "fa-solid fa-newspaper",
        tags: ["Swift", "REST API"],
        link: "#"
    }
];

function initProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="card-image">
                <img src="${project.image}" alt="${project.title} Interface">
            </div>
            <div class="card-glow"></div>
            <div class="card-content">
                <i class="${project.icon} project-icon"></i>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tag-container">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="card-links">
                    <a href="${project.link}"><i class="fa-brands fa-github"></i> View Repo</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

/**
 * Research Logic
 */
const researchData = [
    {
        title: "IoT-Based Environmental Monitoring for Climate Change and Sustainable Development",
        description: "Contributed a book chapter discussing how IoT sensors collect environmental data like temperature, humidity, and pollution levels to assist in climate change tracking and sustainable development decisions.",
        date: "October 2024",
        venue: "Publisher: Routledge",
        icon: "fa-solid fa-book",
        link: "https://www.routledge.com/Smart-IoT-for-Sustainable-Development/Subhedar-Mahalle-Pawar/p/book/9781032887692",
        linkLabel: "View Publication",
        linkIcon: "fa-solid fa-link"
    },
    {
        title: "Enhancing Farming Efficiency with a 7-in-1 Soil IoT Sensor",
        description: "Presented research on a multi-sensor system designed to monitor soil conditions in real-time, enabling data-driven agricultural decisions to improve crop health and overall farming efficiency.",
        date: "May 2024",
        venue: "Presented at: ICAAICS 2024 (Pune)",
        icon: "fa-solid fa-microphone-lines",
        link: "#",
        linkLabel: "View Certificate",
        linkIcon: "fa-solid fa-award"
    }
];

function initResearch() {
    const container = document.getElementById('research-container');
    if (!container) return;

    researchData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card research-card';
        
        card.innerHTML = `
            <div class="card-content">
                <span class="date-tag">${item.date}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="publication-info">
                    <p><i class="${item.icon}"></i> ${item.venue}</p>
                    <a href="${item.link}" target="_blank" class="cite-link">
                        <i class="${item.linkIcon}"></i> ${item.linkLabel}
                    </a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

/**
 * Bioluminescent Background Animation
 */
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

    // Mouse Interaction
    let lastMoveTime = 0;
    const throttleDelay = 50; // ms

    window.addEventListener('mousemove', (e) => {
        const currentTime = Date.now();
        if (currentTime - lastMoveTime < throttleDelay) return;
        lastMoveTime = currentTime;

        const mouseSpore = document.createElement('div');
        mouseSpore.className = 'mouse-spore';

        const size = Math.random() * 3 + 2; // 2px to 5px
        mouseSpore.style.width = `${size}px`;
        mouseSpore.style.height = `${size}px`;
        mouseSpore.style.left = `${e.clientX}px`;
        mouseSpore.style.top = `${e.clientY}px`;

        container.appendChild(mouseSpore);

        // Remove from DOM after animation finishes (2 seconds)
        setTimeout(() => {
            mouseSpore.remove();
        }, 2000);
    });
}

// Initialize everything once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    type();
    initSkillPlant();
    initProjects();
    initResearch();
    initBackgroundAnimation();
});
