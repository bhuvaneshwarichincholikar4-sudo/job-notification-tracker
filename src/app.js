const routes = {
  "/": {
    key: "dashboard",
    title: "Dashboard",
    subtext: "This section will be built in the next step.",
  },
  "/dashboard": {
    key: "dashboard",
    title: "Dashboard",
    subtext: "This section will be built in the next step.",
  },
  "/saved": {
    key: "saved",
    title: "Saved",
    subtext: "This section will be built in the next step.",
  },
  "/digest": {
    key: "digest",
    title: "Digest",
    subtext: "This section will be built in the next step.",
  },
  "/settings": {
    key: "settings",
    title: "Settings",
    subtext: "This section will be built in the next step.",
  },
  "/proof": {
    key: "proof",
    title: "Proof",
    subtext: "This section will be built in the next step.",
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

  if (!headingEl || !subtextEl) return;

  if (!route) {
    headingEl.textContent = "Page Not Found";
    subtextEl.textContent =
      "The page you are looking for does not exist.";
    return;
  }

  headingEl.textContent = route.title;
  subtextEl.textContent = route.subtext;
}

function isLinkActive(pathname, target) {
  if (target === "/dashboard") {
    return pathname === "/" || pathname === "/dashboard";
  }

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

