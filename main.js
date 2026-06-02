document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuToggle && mobileMenu) {
    const toggleIcon = mobileMenuToggle.querySelector(".material-symbols-outlined");

    const setMenuState = (open) => {
      mobileMenu.classList.toggle("hidden", !open);
      mobileMenuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      mobileMenuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      if (toggleIcon) toggleIcon.textContent = open ? "close" : "menu";
    };

    mobileMenuToggle.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      setMenuState(!isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });
  }

  const cookieBanner = document.getElementById("cookie-banner");
  const cookieAccept = document.getElementById("cookie-accept");
  const cookieConsentKey = "olfcode-cookie-consent";

  if (cookieBanner && cookieAccept) {
    const hasAcceptedCookies = localStorage.getItem(cookieConsentKey) === "accepted";

    if (!hasAcceptedCookies) {
      cookieBanner.classList.remove("hidden");
    }

    cookieAccept.addEventListener("click", () => {
      localStorage.setItem(cookieConsentKey, "accepted");
      cookieBanner.classList.add("hidden");
    });
  }
});
