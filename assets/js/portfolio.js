(() => {
  const THEME_CFG = window.JayedPortfolioTheme || {};
  const AVATAR_SRC = THEME_CFG.avatarUrl || "assets/profile.jpg";
  const BASE_URL = THEME_CFG.baseUrl || "./";

  function demoUrl(file) {
    return `${BASE_URL.replace(/\/?$/, "/")}demos/${file}`;
  }

  function safeText(value) {
    return String(value ?? "").replace(/[&<>"']/g, ch => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[ch]));
  }

  // ==================== 1. CAPABILITIES INVENTORY (NO INFLATED %) ====================
  const SKILLS_DATA = [
    {
      id: "wp-core",
      cat: "wordpress",
      pillar: "WordPress",
      tier: "Core Service",
      title: "WordPress Setup, Security & Site Management",
      desc: "Clean WordPress installation, staging-to-live migration, caching, SSL/security hardening, and easy client handover.",
      tags: ["WordPress CMS", "Staging & Launch", "Speed & Caching", "Security"]
    },
    {
      id: "wp-builders",
      cat: "wordpress",
      pillar: "WordPress",
      tier: "Core Service",
      title: "Elementor & Gutenberg Custom Layouts",
      desc: "Responsive, editorial-grade pages crafted in Elementor and Gutenberg with reusable global typography and color systems.",
      tags: ["Elementor", "Gutenberg", "Responsive UI", "Landing Pages"]
    },
    {
      id: "wp-themes",
      cat: "wordpress",
      pillar: "WordPress",
      tier: "Production Stack",
      title: "Child Themes, CPT & ACF Architecture",
      desc: "Structured dynamic content models using child themes, Custom Post Types (CPT), and Advanced Custom Fields (ACF).",
      tags: ["Child Themes", "CPT", "ACF", "Theme Customization"]
    },
    {
      id: "wp-woo",
      cat: "wordpress",
      pillar: "WooCommerce",
      tier: "Core Service",
      title: "WooCommerce Stores & Conversion Flows",
      desc: "End-to-end online shop setup with custom product cards, slide-out cart UX, checkout gateways, and mobile optimization.",
      tags: ["WooCommerce", "Cart & Checkout", "Multilingual", "Membership"]
    },
    {
      id: "ai-workflows",
      cat: "ai",
      pillar: "AI Workflows",
      tier: "BCC Trained",
      title: "AI-Assisted Prototyping & Web Automation",
      desc: "Structured prompt engineering and AI-accelerated prototyping refined manually for human-grade visual polish and clean code.",
      tags: ["Prompt Engineering", "ChatGPT", "Claude", "Gemini", "GitHub Copilot"]
    },
    {
      id: "ai-media",
      cat: "ai",
      pillar: "AI Workflows",
      tier: "Creative Ops",
      title: "Content Structure & Visual Brand Assets",
      desc: "Tailored landing copy frameworks, brand graphics, and clean visual collateral for cohesive web launches.",
      tags: ["Copy Architecture", "Brand Visuals", "AI Media", "Workflow Automation"]
    },
    {
      id: "seo-keywords",
      cat: "seo",
      pillar: "SEO & Leads",
      tier: "Growth Workflow",
      title: "Keyword Research & Search-Intent Mapping",
      desc: "Low-difficulty keyword discovery, competitor gap audits, and page-level content blueprints built to capture buyer intent.",
      tags: ["Keyword Planner", "Ahrefs", "SEMrush", "Ubersuggest"]
    },
    {
      id: "seo-tech",
      cat: "seo",
      pillar: "SEO & Leads",
      tier: "Growth Workflow",
      title: "On-Page SEO, Analytics & B2B Lead Gen",
      desc: "Rank Math configuration, schema markup, Google Search Console, GA4 setup, and targeted B2B/B2C prospect list building.",
      tags: ["Rank Math", "Search Console", "GA4", "B2B Lead Gen"]
    },
    {
      id: "mkt-social",
      cat: "marketing",
      pillar: "Brand & Media",
      tier: "5+ Years Ops",
      title: "Social Strategy, Meta Ads & Email Flows",
      desc: "Long-term digital brand communication, content calendars, Facebook Ads Manager, and email automation campaigns.",
      tags: ["Meta Business Suite", "Facebook Ads", "Mailchimp", "Klaviyo", "Brevo"]
    },
    {
      id: "mkt-creative",
      cat: "marketing",
      pillar: "Brand & Media",
      tier: "Production Stack",
      title: "Graphic Design, Video & Commercial Photo",
      desc: "Promotional design in Photoshop, Illustrator, and Canva alongside commercial product photography and short-form video.",
      tags: ["Photoshop", "Illustrator", "Canva", "Premiere Pro", "CapCut"]
    },
    {
      id: "tools-office",
      cat: "tools",
      pillar: "IT & Ops",
      tier: "Daily Toolkit",
      title: "Excel Analytics, Workspace & Technical Support",
      desc: "Spreadsheet reporting (PivotTables, VLOOKUP), Google Workspace systems, and dependable hardware/network troubleshooting.",
      tags: ["Excel PivotTables", "VLOOKUP", "Google Workspace", "IT Support"]
    }
  ];

  // ==================== 2. LIVE INTERACTIVE PROJECTS ====================
  const DEFAULT_PROJECTS = [
    {
      id: "proj-apex-wp",
      cat: "wordpress",
      badge: "Live Interactive Demo",
      thumbClass: "thumb-apex",
      thumbLabel: "WORDPRESS • ELEMENTOR",
      thumbTitle: "Apex Architecture & Build",
      thumbTagline: "Corporate WordPress layout with interactive service tabs & live inquiry preview.",
      thumbStats: [["98/100", "Speed Goal"], ["Rank Math", "SEO Ready"], ["5–7 Days", "Delivery"]],
      title: "Apex Studio — Business WordPress Build",
      subtitle: "Interactive Showcase • Corporate & Agency Architecture",
      desc: "Conversion-focused business website structure featuring modular Elementor sections, clear project roadmaps, and frictionless consultation capture.",
      bullets: [
        "Click Live Preview to test interactive module filters and the consultation booking form.",
        "Mobile-first responsive spacing tested across 390px phone, 768px tablet, and 1440px desktop.",
        "Clean semantic headings and Rank Math SEO architecture ready for immediate launch."
      ],
      tags: ["WordPress", "Elementor", "Responsive UI", "Rank Math SEO"],
      liveUrl: demoUrl("apex-agency.html"),
      link: demoUrl("apex-agency.html"),
      ctaLabel: "Open Live Demo ↗"
    },
    {
      id: "proj-velora-woo",
      cat: "wordpress",
      badge: "Live Interactive Demo",
      thumbClass: "thumb-velora",
      thumbLabel: "WOOCOMMERCE STOREFRONT",
      thumbTitle: "Velora Coffee Roasters",
      thumbTagline: "E-commerce storefront with category filtering & working slide-out shopping bag.",
      thumbStats: [["Live Cart", "Interactive"], ["3 Categories", "Filterable"], ["Checkout", "Ready UX"]],
      title: "Velora Roasters — WooCommerce Storefront",
      subtitle: "Interactive Showcase • E-Commerce & Cart UX",
      desc: "Boutique online store concept designed for smooth browsing, instant product filtering, and high-converting slide-out cart checkout.",
      bullets: [
        "Click Live Preview to filter products and add/remove items inside the working cart drawer.",
        "Built for WooCommerce catalog templates, Stripe/PayPal/SSLCommerz checkout, and mobile shoppers.",
        "Visual product hierarchy focused on clear pricing, bundle upsells, and fast load times."
      ],
      tags: ["WooCommerce", "WordPress", "E-Commerce UX", "Cart Drawer"],
      liveUrl: demoUrl("velora-store.html"),
      link: demoUrl("velora-store.html"),
      ctaLabel: "Open Live Store ↗"
    },
    {
      id: "proj-id-portal",
      cat: "webapp",
      badge: "Live Cloud Web App",
      thumbClass: "thumb-id",
      thumbLabel: "LIVE APP • RENDER CLOUD",
      thumbTitle: "Student ID Card Portal",
      thumbTagline: "Real-time student ID card generator with instant live preview & 300DPI print export.",
      thumbStats: [["Live App", "Render Cloud"], ["Print PDF", "300DPI"], ["Real-Time", "Form Sync"]],
      title: "Automated Student ID Card Web Application",
      subtitle: "Department of Youth Development (DYD) • Deployed on Render",
      desc: "Independently built and deployed web application that turns student details into clean, print-ready identity cards in seconds.",
      bullets: [
        "Click Live Preview to test the instant interactive ID generator right here (zero wait while Render wakes up).",
        "Live production cloud deployment hosted at student-id-portal-1.onrender.com.",
        "Built with AI-assisted workflows, clean print stylesheets, and cross-device responsiveness."
      ],
      tags: ["Web Application", "Render Cloud", "AI-Assisted Dev", "Print Export"],
      liveUrl: demoUrl("student-id-preview.html"),
      link: "https://student-id-portal-1.onrender.com",
      ctaLabel: "Launch Cloud App ↗"
    },
    {
      id: "proj-pulse-seo",
      cat: "seo",
      badge: "Live Interactive Demo",
      thumbClass: "thumb-pulse",
      thumbLabel: "SEO & B2B LEAD ENGINE",
      thumbTitle: "PulseRank AI Dashboard",
      thumbTagline: "Interactive keyword difficulty, search-intent clustering & niche opportunity explorer.",
      thumbStats: [["3 Niches", "Switchable"], ["Intent Map", "Transactional"], ["B2B Leads", "Verified"]],
      title: "PulseRank AI — SEO & Lead Gen Explorer",
      subtitle: "Interactive Showcase • Keyword Audits & Prospect Ops",
      desc: "Client-facing reporting view demonstrating keyword intent mapping, low-difficulty quick wins, and structured B2B/B2C outreach deliverables.",
      bullets: [
        "Click Live Preview and switch client niches to inspect live keyword clusters and page recommendations.",
        "Reflects hands-on workflow across Ahrefs, SEMrush, Google Keyword Planner, GSC, and GA4.",
        "Designed to help business owners see exactly how SEO connects to website revenue."
      ],
      tags: ["SEMrush", "Ahrefs", "Rank Math", "GA4 & GSC", "B2B Lead Gen"],
      liveUrl: demoUrl("pulse-ai-seo.html"),
      link: demoUrl("pulse-ai-seo.html"),
      ctaLabel: "Open Live Tool ↗"
    },
    {
      id: "proj-brand-ops",
      cat: "brand",
      badge: "5+ Years Real Brand Ops",
      thumbClass: "thumb-brand",
      thumbLabel: "BRAND & DIGITAL MARKETING",
      thumbTitle: "M/S Munni Trading & Co.",
      thumbTagline: "End-to-end social media, commercial product visuals & regional lead campaigns.",
      thumbStats: [["May 2021", "Ongoing"], ["Full Visuals", "Photo & Video"], ["Lead Gen", "Meta Suite"]],
      title: "M/S Munni Trading & Co. / The Chanachur Factory",
      subtitle: "Ongoing Role • Brand Communication & Creative Production",
      desc: "Five-plus years directing digital brand presence, commercial photography/videography, promotional design, and digital outreach.",
      bullets: [
        "Manage ongoing social media presence, campaign calendars, and brand messaging (May 2021 – Present).",
        "Produce commercial product photography, short-form videos, and graphics in Photoshop, Illustrator & Canva.",
        "Support digital customer acquisition and consistent visual identity across channels."
      ],
      tags: ["Meta Business Suite", "Photoshop", "Illustrator", "Premiere Pro", "CapCut"],
      liveUrl: "",
      link: "https://www.linkedin.com/in/jayed-jaman-seen-b540b8334/",
      ctaLabel: "View LinkedIn ↗"
    }
  ];
  const PROJECTS_STORE_KEY = "jjs-studio-projects-v2";
  let PROJECTS_DATA = [...DEFAULT_PROJECTS];

  // ==================== 3. ESTIMATOR PRESETS ====================
  const ESTIMATOR_PRESETS = {
    "wp-business": {
      title: "WordPress Business / Portfolio Site",
      baseDays: 3,
      daysPerUnit: 0.45,
      items: [
        "WordPress installation, security hardening & speed caching",
        "Custom responsive pages crafted in Elementor / Gutenberg",
        "Mobile, tablet & desktop QA + contact / WhatsApp forms",
        "Clean handover guide so you can edit content effortlessly"
      ]
    },
    "woocommerce": {
      title: "WooCommerce Online Store",
      baseDays: 5,
      daysPerUnit: 0.55,
      items: [
        "Complete WooCommerce storefront & product catalog setup",
        "Custom product templates, cart UX & checkout flow",
        "Payment gateway, shipping zones & order notifications",
        "Mobile conversion & page-speed optimization"
      ]
    },
    "ai-webapp": {
      title: "AI-Assisted Web App / Custom Portal",
      baseDays: 5,
      daysPerUnit: 0.55,
      items: [
        "Custom interactive web portal architecture & clean UI",
        "AI-assisted workflow logic & dynamic data handling",
        "Responsive layout tested across modern browsers",
        "Cloud deployment (Render / GitHub Pages) & documentation"
      ]
    },
    "seo-leadgen": {
      title: "Keyword Research, SEO & B2B Lead Gen",
      baseDays: 2,
      daysPerUnit: 0.35,
      items: [
        "Profitable keyword research & search-intent mapping",
        "Competitor gap audit & actionable page-level roadmap",
        "On-page Rank Math SEO, Search Console & GA4 setup",
        "Verified B2B/B2C prospect list ready for outreach"
      ]
    }
  };

  let currentEstimatorService = "wp-business";
  let currentCvFormat = "visual";
  let competencyChartInstance = null;
  let activeProjectCategory = "all";
  let activeProjectTech = "";
  let projectLayout = "grid";
  let labProjectId = PROJECTS_DATA[0].id;
  let labDevice = "desktop";
  let labRotated = false;
  let labZoomed = false;

  // ==================== THEME & TOAST ====================
  function syncThemeToggle() {
    const isDark = document.documentElement.dataset.theme === "dark";
    const button = document.getElementById("theme-toggle");
    if (!button) return;
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    const label = document.getElementById("theme-toggle-label");
    if (label) label.textContent = isDark ? "Light mode" : "Dark mode";
    document.getElementById("theme-toggle-moon")?.classList.toggle("hidden", isDark);
    document.getElementById("theme-toggle-sun")?.classList.toggle("hidden", !isDark);
  }

  function setColorTheme(theme) {
    const nextTheme = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    try { localStorage.setItem("jjs-color-theme", nextTheme); } catch {}
    syncThemeToggle();
    updateCompetencyChartTheme();
  }

  function toggleColorTheme() {
    setColorTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  }

  function showToast(message) {
    const box = document.getElementById("toast-box");
    const txt = document.getElementById("toast-text");
    if (!box || !txt) return;
    txt.textContent = message;
    box.classList.add("flex");
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => box.classList.remove("flex"), 3000);
  }

  function copyTextToClipboard(text, toastMsg) {
    const fallback = () => {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch {}
      document.body.removeChild(ta);
      showToast(toastMsg || "Copied to clipboard.");
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => showToast(toastMsg || "Copied to clipboard.")).catch(fallback);
    } else {
      fallback();
    }
  }

  // ==================== NAVIGATION & RESUME DRAWER ====================
  function switchWorkspaceMode(mode, targetId) {
    const el = document.getElementById(targetId);
    if (!el) return;
    const navForTarget = {
      "hero-sec": "overview",
      "projects-sec": "projects",
      "packages-sec": "packages",
      "skills-sec": "skills",
      "estimator-sec": "estimator",
      "cv-studio-sec": "cv-studio"
    };
    document.querySelectorAll(".nav-pill").forEach(btn => {
      const active = btn.dataset.nav === navForTarget[targetId];
      btn.classList.toggle("is-active", active);
      if (active) btn.setAttribute("aria-current", "location");
      else btn.removeAttribute("aria-current");
    });
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function toggleResumeStudio(forceOpen) {
    const drawer = document.getElementById("cv-studio-drawer");
    const btn = document.getElementById("toggle-cv-studio-btn");
    if (!drawer) return;
    const willOpen = typeof forceOpen === "boolean" ? forceOpen : drawer.classList.contains("hidden");
    drawer.classList.toggle("hidden", !willOpen);
    if (btn) btn.textContent = willOpen ? "Hide Resume Studio" : "Open Resume Studio";
    if (willOpen) renderCvSheet();
  }

  function openResumeStudio() {
    toggleResumeStudio(true);
    switchWorkspaceMode("cv", "cv-studio-sec");
  }

  function JumpAndFilterSkill(cat) {
    filterSkills(cat);
    switchWorkspaceMode("portfolio", "skills-sec");
  }

  function selectPackageInEstimator(serviceKey, units) {
    selectEstimatorService(serviceKey);
    const slider = document.getElementById("scope-slider");
    if (slider) {
      slider.value = String(units);
      updateEstimator();
    }
    switchWorkspaceMode("portfolio", "estimator-sec");
    showToast("Package loaded into Scope Estimator.");
  }

  // ==================== CAPABILITIES & RADAR ====================
  function filterSkills(category) {
    document.querySelectorAll(".skill-tab-btn").forEach(btn => {
      btn.classList.toggle("is-active", btn.getAttribute("data-skill-cat") === category);
    });
    const list = category === "all" ? SKILLS_DATA : SKILLS_DATA.filter(s => s.cat === category);
    const container = document.getElementById("skills-grid-container");
    if (container) {
      container.innerHTML = list.map(item => `
        <article class="studio-card skill-card">
          <div>
            <div class="skill-card-head">
              <span class="skill-pillar">${safeText(item.pillar)}</span>
              <span class="skill-tier">${safeText(item.tier)}</span>
            </div>
            <h3 class="skill-title">${safeText(item.title)}</h3>
            <p class="skill-desc">${safeText(item.desc)}</p>
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${item.tags.map(t => `<span class="proj-tag">${safeText(t)}</span>`).join("")}
          </div>
        </article>
      `).join("");
    }
    const banner = document.getElementById("active-pillar-Banner");
    if (banner) {
      const names = {
        all: "Cross-disciplinary toolkit spanning WordPress, WooCommerce, AI-assisted workflows, SEO & creative production.",
        wordpress: "WordPress & WooCommerce: Elementor, Gutenberg, child themes, CPT/ACF, speed tuning & online stores.",
        ai: "AI Workflows: BCC-certified prompt engineering, rapid layout prototyping & structured brand copy.",
        seo: "SEO & Leads: Keyword research (Ahrefs/SEMrush), Rank Math on-page SEO, GA4/GSC & verified B2B prospect lists.",
        marketing: "Brand & Media: 5+ years managing social channels, product visuals, Photoshop, Illustrator & Premiere Pro.",
        tools: "IT & Ops: Excel reporting (PivotTables/VLOOKUP), Google Workspace & dependable technical troubleshooting."
      };
      banner.textContent = names[category] || names.all;
    }
  }

  function initCompetencyChart() {
    const canvas = document.getElementById("competencyChart");
    if (!canvas || typeof Chart === "undefined") return;
    const ctx = canvas.getContext("2d");
    if (competencyChartInstance) competencyChartInstance.destroy();
    competencyChartInstance = new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["WordPress & Woo", "Elementor UI", "AI Workflows", "SEO & Keywords", "Lead Generation", "Brand & Visuals"],
        datasets: [{
          label: "Focus Balance",
          data: [92, 90, 88, 86, 84, 85],
          backgroundColor: "rgba(30, 64, 175, 0.14)",
          borderColor: "#1e40af",
          pointBackgroundColor: "#475569",
          pointBorderColor: "#ffffff",
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            min: 50,
            max: 100,
            ticks: { display: false, stepSize: 15 },
            grid: { color: "rgba(19, 26, 28, 0.1)" },
            angleLines: { color: "rgba(19, 26, 28, 0.1)" },
            pointLabels: { color: "#38464c", font: { family: "Manrope", size: 11, weight: "600" } }
          }
        },
        plugins: { legend: { display: false } }
      }
    });
    updateCompetencyChartTheme();
  }

  function updateCompetencyChartTheme() {
    if (!competencyChartInstance) return;
    const isDark = document.documentElement.dataset.theme === "dark";
    const r = competencyChartInstance.options.scales.r;
    competencyChartInstance.data.datasets[0].backgroundColor = isDark ? "rgba(148,163,184,0.2)" : "rgba(30,64,175,0.14)";
    competencyChartInstance.data.datasets[0].borderColor = isDark ? "#e2e8f0" : "#1e40af";
    competencyChartInstance.data.datasets[0].pointBackgroundColor = isDark ? "#60a5fa" : "#475569";
    r.grid.color = isDark ? "rgba(244,242,250,0.12)" : "rgba(23,20,34,0.1)";
    r.angleLines.color = isDark ? "rgba(244,242,250,0.12)" : "rgba(23,20,34,0.1)";
    r.pointLabels.color = isDark ? "#d2cce2" : "#3c3750";
    competencyChartInstance.update("none");
  }

  // ==================== PROJECTS & INTERACTIVE LIVE SANDBOX ====================
  function projectPreviewMarkup(p) {
    if (p.screenshotUrl) {
      return `<img class="thumb-canvas thumb-shot" src="${safeText(p.screenshotUrl)}" alt="${safeText(p.title)} full-page preview" loading="lazy" style="padding:0;min-height:auto;height:auto;display:block;object-fit:cover;">`;
    }
    return `
      <div class="thumb-canvas ${safeText(p.thumbClass || "thumb-apex")}">
        <div class="thumb-top">
          <span>${safeText(p.thumbLabel || p.badge)}</span>
          <span class="thumb-pill">${p.liveUrl ? "Hover to Glide • Live Ready" : "Hover to Glide"}</span>
        </div>
        <div class="thumb-hero-mini">
          <h4>${safeText(p.thumbTitle || p.title)}</h4>
          <p>${safeText(p.thumbTagline || p.desc)}</p>
          <div class="thumb-metrics">
            ${(p.thumbStats || [["Responsive","Tested"],["SEO Ready","Clean Code"],["Fast UI","Modern"]]).map(([v, l]) => `<div class="thumb-metric"><strong>${safeText(v)}</strong><span>${safeText(l)}</span></div>`).join("")}
          </div>
        </div>
        <div class="thumb-section-strip">
          <div class="thumb-mini-card">
            <strong>Responsive Architecture</strong>
            <span>Tested across 390px phone, tablet &amp; desktop screens.</span>
          </div>
          <div class="thumb-mini-card">
            <strong>Key Deliverables</strong>
            <span>${safeText((p.tags || []).slice(0, 3).join(" · "))}</span>
          </div>
        </div>
        <div class="thumb-footer-cta">
          <span>${safeText(p.subtitle || "")}</span>
          <span>${p.liveUrl ? "Click Live Preview ↗" : "Case Study ↗"}</span>
        </div>
      </div>
    `;
  }

  function renderProjectTechFilters() {
    const tags = [...new Set(PROJECTS_DATA.flatMap(p => p.tags))].slice(0, 12);
    const container = document.getElementById("project-tech-filter");
    if (!container) return;
    container.innerHTML = `<button type="button" data-project-tech="" class="${activeProjectTech ? "" : "active"}">All tools</button>` +
      tags.map(tag => `<button type="button" data-project-tech="${safeText(tag)}" class="${activeProjectTech === tag ? "active" : ""}">${safeText(tag)}</button>`).join("");
    container.querySelectorAll("[data-project-tech]").forEach(btn => btn.addEventListener("click", () => {
      activeProjectTech = btn.dataset.projectTech;
      renderProjectTechFilters();
      renderProjectCards();
    }));
  }

  function renderProjectCards() {
    const container = document.getElementById("projects-grid-container");
    if (!container) return;
    const query = (document.getElementById("project-search")?.value || "").trim().toLowerCase();
    const matches = PROJECTS_DATA.filter(p => {
      const catOk = activeProjectCategory === "all" || p.cat === activeProjectCategory;
      const techOk = !activeProjectTech || p.tags.includes(activeProjectTech);
      const qOk = !query || [p.title, p.subtitle, p.desc, p.badge, ...p.tags].join(" ").toLowerCase().includes(query);
      return catOk && techOk && qOk;
    });

    container.classList.toggle("project-cinema", projectLayout === "cinema");
    const count = document.getElementById("project-results-count");
    if (count) count.textContent = `${matches.length} project${matches.length === 1 ? "" : "s"}`;

    document.querySelectorAll(".proj-tab-btn").forEach(btn => {
      const cat = btn.dataset.projCat;
      const total = cat === "all" ? PROJECTS_DATA.length : PROJECTS_DATA.filter(p => p.cat === cat).length;
      const labels = { all: "All Work", wordpress: "WordPress & Woo", webapp: "Web Apps", seo: "SEO & Leads", brand: "Brand Ops" };
      btn.textContent = `${labels[cat] || cat} (${total})`;
      btn.classList.toggle("is-active", cat === activeProjectCategory);
    });

    container.innerHTML = matches.length ? matches.map(p => {
      const hasLive = Boolean(p.liveUrl);
      const addressLabel = hasLive
        ? (p.id === "proj-id-portal" ? "student-id-portal-1.onrender.com (instant preview)" : p.liveUrl.replace(/^\.?\//, ""))
        : "Case Study • " + p.thumbTitle;
      return `
        <article class="studio-card project-card" data-project-card="${p.id}">
          <div class="project-shell">
            <div class="project-browserbar">
              <span class="browser-lights"><span style="background:#f87171"></span><span style="background:#fbbf24"></span><span style="background:#34d399"></span></span>
              <span class="browser-address">${safeText(addressLabel)}</span>
              <button class="browser-action" type="button" data-project-action="reset" data-id="${p.id}" title="Reset preview">↻</button>
              <button class="browser-action" type="button" data-project-action="lab" data-id="${p.id}">Expand ↗</button>
            </div>
            <div class="project-viewport" data-project-viewport="${p.id}">
              ${projectPreviewMarkup(p)}
            </div>
            <div class="project-controls">
              <div class="flex gap-1.5">
                <button class="browser-action active" type="button" data-device="desktop" data-id="${p.id}">Desktop</button>
                <button class="browser-action" type="button" data-device="tablet" data-id="${p.id}">Tablet</button>
                <button class="browser-action" type="button" data-device="mobile" data-id="${p.id}">Mobile</button>
              </div>
              <div class="flex gap-1.5">
                <button class="browser-action active" type="button" data-preview-mode="overview" data-id="${p.id}">Overview</button>
                ${hasLive ? `<button class="browser-action" type="button" data-preview-mode="live" data-id="${p.id}">Live Preview</button>` : ""}
              </div>
            </div>
          </div>

          <div class="space-y-2">
            <span class="proj-meta-badge">${safeText(p.badge)}</span>
            <h3 class="proj-title">${safeText(p.title)}</h3>
            <p class="proj-sub">${safeText(p.subtitle)}</p>
            <p class="proj-desc">${safeText(p.desc)}</p>
          </div>

          <div>
            <div class="proj-tags">
              ${p.tags.map(t => `<span class="proj-tag">${safeText(t)}</span>`).join("")}
            </div>
            <div class="project-meta-actions">
              <button type="button" onclick="openProjectModal('${p.id}')" class="proj-btn-secondary">Case Study</button>
              <a href="${safeText(p.link)}" target="_blank" rel="noopener noreferrer" class="proj-btn-primary">${safeText(p.ctaLabel || "Open ↗")}</a>
            </div>
          </div>
        </article>
      `;
    }).join("") : `<div class="studio-card p-10 text-center text-sm col-span-full" style="color:var(--muted)">No matching projects found. Clear your filter or try another keyword.</div>`;

    bindProjectCards(container);
  }

  function scaleProjectFrame(frame, viewport) {
    const deviceWidth = viewport.classList.contains("device-mobile") ? 390 : viewport.classList.contains("device-tablet") ? 768 : 1180;
    const scale = Math.min(1, viewport.clientWidth / deviceWidth);
    frame.style.width = `${deviceWidth}px`;
    frame.style.transform = `scale(${scale})`;
    frame.style.height = `${Math.ceil(viewport.clientHeight / scale)}px`;
  }

  function bindProjectCards(container) {
    container.querySelectorAll("[data-project-viewport]").forEach(vp => {
      vp.addEventListener("mouseenter", () => {
        const canvas = vp.querySelector(".thumb-canvas");
        if (!canvas) return;
        window.clearTimeout(vp.springTimer);
        vp.classList.remove("is-returning");
        const distance = Math.max(0, canvas.scrollHeight - vp.clientHeight);
        vp.style.setProperty("--spring-destination", `${-distance}px`);
        vp.classList.add("is-gliding");
      });
      vp.addEventListener("mouseleave", () => {
        if (!vp.querySelector(".thumb-canvas")) return;
        vp.classList.remove("is-gliding");
        vp.classList.add("is-returning");
        window.clearTimeout(vp.springTimer);
        vp.springTimer = window.setTimeout(() => vp.classList.remove("is-returning"), 860);
      });
    });

    container.querySelectorAll("[data-project-action]").forEach(btn => btn.addEventListener("click", () => {
      const p = PROJECTS_DATA.find(x => x.id === btn.dataset.id);
      if (!p) return;
      if (btn.dataset.projectAction === "lab") {
        openDeviceLab(p.id);
      } else if (btn.dataset.projectAction === "reset") {
        const vp = container.querySelector(`[data-project-viewport="${p.id}"]`);
        vp.innerHTML = projectPreviewMarkup(p);
        vp.classList.remove("device-mobile", "device-tablet");
        container.querySelectorAll(`[data-preview-mode][data-id="${p.id}"]`).forEach(x => x.classList.toggle("active", x.dataset.previewMode === "overview"));
        container.querySelectorAll(`[data-device][data-id="${p.id}"]`).forEach(x => x.classList.toggle("active", x.dataset.device === "desktop"));
      }
    }));

    container.querySelectorAll("[data-device]").forEach(btn => btn.addEventListener("click", () => {
      const vp = container.querySelector(`[data-project-viewport="${btn.dataset.id}"]`);
      vp.classList.remove("device-mobile", "device-tablet");
      if (btn.dataset.device !== "desktop") vp.classList.add(`device-${btn.dataset.device}`);
      container.querySelectorAll(`[data-device][data-id="${btn.dataset.id}"]`).forEach(x => x.classList.toggle("active", x === btn));
      const frame = vp.querySelector("iframe");
      if (frame) scaleProjectFrame(frame, vp);
    }));

    container.querySelectorAll("[data-preview-mode]").forEach(btn => btn.addEventListener("click", () => {
      const p = PROJECTS_DATA.find(x => x.id === btn.dataset.id);
      const vp = container.querySelector(`[data-project-viewport="${p.id}"]`);
      container.querySelectorAll(`[data-preview-mode][data-id="${p.id}"]`).forEach(x => x.classList.toggle("active", x === btn));
      if (btn.dataset.previewMode === "overview") {
        vp.innerHTML = projectPreviewMarkup(p);
        return;
      }
      if (!p.liveUrl) return;
      vp.innerHTML = `
        <iframe class="project-live-frame" title="${safeText(p.title)} interactive preview" src="${safeText(p.liveUrl)}"></iframe>
        <div class="project-shield"><button type="button">Click to interact with live demo</button></div>
      `;
      const frame = vp.querySelector("iframe");
      frame.style.pointerEvents = "none";
      frame.addEventListener("load", () => scaleProjectFrame(frame, vp), { once: true });
      vp.querySelector(".project-shield button").addEventListener("click", ev => {
        ev.currentTarget.parentElement.classList.add("is-unlocked");
        frame.style.pointerEvents = "auto";
      });
      setTimeout(() => scaleProjectFrame(frame, vp), 80);
    }));
  }

  function filterProjects(cat) {
    activeProjectCategory = cat;
    renderProjectCards();
  }

  function openDeviceLab(projectId) {
    labProjectId = projectId;
    labDevice = "desktop";
    labRotated = false;
    labZoomed = false;
    const sel = document.getElementById("lab-project-select");
    if (sel) {
      sel.innerHTML = PROJECTS_DATA.map(p => `<option value="${safeText(p.id)}">${safeText(p.title)}</option>`).join("");
      sel.value = projectId;
    }
    document.getElementById("device-lab")?.classList.add("open");
    renderDeviceLab();
  }

  function renderDeviceLab() {
    const p = PROJECTS_DATA.find(x => x.id === labProjectId) || PROJECTS_DATA[0];
    const vp = document.getElementById("device-lab-viewport");
    if (!vp) return;
    const dims = { desktop: [1220, 760], tablet: [768, 960], mobile: [390, 800] };
    let [w, h] = dims[labDevice];
    if (labRotated && labDevice !== "desktop") [w, h] = [h, w];
    const zoom = labZoomed ? 0.78 : 1;
    vp.style.width = `min(${Math.round(w * zoom)}px, 92vw)`;
    vp.style.height = `min(${Math.round(h * zoom)}px, 76vh)`;
    const openLink = document.getElementById("lab-open-link");
    if (openLink) openLink.href = p.liveUrl || p.link;
    if (p.liveUrl) {
      vp.innerHTML = `<iframe title="${safeText(p.title)} device lab" src="${safeText(p.liveUrl)}" style="width:${w}px;height:${h}px;transform:scale(${zoom})"></iframe>`;
    } else {
      vp.innerHTML = `<div style="width:100%;height:100%">${projectPreviewMarkup(p)}</div>`;
    }
    document.querySelectorAll("[data-lab-size]").forEach(b => b.classList.toggle("active", b.dataset.labSize === labDevice));
    const zBtn = document.getElementById("lab-zoom");
    if (zBtn) zBtn.textContent = `Zoom ${labZoomed ? "78%" : "100%"}`;
  }

  function openProjectModal(projId) {
    const p = PROJECTS_DATA.find(x => x.id === projId);
    if (!p) return;
    document.getElementById("modal-proj-badge").textContent = p.badge;
    document.getElementById("modal-proj-title").textContent = p.title;
    document.getElementById("modal-proj-desc").textContent = p.desc;
    document.getElementById("modal-proj-bullets").innerHTML = p.bullets.map(b => `<li>${safeText(b)}</li>`).join("");
    document.getElementById("modal-proj-tags").innerHTML = p.tags.map(t => `<span class="proj-tag">${safeText(t)}</span>`).join("");
    const link = document.getElementById("modal-proj-link");
    link.href = p.link;
    link.textContent = p.ctaLabel || "Open Live Preview ↗";
    document.getElementById("project-modal").classList.add("flex");
  }

  function closeProjectModal() {
    document.getElementById("project-modal")?.classList.remove("flex");
  }

  // ==================== SCOPE ESTIMATOR ====================
  function selectEstimatorService(srvKey) {
    currentEstimatorService = srvKey;
    document.querySelectorAll(".est-srv-btn").forEach(btn => {
      btn.classList.toggle("is-selected", btn.getAttribute("data-service") === srvKey);
    });
    updateEstimator();
  }

  function updateEstimator() {
    const preset = ESTIMATOR_PRESETS[currentEstimatorService];
    const units = parseInt(document.getElementById("scope-slider")?.value || "5", 10);
    const label = document.getElementById("scope-slider-label");
    if (label) label.textContent = `${units} ${units === 1 ? "Unit / Page" : "Units / Pages"}`;

    let totalDays = preset.baseDays + units * preset.daysPerUnit;
    const deliverables = [...preset.items];

    if (document.getElementById("addon-seo")?.checked) {
      totalDays += 1.5;
      deliverables.push("Keyword Research + On-Page SEO (Rank Math, GSC & GA4)");
    }
    if (document.getElementById("addon-leads")?.checked) {
      totalDays += 1.5;
      deliverables.push("Targeted B2B/B2C Prospect & Lead List");
    }
    if (document.getElementById("addon-ai")?.checked) {
      totalDays += 1;
      deliverables.push("AI-Assisted Copy Architecture & Brand Visuals");
    }
    if (document.getElementById("addon-multi")?.checked) {
      totalDays += 2;
      deliverables.push("Multilingual or Membership Module (CPT & ACF)");
    }

    const minD = Math.max(2, Math.floor(totalDays));
    const maxD = Math.ceil(totalDays) + 2;
    document.getElementById("est-summary-title").textContent = preset.title;
    document.getElementById("est-days-badge").textContent = `${minD}–${maxD} Days`;
    document.getElementById("est-deliverables-list").innerHTML = deliverables.map(item => `<li>✓ ${safeText(item)}</li>`).join("");
  }

  function getEstimatorBriefText() {
    const preset = ESTIMATOR_PRESETS[currentEstimatorService];
    const units = document.getElementById("scope-slider")?.value || "5";
    const days = document.getElementById("est-days-badge")?.textContent || "";
    const addons = [];
    if (document.getElementById("addon-seo")?.checked) addons.push("Keyword Research & Rank Math SEO");
    if (document.getElementById("addon-leads")?.checked) addons.push("Targeted B2B/B2C Lead List");
    if (document.getElementById("addon-ai")?.checked) addons.push("AI Copy & Visual Assets");
    if (document.getElementById("addon-multi")?.checked) addons.push("Multilingual / Membership (CPT & ACF)");
    return `Hi Jayed, I configured a project brief on your portfolio:\n- Service: ${preset.title}\n- Scale: ${units} Units / Pages\n- Add-ons: ${addons.length ? addons.join(", ") : "Standard scope"}\n- Target Window: ${days}\nLet's discuss details and next steps!`;
  }

  function sendEstimatorViaWhatsApp() {
    window.open(`https://wa.me/8801307758119?text=${encodeURIComponent(getEstimatorBriefText())}`, "_blank", "noopener,noreferrer");
  }

  function sendEstimatorViaEmail() {
    const preset = ESTIMATOR_PRESETS[currentEstimatorService];
    window.location.href = `mailto:thunderseen@gmail.com?subject=${encodeURIComponent("Project Inquiry: " + preset.title)}&body=${encodeURIComponent(getEstimatorBriefText())}`;
  }

  function copyEstimatorBrief() {
    copyTextToClipboard(getEstimatorBriefText(), "Project brief copied — paste directly into Fiverr or chat!");
  }

  // ==================== DUAL-CV STUDIO (UPDATED TO IELTS BAND 6.5!) ====================
  function setCvFormat(fmt) {
    currentCvFormat = fmt;
    document.getElementById("btn-cv-visual")?.classList.toggle("is-active", fmt === "visual");
    document.getElementById("btn-cv-ats")?.classList.toggle("is-active", fmt === "ats");
    renderCvSheet();
    const q = document.getElementById("cv-keyword-input")?.value || "";
    if (q.trim()) highlightCvKeywords(q);
  }

  function renderCvSheet() {
    const sheet = document.getElementById("print-cv-sheet");
    if (!sheet) return;
    if (currentCvFormat === "visual") {
      sheet.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-12 min-h-[760px] text-slate-800">
          <aside class="md:col-span-4 bg-[#0f172a] text-white p-6 space-y-5">
            <div class="flex flex-col items-center text-center">
              <div class="w-28 h-32 rounded-xl overflow-hidden border-2 border-[#cbd5e1] shadow-md mb-3">
                <img src="${currentAvatarUrl}" alt="Jayed Jaman Seen" class="w-full h-full object-cover">
              </div>
              <h3 class="font-bold text-lg tracking-wide text-white">JAYED JAMAN SEEN</h3>
              <p class="text-[11px] uppercase tracking-wider text-[#93c5fd] mt-1 font-semibold">WordPress Web Development &amp; AI Tools Specialist</p>
            </div>
            <div class="border-t border-white/15 pt-4 space-y-1.5 text-xs text-slate-200">
              <div class="text-[11px] font-bold uppercase tracking-widest text-[#cbd5e1] mb-2">Contact</div>
              <div>Barishal, Bangladesh</div>
              <div>+880 1307-758119</div>
              <div class="break-all">thunderseen@gmail.com</div>
              <div class="break-all">fiverr.com/jayedjaman_seen</div>
              <div class="break-all">linkedin.com/in/jayed-jaman-seen-b540b8334</div>
              <div class="break-all">github.com/JJSEEN</div>
            </div>
            <div class="border-t border-white/15 pt-4 space-y-2.5 text-[11px] text-slate-200">
              <div class="text-[11px] font-bold uppercase tracking-widest text-[#cbd5e1]">Core Skills</div>
              <div><strong class="text-white">WordPress:</strong> Elementor, Gutenberg, Child Themes, CPT, ACF, WooCommerce, Speed &amp; Security.</div>
              <div><strong class="text-white">AI &amp; Automation:</strong> Prompt Engineering, ChatGPT, Claude, Gemini, GitHub Copilot.</div>
              <div><strong class="text-white">SEO &amp; Leads:</strong> Keyword Planner, Ahrefs, SEMrush, Rank Math, GSC, GA4, B2B/B2C Leads.</div>
              <div><strong class="text-white">Design &amp; Media:</strong> Photoshop, Illustrator, Canva, Premiere Pro, CapCut.</div>
            </div>
            <div class="border-t border-white/15 pt-4 space-y-1.5 text-[11px] text-slate-200">
              <div class="text-[11px] font-bold uppercase tracking-widest text-[#cbd5e1]">Languages</div>
              <div><strong class="text-white">Bengali:</strong> Native</div>
              <div><strong class="text-white">English:</strong> IELTS Band 6.5 (CEFR B2) • DET 90/160</div>
            </div>
          </aside>

          <div class="md:col-span-8 p-6 sm:p-8 space-y-5 bg-white text-slate-800">
            <div>
              <h4 class="text-xs font-extrabold uppercase tracking-widest text-[#0e625b] border-b-2 border-[#0e625b] pb-1 mb-2">Professional Summary</h4>
              <p class="text-xs leading-relaxed text-slate-700">
                Computer Science &amp; Engineering undergraduate and WordPress web developer combining Elementor, Gutenberg, and WooCommerce builds with AI-assisted workflows, technical SEO, and B2B/B2C lead generation. BCC-certified in Artificial Intelligence for Professionals, currently completing the 600-hour DYD Freelancing &amp; ICT program (8th Batch — elected First-Month Class Representative), with 5+ years of brand and digital marketing operations.
              </p>
            </div>
            <div>
              <h4 class="text-xs font-extrabold uppercase tracking-widest text-[#0e625b] border-b-2 border-[#0e625b] pb-1 mb-2">Experience &amp; Projects</h4>
              <div class="space-y-3 text-xs">
                <div>
                  <div class="flex justify-between font-bold text-slate-900"><span>WordPress Web Developer &amp; AI Tools Specialist — Freelance / Fiverr</span><span class="text-[#0e625b]">2025 – Present</span></div>
                  <ul class="list-disc list-inside text-slate-700 mt-1 space-y-0.5">
                    <li>Build responsive WordPress &amp; WooCommerce sites using Elementor, Gutenberg, child themes, CPT, and ACF.</li>
                    <li>Execute keyword research, competitor audits, Rank Math SEO, and B2B/B2C lead generation.</li>
                    <li>Built and deployed the live Student ID Card web application on Render (student-id-portal-1.onrender.com).</li>
                  </ul>
                </div>
                <div>
                  <div class="flex justify-between font-bold text-slate-900"><span>Social Media &amp; Digital Marketing Specialist — M/S Munni Trading &amp; Co.</span><span class="text-[#0e625b]">May 2021 – Present</span></div>
                  <ul class="list-disc list-inside text-slate-700 mt-1 space-y-0.5">
                    <li>Direct social media presence, content calendars, product photography/videography, and promotional graphics.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 class="text-xs font-extrabold uppercase tracking-widest text-[#0e625b] border-b-2 border-[#0e625b] pb-1 mb-2">Education &amp; Certifications</h4>
              <div class="space-y-2 text-xs text-slate-700">
                <div class="flex justify-between"><span><strong>B.Sc. in Computer Science &amp; Engineering</strong> — Trust University, Barishal</span><span class="font-semibold text-[#0e625b]">In Progress</span></div>
                <div class="flex justify-between"><span><strong>HSC (Science)</strong> — Govt. Syed Hatem Ali College, Barishal</span><span>2020 | GPA 5.00/5.00</span></div>
                <div class="flex justify-between"><span><strong>SSC (Science)</strong> — Shahid Abdur Rab Serniyabad Govt. School</span><span>2018 | GPA 4.61/5.00</span></div>
                <div class="pt-1"><strong>Artificial Intelligence for Professionals</strong> — Bangladesh Computer Council (BCC), Barishal (2026, Completed)</div>
                <div><strong>Freelancing &amp; ICT Skills Development (600 Hours, 8th Batch)</strong> — DYD, Barishal (Oct – Dec 2026, In Progress) • Elected First-Month Class Representative</div>
              </div>
            </div>
            <div>
              <h4 class="text-xs font-extrabold uppercase tracking-widest text-[#0e625b] border-b-2 border-[#0e625b] pb-1 mb-2">Leadership &amp; English Proficiency</h4>
              <ul class="list-disc list-inside text-xs text-slate-700 space-y-0.5">
                <li><strong>English Proficiency:</strong> IELTS Academic Band 6.5 (CEFR B2); Duolingo English Test 90/160.</li>
                <li><strong>Leadership:</strong> First-Month Class Representative (DYD 8th Batch); Best Volunteer Award (Lal Sabuj Society, 2019); National Archery Competitor (U-16, 2016); Elected School Student Cabinet Member.</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    } else {
      sheet.innerHTML = `
        <div class="p-8 sm:p-10 bg-white text-slate-900 space-y-5 font-sans text-xs leading-relaxed">
          <div class="text-center border-b-2 border-slate-900 pb-4">
            <h3 class="text-2xl font-extrabold tracking-wide text-slate-950">JAYED JAMAN SEEN</h3>
            <p class="text-sm font-bold text-[#0e625b] mt-1">WordPress Web Development &amp; AI Tools Specialist</p>
            <p class="text-slate-600 mt-1">Barishal, Bangladesh | +880 1307-758119 | thunderseen@gmail.com</p>
            <p class="text-slate-600">Fiverr: fiverr.com/jayedjaman_seen | LinkedIn: linkedin.com/in/jayed-jaman-seen-b540b8334 | GitHub: github.com/JJSEEN</p>
          </div>
          <div>
            <h4 class="text-xs font-extrabold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">PROFESSIONAL SUMMARY</h4>
            <p>Computer Science &amp; Engineering undergraduate and WordPress web developer combining Elementor, Gutenberg, and WooCommerce builds with AI-assisted workflows, technical SEO, and B2B/B2C lead generation. BCC-certified in Artificial Intelligence for Professionals and currently completing the 600-hour DYD Freelancing &amp; ICT program (8th Batch — First-Month Class Representative), backed by 5+ years of digital marketing and brand operations.</p>
          </div>
          <div>
            <h4 class="text-xs font-extrabold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">TECHNICAL SKILLS</h4>
            <p><strong>WordPress &amp; WooCommerce:</strong> Installation, Elementor, Gutenberg, Child Themes, CPT, ACF, WooCommerce, Speed &amp; Security.<br>
            <strong>AI Tools:</strong> Prompt Engineering, ChatGPT, Claude, Google Gemini, OpenAI Codex, GitHub Copilot.<br>
            <strong>SEO &amp; Lead Generation:</strong> Keyword Planner, Ahrefs, SEMrush, Ubersuggest, Rank Math, GSC, GA4, B2B/B2C Outreach.<br>
            <strong>Design &amp; Productivity:</strong> Photoshop, Illustrator, Canva, Premiere Pro, CapCut, Excel (PivotTables, VLOOKUP), Google Workspace.</p>
          </div>
          <div>
            <h4 class="text-xs font-extrabold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">EXPERIENCE &amp; PROJECTS</h4>
            <p><strong>WordPress Web Developer &amp; AI Tools Specialist (Freelance / Fiverr)</strong> — 2025 – Present<br>
            • Build responsive WordPress &amp; WooCommerce sites with Elementor, Gutenberg, child themes, and Rank Math SEO.<br>
            • Built and deployed the live Student ID Card web application on Render (student-id-portal-1.onrender.com).</p>
            <p class="mt-2"><strong>Social Media &amp; Digital Marketing Specialist — M/S Munni Trading &amp; Co.</strong> — May 2021 – Present<br>
            • Manage social media strategy, content calendars, commercial product photography/videography, and promotional graphics.</p>
          </div>
          <div>
            <h4 class="text-xs font-extrabold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">EDUCATION &amp; CERTIFICATIONS</h4>
            <p>• B.Sc. in Computer Science and Engineering — Trust University, Barishal (In Progress)<br>
            • HSC (Science) — Govt. Syed Hatem Ali College, Barishal (2020 | GPA 5.00/5.00)<br>
            • SSC (Science) — Shahid Abdur Rab Serniyabad Govt. Secondary School (2018 | GPA 4.61/5.00)<br>
            • Artificial Intelligence for Professionals — Bangladesh Computer Council (BCC), Barishal (2026 | Completed)<br>
            • Freelancing &amp; ICT Skills Development (600 Hours, 8th Batch) — DYD, Barishal (Oct – Dec 2026 | In Progress; Elected First-Month CR)</p>
          </div>
          <div>
            <h4 class="text-xs font-extrabold uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">LANGUAGES &amp; HONORS</h4>
            <p>• English Proficiency: IELTS Academic Band 6.5 (CEFR B2); Duolingo English Test 90/160. Bengali: Native.<br>
            • Best Volunteer Award (Lal Sabuj Society, 2019); National Archery Competitor (U-16, 2016); School Student Cabinet Member.</p>
          </div>
        </div>
      `;
    }
  }

  function quickHighlight(term) {
    const input = document.getElementById("cv-keyword-input");
    if (input) input.value = term;
    highlightCvKeywords(term);
  }

  function highlightCvKeywords(query) {
    renderCvSheet();
    const term = (query || "").trim();
    if (!term) return;
    const sheet = document.getElementById("print-cv-sheet");
    if (!sheet) return;
    const safe = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${safe})`, "gi");
    const walker = document.createTreeWalker(sheet, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (node.parentNode && !["SCRIPT", "STYLE", "MARK"].includes(node.parentNode.tagName) && regex.test(node.nodeValue)) {
        const span = document.createElement("span");
        span.innerHTML = node.nodeValue.replace(regex, `<mark class="cv-hl">$1</mark>`);
        node.parentNode.replaceChild(span, node);
      }
    });
  }

  function copyFullAtsText() {
    const atsPlain = `JAYED JAMAN SEEN
WordPress Web Development & AI Tools Specialist
Barishal, Bangladesh | +880 1307-758119 | thunderseen@gmail.com
Fiverr: https://www.fiverr.com/jayedjaman_seen?public_mode=true
LinkedIn: https://www.linkedin.com/in/jayed-jaman-seen-b540b8334/
GitHub: https://github.com/JJSEEN

PROFESSIONAL SUMMARY
Computer Science & Engineering undergraduate and WordPress web developer combining Elementor, Gutenberg, and WooCommerce builds with AI-assisted workflows, technical SEO, and B2B/B2C lead generation. BCC-certified in Artificial Intelligence for Professionals and completing the 600-hour DYD Freelancing & ICT program (8th Batch — First-Month Class Representative).

EXPERIENCE
- WordPress Web Developer & AI Tools Specialist (Freelance / Fiverr, 2025 – Present)
- Social Media & Digital Marketing Specialist (M/S Munni Trading & Co., May 2021 – Present)

EDUCATION & CERTIFICATIONS
- B.Sc. in Computer Science and Engineering — Trust University, Barishal (In Progress)
- HSC (Science) — Govt. Syed Hatem Ali College, Barishal (2020 | GPA 5.00/5.00)
- SSC (Science) — Shahid Abdur Rab Serniyabad Govt. Secondary School (2018 | GPA 4.61/5.00)
- Artificial Intelligence for Professionals — Bangladesh Computer Council (BCC), Barishal (2026 | Completed)
- Freelancing & ICT Skills Development (600 Hours, 8th Batch) — DYD, Barishal (Oct – Dec 2026 | In Progress)

LANGUAGES
- English: IELTS Academic Band 6.5 (CEFR B2); Duolingo English Test 90/160. Bengali: Native.`;
    copyTextToClipboard(atsPlain, "Plain-text ATS resume (IELTS 6.5) copied!");
  }

  // ==================== COMMAND PALETTE & CONTACT MODAL ====================
  const COMMAND_ACTIONS = [
    { label: "Order / View Profile on Fiverr", tag: "Fiverr", run: () => window.open("https://www.fiverr.com/jayedjaman_seen?public_mode=true", "_blank", "noopener,noreferrer") },
    { label: "Explore Interactive Live Demos", tag: "Work", run: () => switchWorkspaceMode("portfolio", "projects-sec") },
    { label: "View Service Packages", tag: "Packages", run: () => switchWorkspaceMode("portfolio", "packages-sec") },
    { label: "Open Project Scope Estimator", tag: "Estimate", run: () => switchWorkspaceMode("portfolio", "estimator-sec") },
    { label: "Open Interactive Resume (Visual + ATS)", tag: "CV", run: () => openResumeStudio() },
    { label: "Start a Project / Contact Jayed", tag: "Contact", run: () => openContactModal() },
    { label: "Copy Email (thunderseen@gmail.com)", tag: "Copy", run: () => copyTextToClipboard("thunderseen@gmail.com", "Email copied!") },
    { label: "Toggle Light / Dark Mode", tag: "Theme", run: () => toggleColorTheme() }
  ];

  function openCommandPalette() {
    const modal = document.getElementById("cmd-modal");
    if (!modal) return;
    modal.classList.add("flex");
    const input = document.getElementById("cmd-search-input");
    if (input) { input.value = ""; input.focus(); }
    renderCommandList("");
  }

  function closeCommandPalette() {
    document.getElementById("cmd-modal")?.classList.remove("flex");
  }

  function renderCommandList(query) {
    const q = (query || "").toLowerCase().trim();
    const list = COMMAND_ACTIONS.filter(c => c.label.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q));
    const el = document.getElementById("cmd-list-container");
    if (!el) return;
    el.innerHTML = list.map((c, idx) => `
      <button type="button" onclick="runCommandIndex(${idx})" class="cmd-row">
        <span>${safeText(c.label)}</span>
        <small>${safeText(c.tag)}</small>
      </button>
    `).join("");
    window.__cmdFiltered = list;
  }

  function runCommandIndex(idx) {
    const item = (window.__cmdFiltered || COMMAND_ACTIONS)[idx];
    closeCommandPalette();
    if (item) item.run();
  }

  function openContactModal() {
    document.getElementById("contact-modal")?.classList.add("flex");
  }

  function closeContactModal() {
    document.getElementById("contact-modal")?.classList.remove("flex");
  }

  function submitDirectContact(channel) {
    const name = document.getElementById("contact-name")?.value.trim() || "Client";
    const topic = document.getElementById("contact-topic")?.value || "Website Project";
    const msg = document.getElementById("contact-msg")?.value.trim() || "I'd love to discuss a new project.";
    const full = `Hi Jayed, I'm ${name}.\nProject: ${topic}\nDetails: ${msg}`;
    if (channel === "whatsapp") {
      window.open(`https://wa.me/8801307758119?text=${encodeURIComponent(full)}`, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:thunderseen@gmail.com?subject=${encodeURIComponent("Project Inquiry: " + topic)}&body=${encodeURIComponent(full)}`;
    }
    closeContactModal();
  }

  // ==================== FAQ ACCORDION & ROLE ROTATOR ====================
  function initFaqAccordion() {
    document.querySelectorAll("#faq-accordion .faq-trigger").forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const willOpen = !item.classList.contains("is-open");
        document.querySelectorAll("#faq-accordion .faq-item").forEach(el => {
          el.classList.remove("is-open");
          el.querySelector(".faq-trigger")?.setAttribute("aria-expanded", "false");
        });
        if (willOpen) {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  function initRoleRotator() {
    const el = document.getElementById("role-rotator");
    if (!el) return;
    const phrases = [
      "custom WordPress & Elementor sites",
      "conversion-ready WooCommerce stores",
      "practical AI-assisted web portals",
      "SEO-structured business websites"
    ];
    let i = 0;
    setInterval(() => {
      el.classList.add("is-exiting");
      setTimeout(() => {
        i = (i + 1) % phrases.length;
        el.textContent = phrases[i];
        el.classList.remove("is-exiting");
        el.classList.add("is-entering");
        void el.offsetWidth;
        el.classList.remove("is-entering");
      }, 360);
    }, 3400);
  }

  function initAmbientMotion() {
    if (!document.getElementById("scroll-progress")) {
      const bar = document.createElement("div");
      bar.id = "scroll-progress";
      document.body.prepend(bar);
      window.addEventListener("scroll", () => {
        const doc = document.documentElement;
        const max = Math.max(1, doc.scrollHeight - window.innerHeight);
        bar.style.width = `${Math.min(100, (window.scrollY / max) * 100).toFixed(2)}%`;
      }, { passive: true });
    }
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let rafId = 0;
    window.addEventListener("pointermove", ev => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mx", `${ev.clientX}px`);
        document.documentElement.style.setProperty("--my", `${ev.clientY}px`);
        rafId = 0;
      });
    }, { passive: true });

    const targets = document.querySelectorAll("main section:not(#hero-sec)");
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
    targets.forEach(sec => {
      sec.classList.add("reveal-section");
      io.observe(sec);
    });
  }

  // ==================== PRIVATE STUDIO MANAGER (Ctrl+Shift+A or ?studio=manage) ====================
  const STUDIO_SALT = "jjs-seen-studio-2026::";
  const DEFAULT_PASS_HASH = "bc4e35c0a1c70ffdd3a7e14f4c0362acb3af38fd1dc179da315be1708159161f";
  const PASS_HASH_KEY = "jjs-studio-pass-hash-v1";
  const PROFILE_STORE_KEY = "jjs-studio-profile-v2";
  let studioUnlocked = false;

  async function sha256Hex(str) {
    if (window.crypto && window.crypto.subtle) {
      const buf = await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
      return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
    }
    // Pure-JS SHA-256 fallback for file:// contexts
    const K = [1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];
    const bytes = new TextEncoder().encode(str);
    const bitLen = bytes.length * 8;
    const padLen = ((bytes.length + 9 + 63) & ~63);
    const data = new Uint8Array(padLen);
    data.set(bytes);
    data[bytes.length] = 0x80;
    const view = new DataView(data.buffer);
    view.setUint32(padLen - 4, bitLen, false);
    let [h0,h1,h2,h3,h4,h5,h6,h7] = [1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];
    const rrot = (x,n) => (x >>> n) | (x << (32 - n));
    const w = new Uint32Array(64);
    for (let i = 0; i < padLen; i += 64) {
      for (let j = 0; j < 16; j++) w[j] = view.getUint32(i + j * 4, false);
      for (let j = 16; j < 64; j++) {
        const s0 = rrot(w[j-15],7) ^ rrot(w[j-15],18) ^ (w[j-15] >>> 3);
        const s1 = rrot(w[j-2],17) ^ rrot(w[j-2],19) ^ (w[j-2] >>> 10);
        w[j] = (w[j-16] + s0 + w[j-7] + s1) >>> 0;
      }
      let [a,b,c,d,e,f,g,h] = [h0,h1,h2,h3,h4,h5,h6,h7];
      for (let j = 0; j < 64; j++) {
        const S1 = rrot(e,6) ^ rrot(e,11) ^ rrot(e,25);
        const ch = (e & f) ^ (~e & g);
        const t1 = (h + S1 + ch + K[j] + w[j]) >>> 0;
        const S0 = rrot(a,2) ^ rrot(a,13) ^ rrot(a,22);
        const maj = (a & b) ^ (a & c) ^ (b & c);
        const t2 = (S0 + maj) >>> 0;
        h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
      }
      h0 = (h0 + a) >>> 0; h1 = (h1 + b) >>> 0; h2 = (h2 + c) >>> 0; h3 = (h3 + d) >>> 0;
      h4 = (h4 + e) >>> 0; h5 = (h5 + f) >>> 0; h6 = (h6 + g) >>> 0; h7 = (h7 + h) >>> 0;
    }
    return [h0,h1,h2,h3,h4,h5,h6,h7].map(x => x.toString(16).padStart(8,"0")).join("");
  }

  function getActivePassHash() {
    try { return localStorage.getItem(PASS_HASH_KEY) || DEFAULT_PASS_HASH; } catch { return DEFAULT_PASS_HASH; }
  }

  let currentAvatarUrl = AVATAR_SRC;

  function applySavedProfileOverrides() {
    try {
      const saved = JSON.parse(localStorage.getItem(PROFILE_STORE_KEY) || "null");
      if (!saved) return;
      if (saved.bio) {
        const bioEl = document.getElementById("profile-bio");
        if (bioEl) bioEl.textContent = saved.bio;
      }
      if (saved.role) {
        const roleEl = document.getElementById("site-role-descriptor");
        if (roleEl) roleEl.textContent = saved.role;
      }
      if (saved.replyTime) {
        const strip = document.querySelector(".response-strip strong");
        if (strip) strip.textContent = saved.replyTime;
      }
      if (saved.avatarData) {
        currentAvatarUrl = saved.avatarData;
        document.querySelectorAll(".portrait-img").forEach(img => { img.src = currentAvatarUrl; });
      }
    } catch {}
  }

  async function loadStudioProjects() {
    applySavedProfileOverrides();
    try {
      const local = localStorage.getItem(PROJECTS_STORE_KEY);
      if (local) {
        const parsed = JSON.parse(local);
        if (Array.isArray(parsed) && parsed.length) {
          PROJECTS_DATA = parsed;
          return;
        }
      }
    } catch {}
    try {
      const res = await fetch(demoUrl("projects.json"), { cache: "no-cache" });
      if (res.ok) {
        const remote = await res.json();
        if (Array.isArray(remote) && remote.length) PROJECTS_DATA = remote;
      }
    } catch {}
  }

  function saveStudioProjects() {
    try { localStorage.setItem(PROJECTS_STORE_KEY, JSON.stringify(PROJECTS_DATA)); } catch {}
    renderProjectTechFilters();
    renderProjectCards();
  }

  function openProjectManager() {
    let modal = document.getElementById("studio-project-manager");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "studio-project-manager";
      modal.className = "modal-backdrop no-print";
      document.body.appendChild(modal);
      modal.addEventListener("click", ev => { if (ev.target.id === "studio-project-manager") modal.classList.remove("flex"); });
    }
    if (!studioUnlocked) {
      modal.innerHTML = `
        <div class="studio-card modal-card max-w-md">
          <div class="modal-head">
            <div>
              <span class="section-eyebrow">Private Access</span>
              <h3 class="sub-section-title mt-1">Studio Admin Login</h3>
            </div>
            <button type="button" id="close-pm-btn" class="icon-btn" aria-label="Close">✕</button>
          </div>
          <form id="pm-login-form" class="space-y-3 text-xs">
            <div>
              <label for="pm-pass-input" class="field-label">Password</label>
              <input id="pm-pass-input" type="password" required autocomplete="current-password" class="studio-input" placeholder="Enter your private password">
            </div>
            <div id="pm-login-err" class="hidden text-xs font-semibold" style="color:#e11d48">Incorrect password. Please try again.</div>
            <button type="submit" class="btn-primary w-full justify-center">Unlock Studio Panel</button>
          </form>
        </div>
      `;
      modal.querySelector("#close-pm-btn").addEventListener("click", () => modal.classList.remove("flex"));
      modal.querySelector("#pm-login-form").addEventListener("submit", async ev => {
        ev.preventDefault();
        const entered = modal.querySelector("#pm-pass-input").value;
        const hash = await sha256Hex(STUDIO_SALT + entered);
        if (hash === getActivePassHash()) {
          studioUnlocked = true;
          renderStudioManagerPanel(modal, "projects");
        } else {
          modal.querySelector("#pm-login-err").classList.remove("hidden");
          modal.querySelector("#pm-pass-input").value = "";
          modal.querySelector("#pm-pass-input").focus();
        }
      });
      modal.classList.add("flex");
      setTimeout(() => modal.querySelector("#pm-pass-input")?.focus(), 40);
      return;
    }
    renderStudioManagerPanel(modal, "projects");
    modal.classList.add("flex");
  }

  function renderStudioManagerPanel(modal, activeTab) {
    let savedProfile = {};
    try { savedProfile = JSON.parse(localStorage.getItem(PROFILE_STORE_KEY) || "{}"); } catch {}
    modal.innerHTML = `
      <div class="studio-card modal-card max-w-2xl">
        <div class="modal-head">
          <div>
            <span class="section-eyebrow">Private Studio Manager</span>
            <h3 class="sub-section-title mt-1">Manage Portfolio &amp; Security</h3>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" id="pm-lock-btn" class="cv-clear-btn">Lock</button>
            <button type="button" id="close-pm-btn" class="icon-btn" aria-label="Close">✕</button>
          </div>
        </div>
        <div class="flex flex-wrap gap-2">
          <button type="button" data-pm-tab="projects" class="cv-fmt-btn ${activeTab === "projects" ? "is-active" : ""}">Projects (${PROJECTS_DATA.length})</button>
          <button type="button" data-pm-tab="profile" class="cv-fmt-btn ${activeTab === "profile" ? "is-active" : ""}">Profile Details</button>
          <button type="button" data-pm-tab="security" class="cv-fmt-btn ${activeTab === "security" ? "is-active" : ""}">Change Password</button>
        </div>
        <div id="pm-tab-body"></div>
      </div>
    `;
    modal.querySelector("#close-pm-btn").addEventListener("click", () => modal.classList.remove("flex"));
    modal.querySelector("#pm-lock-btn").addEventListener("click", () => { studioUnlocked = false; modal.classList.remove("flex"); showToast("Studio panel locked."); });
    modal.querySelectorAll("[data-pm-tab]").forEach(btn => btn.addEventListener("click", () => renderStudioManagerPanel(modal, btn.dataset.pmTab)));

    const body = modal.querySelector("#pm-tab-body");
    if (activeTab === "projects") {
      body.innerHTML = `
        <div class="space-y-4">
          <p class="modal-copy">Add new websites or screenshots anytime. Click <strong>Download projects.json</strong> and replace <code>demos/projects.json</code> on GitHub to publish permanently.</p>
          <form id="pm-form" class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div><label class="field-label">Project Title *</label><input name="title" required class="studio-input" placeholder="e.g., Nova Dental Clinic Website"></div>
            <div><label class="field-label">Category</label>
              <select name="cat" class="studio-input">
                <option value="wordpress">WordPress &amp; Woo</option>
                <option value="webapp">Web Apps</option>
                <option value="seo">SEO &amp; Leads</option>
                <option value="brand">Brand Ops</option>
              </select>
            </div>
            <div><label class="field-label">Subtitle / Client</label><input name="subtitle" class="studio-input" placeholder="e.g., Elementor Business Build"></div>
            <div><label class="field-label">Live Website URL</label><input name="liveUrl" type="url" class="studio-input" placeholder="https://example.com"></div>
            <div class="sm:col-span-2"><label class="field-label">Full-Page Screenshot URL (optional — enables spring auto-scroll)</label><input name="screenshotUrl" class="studio-input" placeholder="assets/my-site-screenshot.jpg or https://..."></div>
            <div class="sm:col-span-2"><label class="field-label">Short Description *</label><textarea name="desc" rows="2" required class="studio-input" placeholder="What you built and how it helps the client..."></textarea></div>
            <div class="sm:col-span-2"><label class="field-label">Tools / Tags (comma-separated)</label><input name="tags" class="studio-input" placeholder="WordPress, Elementor, WooCommerce, SEO"></div>
            <div class="sm:col-span-2 flex flex-wrap gap-2 pt-1">
              <button type="submit" class="btn-primary">+ Add Project</button>
              <button type="button" id="pm-export-btn" class="btn-outline">Download projects.json</button>
              <button type="button" id="pm-reset-btn" class="btn-outline">Reset Defaults</button>
            </div>
          </form>
          <div class="space-y-2 pt-3" style="border-top:1px solid var(--line)">
            <div class="field-label">Current Portfolio Projects (<span id="pm-count">${PROJECTS_DATA.length}</span>)</div>
            <div id="pm-list" class="space-y-2 max-h-52 overflow-y-auto"></div>
          </div>
        </div>
      `;
      body.querySelector("#pm-export-btn").addEventListener("click", () => {
        const blob = new Blob([JSON.stringify(PROJECTS_DATA, null, 2)], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "projects.json";
        a.click();
        URL.revokeObjectURL(a.href);
        showToast("Downloaded projects.json — upload to demos/projects.json to publish!");
      });
      body.querySelector("#pm-reset-btn").addEventListener("click", () => {
        localStorage.removeItem(PROJECTS_STORE_KEY);
        PROJECTS_DATA = [...DEFAULT_PROJECTS];
        renderProjectTechFilters();
        renderProjectCards();
        renderStudioManagerPanel(modal, "projects");
        showToast("Default showcase projects restored.");
      });
      body.querySelector("#pm-form").addEventListener("submit", ev => {
        ev.preventDefault();
        const fd = new FormData(ev.currentTarget);
        const title = String(fd.get("title") || "").trim();
        const liveUrl = String(fd.get("liveUrl") || "").trim();
        const screenshotUrl = String(fd.get("screenshotUrl") || "").trim();
        const tags = String(fd.get("tags") || "WordPress, Responsive UI").split(",").map(s => s.trim()).filter(Boolean);
        PROJECTS_DATA.unshift({
          id: "proj-" + Date.now(),
          cat: String(fd.get("cat") || "wordpress"),
          badge: liveUrl ? "Live Website" : "Featured Work",
          thumbClass: "thumb-apex",
          thumbLabel: tags.slice(0, 2).join(" • ").toUpperCase() || "PORTFOLIO BUILD",
          thumbTitle: title,
          thumbTagline: String(fd.get("desc") || "").trim(),
          thumbStats: [["Responsive", "Mobile QA"], ["SEO Ready", "Fast Load"], ["Custom", "Build"]],
          title,
          subtitle: String(fd.get("subtitle") || "Custom Web Design Build").trim(),
          desc: String(fd.get("desc") || "").trim(),
          bullets: [String(fd.get("desc") || "").trim(), "Responsive across mobile, tablet, and desktop screens."],
          tags,
          liveUrl,
          screenshotUrl,
          link: liveUrl || "https://www.fiverr.com/jayedjaman_seen?public_mode=true",
          ctaLabel: liveUrl ? "Open Live Site ↗" : "Order Similar on Fiverr ↗"
        });
        saveStudioProjects();
        renderStudioManagerPanel(modal, "projects");
        showToast(`Added "${title}" to your portfolio!`);
      });
      renderProjectManagerList();
    } else if (activeTab === "profile") {
      const currentBio = savedProfile.bio || document.getElementById("profile-bio")?.textContent?.trim() || "";
      const currentRole = savedProfile.role || document.getElementById("site-role-descriptor")?.textContent?.trim() || "";
      const currentReply = savedProfile.replyTime || document.querySelector(".response-strip strong")?.textContent?.trim() || "Under 1 hour";
      body.innerHTML = `
        <form id="pm-profile-form" class="space-y-3 text-xs">
          <div class="flex items-center gap-3 p-3 rounded-lg" style="background:var(--surface-subtle);border:1px solid var(--line)">
            <img id="pm-avatar-preview" src="${currentAvatarUrl}" alt="Current portrait" style="width:56px;height:56px;border-radius:6px;object-fit:cover;border:1px solid var(--line-strong)">
            <div class="flex-1 space-y-1.5">
              <label for="pm-avatar-file" class="field-label mb-0">Profile Picture (Upload New Photo)</label>
              <input id="pm-avatar-file" type="file" accept="image/*" class="studio-input" style="padding:6px 8px">
            </div>
          </div>
          <div><label class="field-label">Header Role Descriptor</label><input name="role" class="studio-input" value="${safeText(currentRole)}"></div>
          <div><label class="field-label">Typical Reply Time</label><input name="replyTime" class="studio-input" value="${safeText(currentReply)}"></div>
          <div><label class="field-label">Hero Bio Text</label><textarea name="bio" rows="3" class="studio-input">${safeText(currentBio)}</textarea></div>
          <div class="flex flex-wrap gap-2">
            <button type="submit" class="btn-primary">Save Profile Details</button>
            <button type="button" id="pm-avatar-reset" class="btn-outline">Reset Default Photo</button>
          </div>
        </form>
      `;
      let pendingAvatarData = savedProfile.avatarData || "";
      body.querySelector("#pm-avatar-file").addEventListener("change", ev => {
        const file = ev.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement("canvas");
            const size = 512;
            canvas.width = size;
            canvas.height = size;
            const minSide = Math.min(img.width, img.height);
            const sx = (img.width - minSide) / 2;
            const sy = Math.max(0, (img.height - minSide) * 0.2);
            canvas.getContext("2d").drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);
            pendingAvatarData = canvas.toDataURL("image/jpeg", 0.88);
            body.querySelector("#pm-avatar-preview").src = pendingAvatarData;
            showToast("Photo ready — click Save Profile Details to apply.");
          };
          img.src = String(reader.result || "");
        };
        reader.readAsDataURL(file);
      });
      body.querySelector("#pm-avatar-reset").addEventListener("click", () => {
        pendingAvatarData = "";
        currentAvatarUrl = AVATAR_SRC;
        document.querySelectorAll(".portrait-img").forEach(img => { img.src = AVATAR_SRC; });
        body.querySelector("#pm-avatar-preview").src = AVATAR_SRC;
        try {
          const cur = JSON.parse(localStorage.getItem(PROFILE_STORE_KEY) || "{}");
          delete cur.avatarData;
          localStorage.setItem(PROFILE_STORE_KEY, JSON.stringify(cur));
        } catch {}
        showToast("Default studio portrait restored.");
      });
      body.querySelector("#pm-profile-form").addEventListener("submit", ev => {
        ev.preventDefault();
        const fd = new FormData(ev.currentTarget);
        const next = {
          role: String(fd.get("role") || "").trim(),
          replyTime: String(fd.get("replyTime") || "").trim(),
          bio: String(fd.get("bio") || "").trim()
        };
        if (pendingAvatarData) next.avatarData = pendingAvatarData;
        try { localStorage.setItem(PROFILE_STORE_KEY, JSON.stringify(next)); } catch {}
        applySavedProfileOverrides();
        showToast("Profile details & photo updated!");
      });
    } else {
      body.innerHTML = `
        <form id="pm-pass-form" class="space-y-3 text-xs">
          <p class="modal-copy">Change your private Studio Manager password below. Passwords are stored as SHA-256 hashes—never shown in plain text.</p>
          <div><label class="field-label">Current Password</label><input name="cur" type="password" required class="studio-input"></div>
          <div><label class="field-label">New Password (min 6 characters)</label><input name="next" type="password" required minlength="6" class="studio-input"></div>
          <div><label class="field-label">Confirm New Password</label><input name="confirm" type="password" required minlength="6" class="studio-input"></div>
          <div id="pm-pass-msg" class="hidden text-xs font-semibold"></div>
          <button type="submit" class="btn-primary">Update Password</button>
        </form>
      `;
      body.querySelector("#pm-pass-form").addEventListener("submit", async ev => {
        ev.preventDefault();
        const fd = new FormData(ev.currentTarget);
        const cur = String(fd.get("cur") || "");
        const next = String(fd.get("next") || "");
        const confirm = String(fd.get("confirm") || "");
        const msg = body.querySelector("#pm-pass-msg");
        msg.classList.remove("hidden");
        const curHash = await sha256Hex(STUDIO_SALT + cur);
        if (curHash !== getActivePassHash()) {
          msg.style.color = "#e11d48";
          msg.textContent = "Current password is incorrect.";
          return;
        }
        if (next !== confirm) {
          msg.style.color = "#e11d48";
          msg.textContent = "New passwords do not match.";
          return;
        }
        const newHash = await sha256Hex(STUDIO_SALT + next);
        try { localStorage.setItem(PASS_HASH_KEY, newHash); } catch {}
        ev.currentTarget.reset();
        msg.style.color = "var(--accent)";
        msg.textContent = "Password updated for this browser! (Hash copied if you ever want to update portfolio.js permanently.)";
        copyTextToClipboard(newHash, "Password updated & new SHA-256 hash copied!");
      });
    }
  }

  function renderProjectManagerList() {
    const list = document.getElementById("pm-list");
    const count = document.getElementById("pm-count");
    if (count) count.textContent = String(PROJECTS_DATA.length);
    if (!list) return;
    list.innerHTML = PROJECTS_DATA.map((p, idx) => `
      <div class="edu-row">
        <div class="min-w-0">
          <h3 class="truncate">${safeText(p.title)}</h3>
          <p>${safeText(p.cat)} · ${p.liveUrl ? "Live URL linked" : "Showcase card"}</p>
        </div>
        <button type="button" data-pm-del="${idx}" class="cv-clear-btn">Remove</button>
      </div>
    `).join("");
    list.querySelectorAll("[data-pm-del]").forEach(btn => btn.addEventListener("click", () => {
      PROJECTS_DATA.splice(Number(btn.dataset.pmDel), 1);
      saveStudioProjects();
      renderProjectManagerList();
      showToast("Project removed.");
    }));
  }

  function initWelcomeCurtain() {
    const key = "jjs-studio-welcomed-v1";
    try { if (sessionStorage.getItem(key) === "1") return; } catch {}
    const curtain = document.createElement("div");
    curtain.id = "welcome-curtain";
    curtain.className = "welcome-curtain no-print";
    curtain.setAttribute("role", "dialog");
    curtain.setAttribute("aria-modal", "true");
    curtain.setAttribute("aria-label", "Welcome to Jayed Jaman Seen's Portfolio");
    curtain.innerHTML = `
      <div class="welcome-card">
        <span class="seen-monogram" aria-hidden="true">
          <svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55 11L51 14.5V22.5H45.5V12.5L41.5 16V22.5H36V13.5L32 17V24.5C32 30.8 27.6 34.5 21.5 34.5C15.8 34.5 12 31.2 12 25.5V20L8 23.5V26C8 34.2 13.8 39 21.6 39C30.1 39 36 33.4 36 26.5H55V11Z" fill="currentColor"/>
          </svg>
        </span>
        <span class="welcome-eyebrow">Jayed Jaman Seen • Independent Web Studio</span>
        <h2 class="welcome-title">Welcome to my <span class="serif-italic">portfolio.</span></h2>
        <p class="welcome-copy">Explore interactive WordPress, WooCommerce, and AI-assisted builds—test live demos directly in your browser or configure a custom project scope in seconds.</p>
        <div class="welcome-actions">
          <button type="button" id="welcome-enter-btn" class="btn-primary">Enter Portfolio →</button>
          <a href="https://www.fiverr.com/jayedjaman_seen?public_mode=true" target="_blank" rel="noopener noreferrer" class="btn-outline">Fiverr Profile ↗</a>
        </div>
        <span class="welcome-hint">Click anywhere or press Enter to continue</span>
      </div>
    `;
    document.body.appendChild(curtain);
    const dismiss = () => {
      try { sessionStorage.setItem(key, "1"); } catch {}
      curtain.classList.add("is-leaving");
      setTimeout(() => curtain.remove(), 480);
    };
    curtain.addEventListener("click", ev => {
      if (ev.target.closest("a")) { dismiss(); return; }
      dismiss();
    });
    const onKey = ev => {
      if (ev.key === "Enter" || ev.key === "Escape" || ev.key === " ") {
        dismiss();
        document.removeEventListener("keydown", onKey);
      }
    };
    document.addEventListener("keydown", onKey);
  }

  // ==================== GLOBAL EXPORTS & INIT ====================
  Object.assign(window, {
    toggleColorTheme,
    copyTextToClipboard,
    switchWorkspaceMode,
    toggleResumeStudio,
    openResumeStudio,
    JumpAndFilterSkill,
    selectPackageInEstimator,
    filterSkills,
    filterProjects,
    openProjectModal,
    closeProjectModal,
    selectEstimatorService,
    updateEstimator,
    sendEstimatorViaWhatsApp,
    sendEstimatorViaEmail,
    copyEstimatorBrief,
    setCvFormat,
    quickHighlight,
    highlightCvKeywords,
    copyFullAtsText,
    openCommandPalette,
    closeCommandPalette,
    renderCommandList,
    runCommandIndex,
    openContactModal,
    closeContactModal,
    submitDirectContact
  });

  document.addEventListener("keydown", ev => {
    if ((ev.ctrlKey || ev.metaKey) && ev.shiftKey && ev.key.toLowerCase() === "a") {
      ev.preventDefault();
      openProjectManager();
    } else if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === "k") {
      ev.preventDefault();
      openCommandPalette();
    } else if (ev.key === "Escape") {
      closeCommandPalette();
      closeProjectModal();
      closeContactModal();
      document.getElementById("studio-project-manager")?.classList.remove("flex");
      document.getElementById("device-lab")?.classList.remove("open");
    }
  });

  document.addEventListener("DOMContentLoaded", async () => {
    syncThemeToggle();
    await loadStudioProjects();
    filterSkills("all");
    initCompetencyChart();
    renderProjectTechFilters();
    renderProjectCards();
    updateEstimator();
    initFaqAccordion();
    initRoleRotator();
    initAmbientMotion();
    initWelcomeCurtain();
    if (new URLSearchParams(window.location.search).get("studio") === "manage") {
      openProjectManager();
    }

    document.getElementById("project-search")?.addEventListener("input", renderProjectCards);
    document.querySelectorAll("[data-project-view]").forEach(btn => btn.addEventListener("click", () => {
      projectLayout = btn.dataset.projectView;
      document.querySelectorAll("[data-project-view]").forEach(x => x.classList.toggle("active", x === btn));
      renderProjectCards();
    }));

    document.getElementById("lab-project-select")?.addEventListener("change", ev => { labProjectId = ev.target.value; renderDeviceLab(); });
    document.querySelectorAll("[data-lab-size]").forEach(btn => btn.addEventListener("click", () => { labDevice = btn.dataset.labSize; renderDeviceLab(); }));
    document.getElementById("lab-rotate")?.addEventListener("click", () => { labRotated = !labRotated; renderDeviceLab(); });
    document.getElementById("lab-zoom")?.addEventListener("click", () => { labZoomed = !labZoomed; renderDeviceLab(); });
    document.getElementById("close-device-lab")?.addEventListener("click", () => document.getElementById("device-lab")?.classList.remove("open"));
    document.getElementById("device-lab")?.addEventListener("click", ev => { if (ev.target.id === "device-lab") ev.currentTarget.classList.remove("open"); });

    ["project-modal", "cmd-modal", "contact-modal"].forEach(id => {
      document.getElementById(id)?.addEventListener("click", ev => {
        if (ev.target.id === id) ev.currentTarget.classList.remove("flex");
      });
    });
  });
})();
