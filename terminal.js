// Arnav Agnihotri - Terminal Portfolio
// All personal information and commands

const info = {
    name: "Arnav Agnihotri",
    title: "CSE Student @ IIIT Hyderabad",
    email: "arnav.agnihotri@students.iiit.ac.in",
    phone: "+91 8076667285",
    github: "cheetah671",
    linkedin: "arnav-agnihotri-797b5336a",
    location: "Delhi, India",
    birthdate: "May 30, 2006",
    
    about: [
        "👋 Hi! I'm Arnav Agnihotri, a passionate Computer Science student at IIIT Hyderabad.",
        "",
        "🎓 Currently pursuing B.Tech in Computer Science & Engineering (2024-Present)",
        "📍 Born and raised in Delhi, India",
        "⚽ State Football Champion & National Taekwondo Bronze Medalist",
        "🏀 Basketball enthusiast and sports lover",
        "",
        "💡 I believe in balancing academics with sports and extracurricular activities.",
        "When I'm not coding, you'll find me on the football field or basketball court!",
        "",
        "🎯 JEE Advanced AIR 5094 | JEE Mains AIR 955",
        "📚 Academic Excellence: 98.6% (Class X) | 94.8% (Class XII)"
    ],
    
    education: [
        {
            institution: "IIIT Hyderabad",
            degree: "B.Tech in Computer Science & Engineering",
            period: "2024 - Present",
            details: "Pursuing undergraduate degree in CSE",
            courses: [
                "Introduction to Programming",
                "Computer Programming",
                "Digital Systems and Microcontrollers",
                "Probability and Statistics",
                "Linear Algebra",
                "Discrete Mathematics",
                "Introduction to Human Computer Interaction",
                "Foundations of Software Systems and Modern Applications"
            ]
        },
        {
            institution: "Amity International School, Mayur Vihar",
            degree: "Class XII (CBSE)",
            period: "2024",
            details: "94.8% Aggregate",
            courses: []
        },
        {
            institution: "Amity International School, Vasundhara Sector 6",
            degree: "Class X (CBSE)",
            period: "2022",
            details: "98.6% Aggregate",
            courses: []
        }
    ],
    
    achievements: [
        {
            icon: "🥉",
            title: "National Taekwondo Championship",
            description: "Bronze Medal",
            year: "2019",
            school: "Amity International School, Vasundhara Sector 6"
        },
        {
            icon: "🏆",
            title: "State Football Championship",
            description: "Champion",
            year: "2019",
            school: "Amity International School, Vasundhara Sector 6"
        },
        {
            icon: "⚽",
            title: "CBSE Cluster Football",
            description: "School Representative",
            year: "2018",
            school: "Amity International School, Vasundhara Sector 6"
        },
        {
            icon: "🎓",
            title: "JEE Advanced",
            description: "All India Rank 5094",
            year: "2024"
        },
        {
            icon: "🎓",
            title: "JEE Mains",
            description: "All India Rank 955",
            year: "2024"
        },
        {
            icon: "📚",
            title: "Academic Excellence",
            description: "Consistent top performer throughout school",
            year: "2010-2024"
        }
    ],
    
    skills: {
        languages: ["Python", "C++", "Java", "JavaScript", "HTML/CSS"],
        frameworks: ["React", "Node.js", "Django", "Express"],
        tools: ["Git", "GitHub", "VS Code", "Linux"],
        concepts: ["Data Structures", "Algorithms", "Machine Learning", "Web Development", "Database Management"]
    },
    
    projects: [
        {
            name: "C-Shell",
            description: "Custom Unix shell implementation in C with process management, piping, redirection, and background execution",
            tech: ["C", "Unix", "System Programming"],
            link: "https://github.com/cheetah671/C-shell.git",
            highlight: true
        },
        {
            name: "Biconnected Components",
            description: "Graph algorithm implementation to find biconnected components and articulation points",
            tech: ["C++", "Graph Algorithms", "Data Structures"],
            link: "https://github.com/cheetah671/biconnected-components.git",
            highlight: false
        },
        {
            name: "Wireshark Network Analyzer",
            description: "Network packet analysis tool with protocol dissection and traffic monitoring capabilities",
            tech: ["Python", "Networking", "Packet Analysis"],
            link: "https://github.com/cheetah671/Wireshark.git",
            highlight: true
        },
        {
            name: "Obstacle Detection System",
            description: "Real-time obstacle avoidance system using sensors and computer vision",
            tech: ["Python", "Computer Vision", "OpenCV"],
            link: "https://github.com/cheetah671/obstacle-avoidance.git",
            highlight: false
        },
        {
            name: "Personal Dashboard",
            description: "Interactive portfolio website with terminal interface, modern UI/UX, and text analysis tool",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/cheetah671/personal-dashboard.git",
            highlight: true
        },
        {
            name: "Database Management System",
            description: "Custom DBMS implementation with SQL query processing and transaction management",
            tech: ["C++", "SQL", "Database"],
            link: "https://github.com/cheetah671/dbms.git",
            highlight: false
        },
        {
            name: "File System Implementation",
            description: "Unix-like file system with inode structure, directory management, and file operations",
            tech: ["C", "Operating Systems", "File Systems"],
            link: "https://github.com/cheetah671/file-system.git",
            highlight: true
        }
    ],
    
    hobbies: [
        "⚽ Football - State Champion & District Level Player",
        "🏀 Basketball - Regular player and enthusiast",
        "🏃 Athletics & Running",
        "💻 Coding & Building Projects",
        "🥋 Taekwondo - National Bronze Medalist",
        "🎮 Gaming in free time",
        "📚 Reading tech blogs and articles"
    ]
};

// ASCII Art Banner
const banner = `
 █████╗ ██████╗ ███╗   ██╗ █████╗ ██╗   ██╗
██╔══██╗██╔══██╗████╗  ██║██╔══██╗██║   ██║
███████║██████╔╝██╔██╗ ██║███████║██║   ██║
██╔══██║██╔══██╗██║╚██╗██║██╔══██║╚██╗ ██╔╝
██║  ██║██║  ██║██║ ╚████║██║  ██║ ╚████╔╝ 
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝  
    AGNIHOTRI ⚽ IIIT Hyderabad CSE
`;

// Command history
let commandHistory = [];
let historyIndex = -1;

// Initialize terminal
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('command-input');
    const output = document.getElementById('output');
    const asciiArt = document.getElementById('ascii-art');
    const contactCard = document.getElementById('contact-card');
    const welcomeMsg = document.getElementById('welcome-message');
    
    // Display banner
    asciiArt.textContent = banner;
    
    // Display contact card
    contactCard.innerHTML = `
        <img src="images/profile.jpeg" alt="Arnav Agnihotri" class="profile-pic" onerror="this.style.display='none'">
        <div class="contact-info">
            <h2>${info.name}</h2>
            <p>${info.title}</p>
            <p><i class="fas fa-envelope"></i> ${info.email}</p>
            <p><i class="fas fa-phone"></i> ${info.phone}</p>
            <div class="contact-links">
                <a href="https://github.com/${info.github}" target="_blank">
                    <i class="fab fa-github"></i> GitHub
                </a>
                <a href="https://linkedin.com/in/${info.linkedin}" target="_blank">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="THE_FINAL_RESUME.pdf" target="_blank">
                    <i class="fas fa-file-pdf"></i> Resume
                </a>
            </div>
        </div>
    `;
    
    // Welcome message
    welcomeMsg.innerHTML = `
        <p>Welcome to my terminal portfolio! 🚀</p>
        <p>Type <span class="highlight">'help'</span> to see available commands or just start exploring!</p>
    `;
    
    // Focus input
    input.focus();
    
    // Handle command input
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.trim().toLowerCase();
            if (command) {
                commandHistory.push(command);
                historyIndex = commandHistory.length;
                executeCommand(command);
                input.value = '';
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                input.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                input.value = '';
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            autocomplete(input.value.toLowerCase());
        }
    });
    
    // Auto-focus input when clicking anywhere
    document.addEventListener('click', () => input.focus());
});

// Autocomplete function
function autocomplete(partial) {
    const commands = ['help', 'about', 'education', 'achievements', 'skills', 'projects', 'hobbies', 'contact', 'resume', 'clear', 'banner', 'whoami', 'social'];
    const matches = commands.filter(cmd => cmd.startsWith(partial));
    
    if (matches.length === 1) {
        document.getElementById('command-input').value = matches[0];
    }
}

// Execute command
function executeCommand(command) {
    const output = document.getElementById('output');
    
    // Echo command
    const commandEcho = document.createElement('div');
    commandEcho.className = 'command-echo';
    commandEcho.innerHTML = `<span class="prompt">arnav@iiith:~$</span> <span class="command">${command}</span>`;
    output.appendChild(commandEcho);
    
    // Process command
    const result = document.createElement('div');
    result.className = 'result';
    
    switch(command) {
        case 'help':
            result.innerHTML = getHelp();
            break;
        case 'about':
            result.innerHTML = getAbout();
            break;
        case 'education':
            result.innerHTML = getEducation();
            break;
        case 'achievements':
            result.innerHTML = getAchievements();
            break;
        case 'skills':
            result.innerHTML = getSkills();
            break;
        case 'projects':
            result.innerHTML = getProjects();
            break;
        case 'hobbies':
            result.innerHTML = getHobbies();
            break;
        case 'contact':
            result.innerHTML = getContact();
            break;
        case 'resume':
            result.innerHTML = '<p class="success">Opening resume in new tab...</p>';
            setTimeout(() => window.open('THE_FINAL_RESUME.pdf', '_blank'), 500);
            break;
        case 'social':
            result.innerHTML = getSocial();
            break;
        case 'whoami':
            result.innerHTML = getWhoami();
            break;
        case 'clear':
            output.innerHTML = '';
            return;
        case 'banner':
            result.innerHTML = `<pre class="ascii-art">${banner}</pre>`;
            break;
        default:
            result.innerHTML = `<p class="error">Command not found: ${command}</p><p>Type 'help' to see available commands.</p>`;
    }
    
    output.appendChild(result);
    
    // Scroll to bottom
    const terminalBody = document.getElementById('terminal-body');
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// Command functions
function getHelp() {
    return `
<div class="section-title">📚 Available Commands</div>
<div class="list-item"><span class="highlight">help</span> - Display this help message</div>
<div class="list-item"><span class="highlight">about</span> - Learn more about me</div>
<div class="list-item"><span class="highlight">education</span> - View my educational background</div>
<div class="list-item"><span class="highlight">achievements</span> - See my achievements and awards</div>
<div class="list-item"><span class="highlight">skills</span> - View my technical skills</div>
<div class="list-item"><span class="highlight">projects</span> - Check out my projects</div>
<div class="list-item"><span class="highlight">hobbies</span> - What I love doing (hint: ⚽)</div>
<div class="list-item"><span class="highlight">contact</span> - Get my contact information</div>
<div class="list-item"><span class="highlight">social</span> - View my social media links</div>
<div class="list-item"><span class="highlight">resume</span> - Open my resume (PDF)</div>
<div class="list-item"><span class="highlight">whoami</span> - A philosophical question</div>
<div class="list-item"><span class="highlight">banner</span> - Display the banner again</div>
<div class="list-item"><span class="highlight">clear</span> - Clear the terminal</div>
<br>
<p>💡 <span class="highlight">Tip:</span> Use <kbd>Tab</kbd> for autocomplete and <kbd>↑</kbd>/<kbd>↓</kbd> to navigate history!</p>
    `;
}

function getAbout() {
    return `
<div class="section-title">👨‍💻 About Me</div>
${info.about.map(line => `<p>${line}</p>`).join('')}
    `;
}

function getEducation() {
    return `
<div class="section-title">🎓 Education</div>
${info.education.map(edu => `
<div style="margin: 1rem 0; padding: 1rem; background: rgba(100, 255, 218, 0.05); border-left: 3px solid var(--accent); border-radius: 4px;">
    <p class="highlight">${edu.institution}</p>
    <p>${edu.degree}</p>
    <p style="color: var(--text-secondary);">${edu.period}</p>
    <p style="color: var(--success);">${edu.details}</p>
    ${edu.courses && edu.courses.length > 0 ? `
    <div style="margin-top: 0.75rem;">
        <p style="color: var(--accent); font-weight: 600; margin-bottom: 0.5rem;">📚 Courses:</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 0.5rem;">
            ${edu.courses.map(course => `<div class="list-item" style="font-size: 0.85rem; padding-left: 1.5rem;">${course}</div>`).join('')}
        </div>
    </div>
    ` : ''}
</div>
`).join('')}
    `;
}

function getAchievements() {
    return `
<div class="section-title">🏆 Achievements & Awards</div>
${info.achievements.map(ach => `
<div style="margin: 1rem 0; padding: 1rem; background: rgba(100, 255, 218, 0.05); border-left: 3px solid var(--accent); border-radius: 4px;">
    <p><span style="font-size: 1.5rem;">${ach.icon}</span> <span class="highlight">${ach.title}</span></p>
    <p>${ach.description}</p>
    <p style="color: var(--text-secondary);">${ach.year}${ach.school ? ' | ' + ach.school : ''}</p>
</div>
`).join('')}
    `;
}

function getSkills() {
    return `
<div class="section-title">💻 Technical Skills</div>
<div style="margin: 1rem 0;">
    <p class="highlight">Programming Languages:</p>
    <div style="margin: 0.5rem 0;">
        ${info.skills.languages.map(lang => `<span class="badge">${lang}</span>`).join('')}
    </div>
</div>
<div style="margin: 1rem 0;">
    <p class="highlight">Frameworks & Libraries:</p>
    <div style="margin: 0.5rem 0;">
        ${info.skills.frameworks.map(fw => `<span class="badge">${fw}</span>`).join('')}
    </div>
</div>
<div style="margin: 1rem 0;">
    <p class="highlight">Tools & Technologies:</p>
    <div style="margin: 0.5rem 0;">
        ${info.skills.tools.map(tool => `<span class="badge">${tool}</span>`).join('')}
    </div>
</div>
<div style="margin: 1rem 0;">
    <p class="highlight">Core Concepts:</p>
    <div style="margin: 0.5rem 0;">
        ${info.skills.concepts.map(concept => `<span class="badge">${concept}</span>`).join('')}
    </div>
</div>
    `;
}

function getProjects() {
    return `
<div class="section-title">🚀 Projects</div>
<p style="color: var(--text-secondary); margin-bottom: 1rem;">Click on any project to view the GitHub repository!</p>
${info.projects.map(proj => `
<div style="margin: 1rem 0; padding: 1.25rem; background: ${proj.highlight ? 'rgba(100, 255, 218, 0.1)' : 'rgba(100, 255, 218, 0.05)'}; border-left: 3px solid var(--accent); border-radius: 8px; transition: all 0.3s; cursor: pointer;" onmouseover="this.style.background='rgba(100, 255, 218, 0.15)'; this.style.transform='translateX(5px)';" onmouseout="this.style.background='${proj.highlight ? 'rgba(100, 255, 218, 0.1)' : 'rgba(100, 255, 218, 0.05)'}'; this.style.transform='translateX(0)';">
    <p class="highlight" style="font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
        ${proj.highlight ? '⭐' : '📦'} ${proj.name}
    </p>
    <p style="margin: 0.5rem 0; line-height: 1.6;">${proj.description}</p>
    <div style="margin: 0.75rem 0;">
        ${proj.tech.map(tech => `<span class="badge">${tech}</span>`).join('')}
    </div>
    <p style="margin-top: 0.75rem;">
        <a href="${proj.link}" target="_blank" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: rgba(100, 255, 218, 0.2); border-radius: 6px; text-decoration: none; transition: all 0.3s;">
            <i class="fab fa-github"></i> View on GitHub
        </a>
    </p>
</div>
`).join('')}
<br>
<p style="text-align: center; padding: 1rem; background: rgba(100, 255, 218, 0.05); border-radius: 8px;">
    💡 <span class="highlight">Want to see more?</span> Check out my <a href="https://github.com/${info.github}" target="_blank" style="font-weight: 600;">GitHub profile</a> for additional projects and contributions!
</p>
    `;
}

function getHobbies() {
    return `
<div class="section-title">⚽ Hobbies & Interests</div>
${info.hobbies.map(hobby => `<div class="list-item">${hobby}</div>`).join('')}
<br>
<p>🎯 Sports have taught me teamwork, discipline, and perseverance - values I bring to everything I do!</p>
    `;
}

function getGallery() {
    return `
<div class="section-title">📸 Photo Gallery</div>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
    <div style="position: relative; border-radius: 12px; overflow: hidden; border: 2px solid var(--accent); box-shadow: 0 8px 32px rgba(100, 255, 218, 0.2); transition: all 0.3s; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 12px 48px rgba(100, 255, 218, 0.4)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 8px 32px rgba(100, 255, 218, 0.2)';">
        <img src="images/profile.jpeg" alt="Profile" style="width: 100%; height: 250px; object-fit: cover; display: block;">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.9)); padding: 1rem; color: white;">
            <p style="font-weight: 600; margin: 0;">Arnav Agnihotri</p>
            <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0; color: var(--accent);">CSE @ IIIT Hyderabad</p>
        </div>
    </div>
    <div style="position: relative; border-radius: 12px; overflow: hidden; border: 2px solid var(--accent); box-shadow: 0 8px 32px rgba(100, 255, 218, 0.2); transition: all 0.3s; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 12px 48px rgba(100, 255, 218, 0.4)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 8px 32px rgba(100, 255, 218, 0.2)';">
        <img src="images/Pasted image.png" alt="Achievement" style="width: 100%; height: 250px; object-fit: cover; display: block;">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.9)); padding: 1rem; color: white;">
            <p style="font-weight: 600; margin: 0;">Sports & Achievements</p>
            <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0; color: var(--accent);">Football Champion ⚽</p>
        </div>
    </div>
    <div style="position: relative; border-radius: 12px; overflow: hidden; border: 2px solid var(--accent); box-shadow: 0 8px 32px rgba(100, 255, 218, 0.2); transition: all 0.3s; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 12px 48px rgba(100, 255, 218, 0.4)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 8px 32px rgba(100, 255, 218, 0.2)';">
        <img src="images/Pasted image (2).png" alt="Campus Life" style="width: 100%; height: 250px; object-fit: cover; display: block;">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.9)); padding: 1rem; color: white;">
            <p style="font-weight: 600; margin: 0;">Campus Life</p>
            <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0; color: var(--accent);">IIIT Hyderabad 🎓</p>
        </div>
    </div>
</div>
<p style="text-align: center; color: var(--text-secondary); margin-top: 1rem;">Hover over images to see them zoom! ✨</p>
    `;
}

function getContact() {
    return `
<div class="section-title">📧 Contact Information</div>
<div style="margin: 1rem 0; padding: 1rem; background: rgba(100, 255, 218, 0.05); border-radius: 8px;">
    <p><i class="fas fa-user"></i> <span class="highlight">${info.name}</span></p>
    <p><i class="fas fa-envelope"></i> <a href="mailto:${info.email}">${info.email}</a></p>
    <p><i class="fas fa-phone"></i> <a href="tel:${info.phone}">${info.phone}</a></p>
    <p><i class="fas fa-map-marker-alt"></i> ${info.location}</p>
    <p><i class="fas fa-birthday-cake"></i> ${info.birthdate}</p>
</div>
<p>Feel free to reach out for collaborations, opportunities, or just to chat about football! ⚽</p>
    `;
}

function getSocial() {
    return `
<div class="section-title">🌐 Social Media</div>
<div style="margin: 1rem 0; padding: 1rem; background: rgba(100, 255, 218, 0.05); border-radius: 8px;">
    <p><i class="fab fa-github"></i> GitHub: <a href="https://github.com/${info.github}" target="_blank">@${info.github}</a></p>
    <p><i class="fab fa-linkedin"></i> LinkedIn: <a href="https://linkedin.com/in/${info.linkedin}" target="_blank">@${info.linkedin}</a></p>
    <p><i class="fas fa-envelope"></i> Email: <a href="mailto:${info.email}">${info.email}</a></p>
</div>
<p>Let's connect! I'm always open to networking and collaboration opportunities. 🤝</p>
    `;
}

function getWhoami() {
    const quotes = [
        "A football player who codes and a coder who plays! ⚽💻",
        "State champion on the field, problem solver in code. 🏆",
        "From Delhi streets to IIIT campus, chasing dreams both ways! 🚀",
        "A taekwondo warrior turned software engineer. 🥋",
        "Dribbling through life's challenges, one goal at a time! ⚽",
        "Where sports meet tech, that's where you'll find me! 🎯"
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    return `
<div style="margin: 1rem 0; padding: 1.5rem; background: rgba(100, 255, 218, 0.1); border: 2px solid var(--accent); border-radius: 8px; text-align: center;">
    <p style="font-size: 1.2rem; color: var(--text-highlight); margin-bottom: 0.5rem;">"${randomQuote}"</p>
    <p style="color: var(--text-secondary);">- ${info.name}</p>
</div>
<p>That's who I am! A perfect blend of sports, academics, and technology. 🌟</p>
    `;
}

// Easter egg - Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        alert('⚽ GOOOAAAALLL! You found the secret! Arnav scores! 🎉');
        konamiCode = [];
    }
});
