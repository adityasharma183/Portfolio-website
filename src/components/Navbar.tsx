import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      smoothTouch: 0.1,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    // Refresh triggers to ensure initial pin heights and offsets are properly calculated
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const section = element.getAttribute("data-href");
        if (!section) return;

        const target = document.querySelector(section);
        if (!target) return;

        if (smoother) {
          try {
            smoother.scrollTo(section, true, "top top");
          } catch {
            target.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
      ScrollTrigger.refresh();
    });
  }, []);

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const target = document.querySelector(sectionId);
    if (!target) return;

    if (smoother) {
      try {
        smoother.scrollTo(sectionId, true, "top top");
      } catch {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          ADITYA
        </a>
        <a
          href="mailto:adityaa.sharma183@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          adityaa.sharma183@gmail.com
        </a>

        {/* Desktop Navigation Links */}
        <ul className="desktop-nav">
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#career" href="#career">
              <HoverLinks text="CAREER" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#techstack" href="#techstack">
              <HoverLinks text="STACK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className={`mobile-nav-toggle ${mobileMenuOpen ? "is-active" : ""}`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          data-cursor="disable"
        >
          <span className="hamburger-line line-1"></span>
          <span className="hamburger-line line-2"></span>
          <span className="hamburger-line line-3"></span>
        </button>
      </div>

      {/* Mobile Glassmorphism Menu Drawer */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "is-open" : ""}`}>
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="mobile-menu-content">
          <nav className="mobile-nav-links">
            <a
              href="#about"
              onClick={(e) => handleMobileNavClick(e, "#about")}
            >
              <span className="mobile-nav-num">01</span>
              <span>ABOUT</span>
            </a>
            <a
              href="#career"
              onClick={(e) => handleMobileNavClick(e, "#career")}
            >
              <span className="mobile-nav-num">02</span>
              <span>CAREER</span>
            </a>
            <a
              href="#work"
              onClick={(e) => handleMobileNavClick(e, "#work")}
            >
              <span className="mobile-nav-num">03</span>
              <span>WORK</span>
            </a>
            <a
              href="#techstack"
              onClick={(e) => handleMobileNavClick(e, "#techstack")}
            >
              <span className="mobile-nav-num">04</span>
              <span>STACK</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleMobileNavClick(e, "#contact")}
            >
              <span className="mobile-nav-num">05</span>
              <span>CONTACT</span>
            </a>
          </nav>

          <div className="mobile-menu-footer">
            <a
              href="mailto:adityaa.sharma183@gmail.com?subject=Resume%20Inquiry%20-%20Aditya%20Sharma"
              className="mobile-resume-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              REQUEST RESUME
            </a>
            <div className="mobile-social-links">
              <a
                href="https://github.com/adityasharma183"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <span className="mobile-social-dot">•</span>
              <a
                href="https://linkedin.com/in/adityasharma183"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <span className="mobile-social-dot">•</span>
              <a href="mailto:adityaa.sharma183@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
