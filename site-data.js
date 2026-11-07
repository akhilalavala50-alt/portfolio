/**
 * Portfolio Data Configuration
 * Configured for ALAVALA RAM AKHIL
 */

const SITE_DATA = {
  profile: {
    name: "Alavala Ram Akhil",
    headline: "Developer \u2022 Software Engineering & Creative Tech",
    bio: "I'm a developer and Computer Science student at Joy University (NIAT). Passionate about crafting high-performance web applications, interactive digital experiences, and turning innovative tech ideas into scalable products.",
    statusBadge: "Developer \u2022 B.Tech @ Joy University (NIAT)",
    location: "India",
    avatarText: "RA",
    email: "akhilalavala50@gmail.com",
    socials: {
      github: "https://github.com/akhilalavala50-alt",
      linkedin: "https://www.linkedin.com/in/alavala-ram-akhil-21bb00423",
      devto: "https://dev.to",
      twitter: "https://x.com",
      rss: "#"
    }
  },

  skills: [
    {
      category: "Frontend & Web",
      items: ["HTML5", "CSS3 / Modern Layouts", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "Programming & Backend",
      items: ["Python", "C++", "Java", "Node.js", "RESTful APIs", "SQL / Databases"]
    },
    {
      category: "Developer Tools",
      items: ["Git & GitHub", "VS Code", "Terminal / Bash", "Postman", "Vite", "Vercel / Netlify Deployment"]
    },
    {
      category: "Creative Tech & Media",
      items: ["UI/UX Prototyping", "Interactive Web Animations", "Video Editing", "Content Creation", "Digital Branding"]
    }
  ],

  experience: [
    {
      company: "Joy University & NIAT",
      role: "B.Tech in Computer Science & Engineering",
      period: "2023 — Present",
      location: "India",
      description: "Pursuing Bachelor of Technology with focus on modern software engineering, data structures, and web technologies.",
      highlights: [
        "Developing hands-on full-stack web applications and interactive software systems through the NIAT tech program.",
        "Mastering object-oriented design patterns, algorithmic problem solving, and modern JavaScript/Python programming.",
        "Collaborating on peer programming projects, technical workshops, and software development challenges."
      ],
      technologies: ["JavaScript", "Python", "C++", "Data Structures", "Web Development", "Git"]
    },
    {
      company: "Independent Developer",
      role: "Web & Software Developer",
      period: "2024 — Present",
      location: "Remote",
      description: "Building responsive web projects, portfolio tools, and exploring emerging software paradigms.",
      highlights: [
        "Engineered zero-dependency high-performance responsive web applications with sub-second load times.",
        "Implemented interactive UI components including dark/light mode theming, search modals, and dynamic filtering.",
        "Designed clean digital branding and visual media assets combining programming with creative content production."
      ],
      technologies: ["React", "HTML5/CSS3", "JavaScript", "UI/UX Design", "Media Production"]
    }
  ],

  projects: [
    {
      id: "personal-portfolio-hub",
      title: "High-Performance Developer Portfolio Hub",
      tag: "Web Development",
      summary: "A bespoke, lightning-fast personal developer portfolio featuring dark/light themes, keyboard search, and deep-dive article reading view.",
      description: "Engineered with semantic HTML5, pure CSS custom properties, and modular JavaScript without heavy framework bloat. Includes a global command palette (Cmd+K) and fully responsive mobile layout.",
      link: "https://github.com/akhilalavala50-alt",
      tech: ["JavaScript", "CSS3 Variables", "HTML5", "Performance", "Responsive Design"],
      featured: true,
      stars: 45
    },
    {
      id: "interactive-web-app",
      title: "Interactive Full-Stack Web Application",
      tag: "Software Engineering",
      summary: "Dynamic client-side web application featuring real-time data binding, state management, and modern user dashboard.",
      description: "Structured around modular component architecture, reactive state transitions, asynchronous API communications, and accessible user interface patterns.",
      link: "https://github.com/akhilalavala50-alt",
      tech: ["JavaScript", "REST APIs", "Node.js", "CSS Grid", "Git"],
      featured: true,
      stars: 38
    },
    {
      id: "creative-media-platform",
      title: "Creative Tech & Multimedia Showcase",
      tag: "Creative Tech",
      summary: "Digital showcase platform bridging creative video production, gaming media, and interactive web elements.",
      description: "Explores modern video editing workflows, streaming optimizations, visual storytelling, and high-impact digital experiences for creators.",
      link: "https://github.com/akhilalavala50-alt",
      tech: ["Video Production", "Web Graphics", "UI Design", "Content Optimization"],
      featured: false,
      stars: 29
    },
    {
      id: "smart-task-organizer",
      title: "Smart Task & Productivity Engine",
      tag: "Developer Tools",
      summary: "A streamlined task management utility with local persistence, category tagging, and keyboard navigation shortcuts.",
      description: "Designed for developers to quickly track bug fixes, feature milestones, and daily coding sprint goals without tab clutter.",
      link: "https://github.com/akhilalavala50-alt",
      tech: ["JavaScript", "Local Storage", "CSS", "Workflow Optimization"],
      featured: false,
      stars: 22
    }
  ],

  articles: [
    {
      id: "building-zero-dependency-web-apps",
      slug: "building-zero-dependency-high-performance-web-apps",
      title: "The Power of Zero-Dependency Web Development: Fast, Clean, and Resilient",
      date: "Nov 2024",
      readTime: "6 min read",
      tags: ["Web Development", "JavaScript", "Performance"],
      summary: "Why building websites with semantic HTML, native CSS variables, and modern JavaScript provides unparalleled speed, security, and developer freedom.",
      content: `
### Rethinking Web Performance

In modern web development, it is easy to reach for 500MB of \`node_modules\` just to render a simple portfolio or landing page. But what happens when you step back and leverage native browser capabilities?

Modern browsers in 2024–2026 support incredible built-in features:
1. **CSS Custom Properties (Variables):** Instant dark/light mode transitions without external state managers.
2. **Native Flexbox & Grid:** Complex, robust layouts with zero CSS utility framework overhead.
3. **Vanilla JavaScript (ES6+):** Async/await, IntersectionObserver, template literals, and fast DOM APIs.

\`\`\`javascript
// Seamless theme switching with pure native code
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}
\`\`\`

### Key Benefits

* **Sub-Millisecond Rendering:** No bundler compilation delays or hydration mismatches.
* **Effortless Deployment:** Drop the files into GitHub Pages, Vercel, or Netlify and it runs immediately.
* **Longevity:** Native standards do not break with major framework version upgrades.
      `
    },
    {
      id: "creative-tech-and-developer-mindset",
      slug: "bridging-creative-production-with-software-engineering",
      title: "Bridging the Gap: How Creative Video Production Informs Software Engineering",
      date: "Oct 2024",
      readTime: "5 min read",
      tags: ["Creative Tech", "UI/UX", "Mindset"],
      summary: "Exploring the intersection of storytelling, pacing in video editing, and user experience flow in software development.",
      content: `
### Editing and Coding Share the Same Core Principles

At first glance, video editing and writing software code might seem like distinct disciplines. One is artistic and visual; the other is logical and mathematical.

However, when you dig deeper, they share fundamental tenets:

1. **Pacing and Flow:** In video editing, a cut that happens a fraction of a second too early or late ruins the rhythm. In web UI design, animation durations and transition easings dictate whether an application feels snappy or sluggish.
2. **Deduplication and Assembly:** Editing requires trimming footage to its purest form. Software development requires refactoring and eliminating dead code.
3. **Audience-Centric Focus:** Both mediums fail if you do not understand who is on the receiving end.

### Looking Ahead

As digital experiences become richer, the developers who understand both software architecture and visual storytelling will create the most engaging platforms.
      `
    }
  ]
};

// Export for module systems or attach to window for static browser execution
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_DATA;
} else {
  window.SITE_DATA = SITE_DATA;
}
