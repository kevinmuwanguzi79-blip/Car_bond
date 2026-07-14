// Shared header/footer/WhatsApp button — kept in one place so updating the
// look later means editing this file, not every page.

const WHATSAPP_NUMBERS = ["256704113590", "256766617563"]; // from Sephoc's two listed lines
const PRIMARY_WHATSAPP = WHATSAPP_NUMBERS[0];
const PHONE_DISPLAY = ["(+256) 70 411 35 90", "(+256) 76 661 75 63"];
const EMAIL = "jbinvestment61@gmail.com";
const LOCATION = "Naguru, Kampala, Uganda";
const HOURS = "Mon–Sat: 8:30am – 6:00pm";
const FACEBOOK = "https://facebook.com/sephocmotorsuganda";
const INSTAGRAM = "https://instagram.com/sephocmotorsuganda";
const MAP_QUERY = "Naguru%2C%20Kampala%2C%20Uganda";

function waLink(message) {
  return `https://wa.me/${PRIMARY_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function renderHeader(active) {
  const links = [
    { href: "index.html", label: "Home" },
    { href: "inventory.html", label: "Inventory" },
    { href: "contact.html", label: "Contact" },
  ];
  const navHtml = links
    .map(
      (l) =>
        `<a href="${l.href}" style="${l.href === active ? "color:var(--accent-dark)" : ""}">${l.label}</a>`
    )
    .join("");
  document.write(`
    <header class="site-header">
      <div class="nav-inner">
        <a class="logo" href="index.html">SEPHOC <span>MOTORS</span></a>
        <nav class="main-links">${navHtml}</nav>
        <a class="nav-cta" href="${waLink("Hi, I'd like to know more about your inventory")}" target="_blank">Enquire on WhatsApp</a>
      </div>
    </header>
  `);
}

function renderWhatsAppFloat(message) {
  const msg = message || "Hi, I'd like to know more about your inventory";
  document.write(`
    <a class="whatsapp-float" href="${waLink(msg)}" target="_blank" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 32 32"><path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.36.62 4.57 1.79 6.5L4 29l7.66-1.75a11.9 11.9 0 0 0 4.36.82h.01c6.63 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.7.84.83-3.6-.24-.37a9.77 9.77 0 0 1-1.5-5.07c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.73 9.73 0 0 1 2.87 6.93c0 5.4-4.4 9.78-9.63 9.78zm5.36-7.33c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.29-.76.96-.93 1.16-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.77-1.45-1.73-1.62-2.02-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.18-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.02c.15.2 2.06 3.15 5 4.41.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.11.56-.08 1.74-.71 1.99-1.4.24-.68.24-1.27.17-1.4-.07-.12-.27-.2-.56-.34z"/></svg>
    </a>
  `);
}

function renderFooter() {
  document.write(`
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-cols">
          <div>
            <h4>Sephoc Motors Uganda</h4>
            <p>${LOCATION}</p>
            <p>${HOURS}</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>${PHONE_DISPLAY.join("<br>")}</p>
            <p>${EMAIL}</p>
          </div>
          <div>
            <h4>Follow</h4>
            <p><a href="${FACEBOOK}" target="_blank">Facebook</a></p>
            <p><a href="${INSTAGRAM}" target="_blank">Instagram</a></p>
          </div>
        </div>
        <div class="footer-bottom">© 2026 Sephoc Motors Uganda. New, used &amp; commercial vehicle dealership — Naguru, Kampala.</div>
      </div>
    </footer>
  `);
}
