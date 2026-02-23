const routes = {
  "/": {
    key: "landing",
    title: "Stop Missing The Right Jobs.",
    subtext: "Precision-matched job discovery delivered daily at 9AM.",
    body: `
      <div class="card">
        <div class="card__section">
          <p class="body text-muted">
            Job Notification Tracker is designed to surface the roles that actually match what you are looking for,
            without noise or urgency theater.
          </p>
        </div>
        <div class="card__section">
          <button type="button" class="btn btn--primary" data-cta-settings>
            Start Tracking
          </button>
        </div>
      </div>
    `,
  },
  "/dashboard": {
    key: "dashboard",
    title: "Dashboard",
    subtext: "This view will summarize your tracked job notifications.",
    body: `
      <div class="empty-card">
        <h2 class="empty-card__title">No jobs yet.</h2>
        <p class="body empty-card__body">
          In the next step, you will load a realistic dataset to see how notifications appear here.
        </p>
      </div>
    `,
  },
  "/saved": {
    key: "saved",
    title: "Saved",
    subtext: "Curate the roles worth revisiting without clutter.",
    body: `
      <div class="empty-card">
        <h2 class="empty-card__title">Nothing saved yet.</h2>
        <p class="body empty-card__body">
          This space is reserved for roles you decide to keep close. In a future step, you’ll be able to move jobs here
          from your dashboard.
        </p>
      </div>
    `,
  },
  "/digest": {
    key: "digest",
    title: "Digest",
    subtext: "A calm daily summary that arrives on your schedule.",
    body: `
      <div class="empty-card">
        <h2 class="empty-card__title">Daily digest coming soon.</h2>
        <p class="body empty-card__body">
          In a future step, this page will show a 9AM summary of new and important roles, aligned with your preferences.
        </p>
      </div>
    `,
  },
  "/settings": {
    key: "settings",
    title: "Settings",
    subtext: "Define the kind of roles you care about. These controls are placeholders only.",
    body: `
      <div class="card">
        <div class="card__section">
          <div class="field">
            <label class="field__label" for="settings-role-keywords">Role keywords</label>
            <p class="field__hint">
              List titles or keywords you want this tracker to focus on.
            </p>
            <input
              id="settings-role-keywords"
              class="field__input"
              type="text"
              placeholder="e.g., Senior Frontend Engineer, Product Manager"
            />
          </div>
        </div>
        <div class="card__section">
          <div class="field">
            <label class="field__label" for="settings-preferred-locations">Preferred locations</label>
            <p class="field__hint">
              Cities, regions, or time zones that are realistic for you.
            </p>
            <input
              id="settings-preferred-locations"
              class="field__input"
              type="text"
              placeholder="e.g., Bengaluru, Remote-friendly in IST, US-remote overlap"
            />
          </div>
        </div>
        <div class="card__section">
          <div class="field">
            <span class="field__label">Mode</span>
            <p class="field__hint">
              Indicate how you prefer to work. These options are placeholders; they do not affect any logic yet.
            </p>
            <div class="stack-horizontal">
              <label class="body text-muted">
                <input type="radio" name="settings-mode" /> Remote
              </label>
              <label class="body text-muted">
                <input type="radio" name="settings-mode" /> Hybrid
              </label>
              <label class="body text-muted">
                <input type="radio" name="settings-mode" /> Onsite
              </label>
            </div>
          </div>
        </div>
        <div class="card__section">
          <div class="field">
            <label class="field__label" for="settings-experience-level">Experience level</label>
            <p class="field__hint">
              Select the band that most closely matches your current profile.
            </p>
            <select id="settings-experience-level" class="field__input">
              <option value="">Select an experience band</option>
              <option value="junior">Junior / Entry-level</option>
              <option value="mid">Mid-level</option>
              <option value="senior">Senior</option>
              <option value="lead">Lead / Principal</option>
            </select>
          </div>
        </div>
      </div>
    `,
  },
  "/proof": {
    key: "proof",
    title: "Proof",
    subtext: "This page will collect artifacts that show this tracker is working as intended.",
    body: `
      <div class="empty-card">
        <h2 class="empty-card__title">Proof workspace</h2>
        <p class="body empty-card__body">
          In a future step, you will attach screenshots, logs, and short notes that demonstrate the end-to-end flow
          from notification to decision.
        </p>
      </div>
    `,
  },
};

function getRoute(pathname) {
  if (routes[pathname]) {
    return routes[pathname];
  }

  if (pathname === "" || pathname === null || pathname === undefined) {
    return routes["/"];
  }

  return null;
}

function renderRoute(pathname) {
  const route = getRoute(pathname);
  const headingEl = document.querySelector("[data-route-heading]");
  const subtextEl = document.querySelector("[data-route-subtext]");
  const contentEl = document.querySelector("[data-route-content]");

  if (!headingEl || !subtextEl || !contentEl) return;

  if (!route) {
    headingEl.textContent = "Page Not Found";
    subtextEl.textContent =
      "The page you are looking for does not exist.";
    contentEl.innerHTML = `
      <div class="empty-card">
        <h2 class="empty-card__title">This route is not available.</h2>
        <p class="body empty-card__body">
          Check the navigation options above, or return to the dashboard.
        </p>
      </div>
    `;
    return;
  }

  headingEl.textContent = route.title;
  subtextEl.textContent = route.subtext;
  contentEl.innerHTML = route.body || "";

  if (route.key === "landing") {
    const cta = document.querySelector("[data-cta-settings]");
    if (cta) {
      cta.onclick = function handleLandingClick(event) {
        event.preventDefault();
        navigate("/settings");
      };
    }
  }
}

function isLinkActive(pathname, target) {
  return pathname === target;
}

function updateActiveNav(pathname) {
  const links = document.querySelectorAll("[data-nav-link]");

  links.forEach((link) => {
    const target = link.getAttribute("data-route");
    const isActive = isLinkActive(pathname, target);
    link.classList.toggle("nav__link--active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

function closeMobileNav() {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector(".top-bar__menu-toggle");

  if (!nav || !toggle) return;

  nav.classList.remove("nav--open");
  toggle.setAttribute("aria-expanded", "false");
}

function toggleMobileNav() {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector(".top-bar__menu-toggle");

  if (!nav || !toggle) return;

  const isOpen = nav.classList.toggle("nav--open");
  toggle.setAttribute("aria-expanded", String(isOpen));
}

function navigate(pathname) {
  const currentPath = window.location.pathname || "/";

  if (pathname === currentPath) {
    renderRoute(pathname);
    updateActiveNav(pathname);
    closeMobileNav();
    return;
  }

  window.history.pushState({}, "", pathname);
  renderRoute(pathname);
  updateActiveNav(pathname);
  closeMobileNav();
}

function handleLinkClick(event) {
  const link = event.target.closest("[data-nav-link]");

  if (!link) return;

  event.preventDefault();

  const targetPath = link.getAttribute("data-route");
  if (!targetPath) return;

  navigate(targetPath);
}

function handlePopState() {
  const pathname = window.location.pathname || "/";
  renderRoute(pathname);
  updateActiveNav(pathname);
}

function initShell() {
  const initialPath = window.location.pathname || "/";

  renderRoute(initialPath);
  updateActiveNav(initialPath);

  const nav = document.querySelector("[data-nav]");
  if (nav) {
    nav.addEventListener("click", handleLinkClick);
  }

  const toggle = document.querySelector(".top-bar__menu-toggle");
  if (toggle) {
    toggle.addEventListener("click", toggleMobileNav);
  }

  window.addEventListener("popstate", handlePopState);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initShell);
} else {
  initShell();
}

