/* ================================================================
   BALVANT CHAUDHARY – PORTFOLIO  |  script.js
   ================================================================
   Data sections are clearly labelled so you can update them easily.
   ================================================================ */

/* ──────────────────────────────────────────────────────────────
   1. PROJECTS DATA
   To add a new project: copy one object, fill in your details,
   and set useIllustration: false + provide an imagePath if you
   have a screenshot. Otherwise leave useIllustration: true.
   ────────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "medikiosk",
    number: "01",
    title: "MediKiosk",
    description:
      "A full-stack medical interview platform designed to streamline patient screening and doctor review workflows. Handles the complete lifecycle from intake to clinical summary generation.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "OCR", "AI"],
    features: [
      "JWT authentication with role-based access control",
      "Patient interview and screening workflows",
      "OCR-based medical document text extraction",
      "AI-assisted interview question selection",
      "Doctor dashboard with patient queue management",
      "Clinical summary generation for doctor review",
    ],
    githubUrl: "https://github.com/Balvant-12/Medikiosk",
    liveUrl: null,           // No live demo available yet
    useIllustration: true,   // Set to false and provide imagePath if you have a screenshot
    imagePath: null,
  },
  /* ── ADD FUTURE PROJECTS BELOW ──────────────────────────────
  {
    id: "project-2",
    number: "02",
    title: "Project Name",
    description: "A short description of the project.",
    tags: ["Tag1", "Tag2"],
    features: ["Feature 1", "Feature 2"],
    githubUrl: "https://github.com/Balvant-12/project-name",
    liveUrl: null,
    useIllustration: false,
    imagePath: "assets/images/project-2.png",
  },
  ──────────────────────────────────────────────────────────── */
];

/* ──────────────────────────────────────────────────────────────
   2. COMPETITIVE PROGRAMMING PROFILES
   Update your ratings and stats here whenever they change.
   Profile URLs are placeholders – replace with your actual links.
   ────────────────────────────────────────────────────────────── */
const CP_PROFILES = [
  {
    id: "leetcode",
    platform: "LeetCode",
    iconText: "LC",
    rating: "1797",
    ratingLabel: "Rating",
    color: "hsl(34, 90%, 55%)",
    colorBg: "hsla(34, 90%, 55%, 0.1)",
    colorBorder: "hsla(34, 90%, 55%, 0.3)",
    stats: [
      { label: "Problems Solved", value: "750+" },
      { label: "Contests Entered", value: "45+" },
    ],
    profileUrl: "https://leetcode.com/u/Balvant_Chaudhary/",
  },
  {
    id: "codechef",
    platform: "CodeChef",
    iconText: "CC",
    rating: "1563",
    ratingLabel: "★★ 2-Star",
    color: "hsl(24, 85%, 55%)",
    colorBg: "hsla(24, 85%, 55%, 0.1)",
    colorBorder: "hsla(24, 85%, 55%, 0.3)",
    stats: [
      { label: "Problems Solved", value: "650+" },
      { label: "Contests Entered", value: "40+" },
    ],
    profileUrl: "https://www.codechef.com/users/balvant",
  },
  {
    id: "codeforces",
    platform: "Codeforces",
    iconText: "CF",
    rating: "1280",
    ratingLabel: "Rating",
    color: "hsl(214, 80%, 60%)",
    colorBg: "hsla(214, 80%, 60%, 0.1)",
    colorBorder: "hsla(214, 80%, 60%, 0.3)",
    stats: [
      { label: "Problems Solved", value: "200+" },
      { label: "Contests Entered", value: "45+" },
    ],
    profileUrl: "https://codeforces.com/profile/balvantchaudhary",
  },
  {
    id: "atcoder",
    platform: "AtCoder",
    iconText: "AC",
    rating: "614",
    ratingLabel: "Rating",
    color: "hsl(160, 60%, 50%)",
    colorBg: "hsla(160, 60%, 50%, 0.1)",
    colorBorder: "hsla(160, 60%, 50%, 0.3)",
    stats: [
      { label: "Contests Entered", value: "25+" },
    ],
    profileUrl: "https://atcoder.jp/users/Balvant",
  },
];

/* ──────────────────────────────────────────────────────────────
   3. ACHIEVEMENTS DATA
   ────────────────────────────────────────────────────────────── */
const ACHIEVEMENTS = [
  {
    id: "codered",
    icon: "fa-solid fa-medal",
    event: "CodeRed Finals · IIIT Allahabad",
    title: "Rank 14 Overall",
    description:
      "Secured Rank 14 overall in the flagship ICPC-style algorithmic programming contest organized during IIIT Allahabad's technical fest.",
  },
  {
    id: "insomnia",
    icon: "fa-solid fa-flag",
    event: "Insomnia 26 · IIT Roorkee",
    title: "National Finalist",
    description:
      "Competed as a team in the prestigious algorithmic and competitive programming event organized by IIT Roorkee.",
  },
  {
    id: "starforge",
    icon: "fa-solid fa-rocket",
    event: "StarForge Hackathon 2026 · E-Cell JSS Noida",
    title: "Top 20 Teams",
    description:
      "Shortlisted among the top 20 teams out of all participants in the college-level hackathon organized by E-Cell JSS Noida.",
  },
  {
    id: "coderush",
    icon: "fa-solid fa-users",
    event: "CODE RUSH 3.0",
    title: "Top 8 Team Finish",
    description:
      "Competed in a competitive programming contest with approximately 200 participants. Our team secured a position in the Top 8.",
  },
];

/* ================================================================
   RENDERER FUNCTIONS
   ================================================================ */

/** Render the medical dashboard CSS illustration */
function renderDashboardIllustration() {
  return `
    <div class="dashboard-mock" aria-hidden="true">
      <div class="dash-header">
        <span class="dash-header-title">MediKiosk Dashboard</span>
        <div class="dash-status">
          <span class="dash-status-dot"></span> Live
        </div>
      </div>
      <div class="dash-body">
        <div class="dash-stat-row">
          <div class="dash-stat">
            <span class="dash-stat-val">24</span>
            <span class="dash-stat-lbl">Patients Today</span>
          </div>
          <div class="dash-stat">
            <span class="dash-stat-val">8</span>
            <span class="dash-stat-lbl">In Queue</span>
          </div>
          <div class="dash-stat">
            <span class="dash-stat-val">16</span>
            <span class="dash-stat-lbl">Reviewed</span>
          </div>
        </div>
        <p class="dash-queue-label">Patient Queue</p>
        <div class="dash-queue-item">
          <span class="dash-queue-name">Patient A-1047</span>
          <span class="dash-badge waiting">Waiting</span>
        </div>
        <div class="dash-queue-item">
          <span class="dash-queue-name">Patient A-1048</span>
          <span class="dash-badge in-review">In Review</span>
        </div>
        <div class="dash-queue-item">
          <span class="dash-queue-name">Patient A-1046</span>
          <span class="dash-badge done">Done</span>
        </div>
      </div>
    </div>
  `;
}

/** Render all project cards */
function renderProjects() {
  const container = document.getElementById("projectsList");
  if (!container) return;

  container.innerHTML = PROJECTS.map((project) => {
    const githubBtn = project.githubUrl && project.githubUrl !== "#"
      ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost" aria-label="View ${project.title} on GitHub">
           <i class="fa-brands fa-github" aria-hidden="true"></i> GitHub
         </a>`
      : `<span class="btn btn-ghost" style="opacity:0.45;cursor:default;" aria-label="GitHub link coming soon">
           <i class="fa-brands fa-github" aria-hidden="true"></i> GitHub
         </span>`;

    const liveBtn = project.liveUrl && project.liveUrl !== "#"
      ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" aria-label="View live demo of ${project.title}">
           <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Live Demo
         </a>`
      : `<span class="btn btn-outline" style="opacity:0.45;cursor:default;" aria-label="Live demo coming soon">
           <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Live Demo
         </span>`;

    const visualContent = project.useIllustration
      ? renderDashboardIllustration()
      : `<img src="${project.imagePath}" alt="Screenshot of ${project.title}" loading="lazy" />`;

    return `
      <article class="project-card reveal" id="project-${project.id}">
        <div class="project-visual">
          ${visualContent}
        </div>
        <div class="project-info">
          <span class="project-number">${project.number}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
          </div>
          <div class="project-features">
            ${project.features.map(f => `
              <div class="project-feature">
                <i class="fa-solid fa-check" aria-hidden="true"></i>
                <span>${f}</span>
              </div>
            `).join("")}
          </div>
          <div class="project-links">
            ${githubBtn}
            ${liveBtn}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/** Render CP profile cards */
function renderCPProfiles() {
  const container = document.getElementById("cpGrid");
  if (!container) return;

  container.innerHTML = CP_PROFILES.map((profile) => {
    const isPlaceholder = !profile.profileUrl || profile.profileUrl === "#";
    const linkEl = isPlaceholder
      ? `<span class="cp-link" style="opacity:0.45;cursor:default;">
           Profile link coming soon <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
         </span>`
      : `<a href="${profile.profileUrl}" target="_blank" rel="noopener noreferrer" class="cp-link" aria-label="View ${profile.platform} profile">
           View Profile <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
         </a>`;

    return `
      <div class="cp-card reveal" id="cp-${profile.id}"
           style="--cp-color:${profile.color};--cp-bg:${profile.colorBg};--cp-border:${profile.colorBorder};">
        <div class="cp-card-header">
          <div class="cp-platform-badge">
            <div class="cp-platform-icon">${profile.iconText}</div>
            <span class="cp-platform-name">${profile.platform}</span>
          </div>
          <span class="cp-rating-badge">${profile.ratingLabel}</span>
        </div>
        <div class="cp-rating">${profile.rating}</div>
        <div class="cp-stats">
          ${profile.stats.map(s => `
            <div class="cp-stat">
              <span class="cp-stat-label">${s.label}</span>
              <span class="cp-stat-value">${s.value}</span>
            </div>
          `).join("")}
        </div>
        ${linkEl}
      </div>
    `;
  }).join("");
}

/** Render achievements */
function renderAchievements() {
  const container = document.getElementById("achievementsGrid");
  if (!container) return;

  container.innerHTML = ACHIEVEMENTS.map((a) => `
    <div class="achievement-card reveal" id="achievement-${a.id}">
      <div class="achievement-icon">
        <i class="${a.icon}" aria-hidden="true"></i>
      </div>
      <span class="achievement-event">${a.event}</span>
      <h3 class="achievement-title">${a.title}</h3>
      <p class="achievement-desc">${a.description}</p>
    </div>
  `).join("");
}

/* ================================================================
   THEME TOGGLE
   ================================================================ */
function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");

  const saved = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = saved || (prefersDark ? "dark" : "light");

  root.setAttribute("data-theme", initialTheme);
  updateIcon(initialTheme);

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
    updateIcon(next);
  });

  function updateIcon(theme) {
    icon.className = theme === "dark"
      ? "fa-solid fa-moon"
      : "fa-solid fa-sun";
  }
}

/* ================================================================
   MOBILE NAVIGATION
   ================================================================ */
function initMobileNav() {
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("navLinks");
  const overlay   = document.getElementById("navOverlay");

  function openNav() {
    navLinks.classList.add("open");
    overlay.classList.add("visible");
    overlay.setAttribute("aria-hidden", "false");
    hamburger.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    navLinks.classList.remove("open");
    overlay.classList.remove("visible");
    overlay.setAttribute("aria-hidden", "true");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    navLinks.classList.contains("open") ? closeNav() : openNav();
  });

  overlay.addEventListener("click", closeNav);

  // Close on nav link click
  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("open")) closeNav();
  });
}

/* ================================================================
   NAVBAR SCROLL BEHAVIOUR & ACTIVE LINK
   ================================================================ */
function initNavbar() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });

  // Active section highlighting
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((s) => observer.observe(s));
}

/* ================================================================
   SCROLL REVEAL
   ================================================================ */
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger sibling cards
          const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, Math.min(delay * 80, 400));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ================================================================
   FOOTER YEAR
   ================================================================ */
function setFooterYear() {
  const el = document.getElementById("footerYear");
  if (el) el.textContent = `© ${new Date().getFullYear()}`;
}

/* ================================================================
   INIT
   ================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // Render data-driven sections
  renderProjects();
  renderCPProfiles();
  renderAchievements();

  // Init interactions
  initTheme();
  initMobileNav();
  initNavbar();
  setFooterYear();

  // Scroll reveal runs after dynamic content is in the DOM
  requestAnimationFrame(() => initScrollReveal());
});
