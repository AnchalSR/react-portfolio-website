import React from "react";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import resumeIcon from "../assets/resume-icon.png";
import resumeFile from "../assets/Resume.pdf";
import githubIcon from "../assets/github.png"; // ✅ GitHub Icon
import linkedinIcon from "../assets/linkedin.png"; // ✅ LinkedIn Icon
import "../styles/nav.css";

export default function Nav() {
  const location = useLocation();

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => navClass === navPositionClass;

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

  const handleResumeClick = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink("/", astronautHelmet, "astronaut helmet icon", "nav-about")}
      {renderNavLink("/skills", deadEye, "deadEye icon", "nav-skills")}
      {renderNavLink("/projects", stack, "stack icon", "nav-projects")}
      {renderNavLink("/contact", envelope, "envelope icon", "nav-contact")}

      {/* Resume Button */}
      <button onClick={handleResumeClick} className="nav-link resume-button">
        <img src={resumeIcon} alt="Resume icon" />
      </button>

      {/* GitHub & LinkedIn - Open in New Tab */}
      <a
        href="https://github.com/AnchalSR" // ✅ Replace with your GitHub link
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link social-link"
      >
        <img src={githubIcon} alt="GitHub icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/anchal-kumar-verma-999858250/" // ✅ Replace with your LinkedIn link
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link social-link"
      >
        <img src={linkedinIcon} alt="LinkedIn icon" />
      </a>
    </nav>
  );
}
