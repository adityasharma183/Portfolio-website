import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Intern</h4>
                <h5>M Brothers International</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed and maintained full-stack MERN applications using
              React.js, Node.js, Express.js, and MongoDB. Collaborated in Agile
              methodologies using Jira for sprint planning and project tracking.
              Designed and consumed RESTful APIs following SDLC, assisted in AWS
              deployment workflows and CI/CD pipelines, and built cross-platform
              mobile features with React Native.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & ML Intern</h4>
                <h5>GTU-IBM SkillsBuild Internship</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed practical training in Machine Learning algorithms,
              Generative AI technologies, and prompt engineering applications
              with modern AI tools and APIs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Engineering</h4>
                <h5>L.D. College of Engineering (CGPA: 7.65)</h5>
              </div>
              <h3>2022 – 2026</h3>
            </div>
            <p>
              Bachelor of Engineering in Computer Engineering at Ahmedabad.
              Relevant Coursework: Data Structures & Algorithms, Object-Oriented
              Programming, Database Management Systems, Operating Systems, and
              Computer Networks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary (HSC)</h4>
                <h5>SP Smart School, Jammu & Kashmir</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Graduated Higher Secondary Education with 95.8% distinction,
              building solid fundamentals in mathematics, computer logic, and
              science.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary School (SSC)</h4>
                <h5>Vimal Vidyalaya, Jammu & Kashmir</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed Secondary School Certificate with 95% distinction,
              honored for scholastic excellence and academic dedication.
            </p>
          </div>
        </div>

        <div className="career-achievements">
          <div className="achievements-header">
            <h3>Key Achievements & Milestones</h3>
          </div>
          <div className="achievements-grid">
            <div className="achievement-card">
              <span className="achievement-number">01</span>
              <h4>Production Web Ecosystem</h4>
              <p>
                Engineered and deployed multiple full-stack web applications
                including Portfolio, Movie Search App, Weather App, Amazon Clone,
                Edu-Tech Platform, World Info App, and Todo Applications.
              </p>
            </div>
            <div className="achievement-card">
              <span className="achievement-number">02</span>
              <h4>Generative AI Integrations</h4>
              <p>
                Architected AI-powered applications leveraging Google Gemini
                APIs, streaming prompt engineering pipelines, automated resume &
                code analysis, and AI triage systems.
              </p>
            </div>
            <div className="achievement-card">
              <span className="achievement-number">03</span>
              <h4>Academic Excellence</h4>
              <p>
                Maintained consistent top-tier academic performance with 7.65
                CGPA in Computer Engineering, 95.8% in HSC, and 95.0% in SSC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
