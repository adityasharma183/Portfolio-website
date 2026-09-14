import { useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(useGSAP);

interface ProjectItem {
  title: string;
  category: string;
  tools: string;
  image: string;
  link: string;
  github: string;
  live?: string;
}

const projects: ProjectItem[] = [
  {
    title: "XRISEAI Helpdesk",
    category: "SaaS AI Platform",
    tools:
      "React 18, TypeScript, Tailwind CSS, Node.js, Express, MongoDB Atlas, JWT, Cloudinary, Nodemailer, Gemini AI Triage, Docker",
    image: "/images/xriseai.jpg",
    link: "https://xrise-helpdesk-frontend.onrender.com/",
    github: "https://github.com/adityasharma183/XRISE-HelpDesk",
    live: "https://xrise-helpdesk-frontend.onrender.com/",
  },
  {
    title: "AI Interview Prep",
    category: "MERN Stack • Gemini AI",
    tools:
      "React.js, Node.js, Express.js, MongoDB, Google Gemini AI, JWT Auth, Axios, Role-Based Dashboards",
    image: "/images/ai-interview.jpg",
    link: "https://github.com/adityasharma183/ai-interview-prep",
    github: "https://github.com/adityasharma183/ai-interview-prep",
  },
  {
    title: "AI App Builder",
    category: "Next.js • PostgreSQL",
    tools:
      "Next.js, Gemini AI, Prisma ORM, PostgreSQL, Sandpack Live Previews, Supabase Storage, Clerk Auth",
    image: "/images/ai-app-builder.jpg",
    link: "https://github.com/adityasharma183/Agentic-App-Builder---Next.js",
    github: "https://github.com/adityasharma183/Agentic-App-Builder---Next.js",
  },
  {
    title: "Streaming Backend",
    category: "RESTful API Engine",
    tools:
      "Node.js, Express.js, MongoDB, 15+ RESTful APIs, JWT Authentication, Cloud Architecture",
    image: "/images/video-streaming.jpg",
    link: "https://github.com/adityasharma183/Video_Tube",
    github: "https://github.com/adityasharma183/Video_Tube",
  },
  {
    title: "Web Apps Suite",
    category: "Full-Stack Ecosystem",
    tools:
      "React, Next.js, Node.js, REST APIs, Tailwind CSS — Movie App, Weather App, Amazon Clone, Edu-Tech",
    image: "/images/web-apps-suite.jpg",
    link: "https://github.com/adityasharma183",
    github: "https://github.com/adityasharma183",
  },
];

const Work = () => {
  const pinSpacerRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      function getTranslateX() {
        const box = document.getElementsByClassName("work-box");
        const container = document.querySelector(".work-container");
        if (!box.length || !container) return 0;
        const rectLeft = container.getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
        const padding =
          parseInt(window.getComputedStyle(box[0]).padding) / 2;
        return Math.max(0, rect.width * box.length - (rectLeft + parentWidth) + padding);
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: workRef.current,
          start: "top top",
          end: () => `+=${getTranslateX()}`,
          scrub: true,
          pin: true,
          pinSpacer: pinSpacerRef.current,
          id: "work",
          invalidateOnRefresh: true,
        },
      });

      timeline.to(".work-flex", {
        x: () => -getTranslateX(),
        ease: "none",
      });

      return () => {
        timeline.kill();
        ScrollTrigger.getById("work")?.kill(true);
      };
    },
    { scope: pinSpacerRef }
  );

  return (
    <div className="work-pin-wrapper" ref={pinSpacerRef}>
      <div className="work-section" id="work" ref={workRef}>
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <div className="work-action-links">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-btn work-btn-live"
                      data-cursor="disable"
                    >
                      <span className="live-pulse-dot"></span>
                      <span>Live Demo</span>
                      <MdArrowOutward className="work-arrow-icon" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-btn work-btn-github"
                      data-cursor="disable"
                    >
                      <FaGithub className="work-btn-icon" />
                      <span>GitHub</span>
                      <MdArrowOutward className="work-arrow-icon" />
                    </a>
                  )}
                </div>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.live || project.github || project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Work;
