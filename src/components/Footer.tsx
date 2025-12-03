// File: src/components/Footer.tsx
import React from "react";

export const Footer: React.FC = () => {
  return (
      <footer className="border-t border-[var(--color-muted)]/30 bg-[var(--color-bg-alt)] text-[var(--color-text)]">
        <div className="container mx-auto max-w-6xl px-4 py-10">
          <div className="wrapper grid gap-10 lg:grid-cols-3">
            {/* Column 1: Logo + contact */}
            <div className="col4 column_footer_1 space-y-4">
              <div className="logo_footer">
                <a href="/" className="inline-flex items-center gap-2">
                  <svg
                      width="188"
                      height="35"
                      viewBox="0 0 188 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-auto"
                  >
                    {/* ...SVG paths... */}
                  </svg>
                </a>
              </div>

              <div className="space-y-2 text-sm text-[var(--color-muted)]">
                <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  Email Us
                </span>
                  <a
                      href="mailto:contact@crystalogic.net"
                      className="text-[var(--color-text)] hover:text-[var(--color-primary)]"
                  >
                    contact@crystalogic.net
                  </a>
                </div>
                <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  Call Us
                </span>
                  <a
                      href="tel:+38 (067) 6714714"
                      className="text-[var(--color-text)] hover:text-[var(--color-primary)]"
                  >
                    +38 (067) 6714714
                  </a>
                </div>
                <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  Visit Us
                </span>
                  <a
                      href="#"
                      className="text-[var(--color-text)] hover:text-[var(--color-primary)]"
                  >
                    41 DEVONSHIRE STREET, GROUND FLOOR, ENGLAND, LONDON, W1G 7AJ
                  </a>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  Our Social
                </div>
                <ul className="mt-2 flex gap-3 text-xs">
                  <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://instagram.com/crystallogic_team?igshid=1b9aagzt6ppgl"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-muted)]/40 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    >
                      IG
                    </a>
                  </li>
                  <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/CrystalLogic.team/"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-muted)]/40 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    >
                      FB
                    </a>
                  </li>
                  <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/company/crystallogic/mycompany/"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-muted)]/40 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    >
                      in
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col4 block_menu_footer column_footer_2 space-y-6 text-sm">
              <div className="accordion-menu col-footer-menu">
                <div className="name_menu_footer mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  <span>Services</span>
                  <svg className="h-3 w-3 text-[var(--color-muted)]" viewBox="0 0 451.847 451.847" xmlns="http://www.w3.org/2000/svg">
                    <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" />
                  </svg>
                </div>
                <ul className="space-y-1 text-[var(--color-text)]">
                  {/* items... */}
                </ul>
              </div>

              <div className="accordion-menu col-footer-menu">
                <div className="name_menu_footer mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  <span>Solutions</span>
                  <svg className="h-3 w-3 text-[var(--color-muted)]" viewBox="0 0 451.847 451.847" xmlns="http://www.w3.org/2000/svg">
                    <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" />
                  </svg>
                </div>
                <ul className="space-y-1 text-[var(--color-text)]">
                  {/* items... */}
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col4 block_menu_footer column_footer_3">
              <div className="menu_footer_links text-sm">
                <ul className="space-y-1">
                  <li>
                    <a href="https://crystalogic.net/about-us/" className="hover:text-[var(--color-primary)]">About Us</a>
                  </li>
                  {/* other links... */}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="col12 mt-8 border-t border-[var(--color-muted)]/20 pt-4">
            <div className="footer_bottom flex flex-col items-center justify-between gap-3 text-xs text-[var(--color-muted)] md:flex-row">
              <div className="flex gap-2">
                <a href="https://crystalogic.net/privacy-policy/" className="rounded bg-white px-2 py-1 font-semibold text-[11px] text-black/70 no-underline">Privacy Policy</a>
                <a href="https://crystalogic.net/terms-and-conditions/" className="rounded bg-white px-2 py-1 font-semibold text-[11px] text-black/70 no-underline">Terms</a>
              </div>
              <p className="text-center">Copyright © 2025 Crystal Logic. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
  );
};
