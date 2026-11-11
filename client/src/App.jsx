import React, { useState } from "react";

const skills = [
  ["C++", "🌐"],
  ["HTML5", "🌐"],
  ["CSS3", "🎨"],
  ["JavaScript", "JS"],
  ["React.js", "⚛"],
  ["Node.js", "⬢"],
  ["Express.js", "EX"],
  ["SQL", "🗄"]
];
const projects = [
  {
    title: "School Management System",
    description:
      "A full-stack school management system designed to manage students, teachers, classes, attendance and administrative operations from a centralized platform.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL"
    ]
  }
];

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setStatus("Sending...");

    try {

      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.error || "Something went wrong.");
        return;
      }

      setStatus("Message sent successfully! ✓");

      setForm({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {

      console.error(error);

      setStatus(
        "Backend is not running. Start the server first."
      );

    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* NAVBAR */}

      <header className="navbar">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          Saqib<span>.</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav
          className={
            menuOpen
              ? "navigation open"
              : "navigation"
          }
        >

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#contact"
            className="hire-button"
            onClick={closeMenu}
          >
            Hire Me
          </a>

        </nav>

      </header>


      {/* HERO */}

      <section id="home" className="hero">

        <div className="hero-left">

          <p className="hero-label">
            BCA GRADUATE • FULL STACK DEVELOPER
          </p>

          <h1>
            Hi, I'm{" "}
            <span>Saqib Nazir</span>
          </h1>

          <h2>
            I build modern web applications.
          </h2>

          <p className="hero-description">
            A hardworking and quick-learning developer
            passionate about building clean, responsive
            and user-friendly applications.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              View Projects →
            </a>

            <a
              href="#contact"
              className="outline-button"
            >
              Contact Me ✉
            </a>

          </div>

          <div className="socials">

            <a
              href="https://github.com/saqibnazir248"
              target="_blank"
              rel="noreferrer"
            >
              ◉
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/saqib-ahmad-252006374"
              target="_blank"
              rel="noreferrer"
            >
              in
              <span>LinkedIn</span>
            </a>

          </div>

        </div>


        {/* CODE WINDOW */}

        <div className="code-window">

          <div className="window-top">

            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>

          </div>

          <div className="code-content">

            <p>
              <span className="purple">
                const
              </span>{" "}
              developer = {"{"}
            </p>

            <p>
              &nbsp;&nbsp;name:{" "}
              <span className="code-green">
                "Saqib Nazir"
              </span>,
            </p>

            <p>
              &nbsp;&nbsp;role:{" "}
              <span className="code-green">
                "Full Stack Developer"
              </span>,
            </p>

            <p>
              &nbsp;&nbsp;education:{" "}
              <span className="code-green">
                "BCA Graduate"
              </span>,
            </p>

            <p>
              &nbsp;&nbsp;stack: [
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="code-green">
                "React.js"
              </span>,
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="code-green">
                "Node.js"
              </span>,
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="code-green">
                "Express.js"
              </span>
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="code-green">
                "MySQL"
              </span>
            </p>

            <p>
              &nbsp;&nbsp;]
            </p>

            <p>
              {"}"};
            </p>

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section id="about" className="section">

        <p className="section-label">
          ABOUT ME
        </p>

        <h2>
          Turning ideas into useful applications.
        </h2>

        <p className="section-description">
          I am a BCA graduate and aspiring software
          developer. I enjoy learning new technologies
          and creating practical projects using
          JavaScript and modern web development tools.
        </p>

      </section>


      {/* SKILLS */}

      <section id="skills" className="section">

        <p className="section-label">
          MY SKILLS
        </p>

        <h2>
          Technologies I work with
        </h2>

        <div className="skills-grid">

          {skills.map(([name, icon]) => (

            <div
              className="skill"
              key={name}
            >

              <span className="skill-icon">
                {icon}
              </span>

              <span>
                {name}
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* PROJECTS */}
<section id="projects" className="section projects-section">

  <p className="section-label">
    FEATURED PROJECT
  </p>

  <h2>
    School Management System
  </h2>

  <p className="section-description">
    A complete full-stack web application built to
    simplify and manage day-to-day school operations.
  </p>

  <div className="featured-project">

    <div className="project-visual">

      <div className="dashboard-window">

        <div className="dashboard-top">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="dashboard-content">

          <div className="dashboard-sidebar">
            <div className="side-logo">
              SMS
            </div>

            <div className="side-item active">
              Dashboard
            </div>

            <div className="side-item">
              Students
            </div>

            <div className="side-item">
              Teachers
            </div>

            <div className="side-item">
              Attendance
            </div>

          </div>

          <div className="dashboard-main">

            <h3>
              School Dashboard
            </h3>

            <div className="dashboard-cards">

              <div>
                <strong>1,250</strong>
                <small>Students</small>
              </div>

              <div>
                <strong>85</strong>
                <small>Teachers</small>
              </div>

              <div>
                <strong>32</strong>
                <small>Classes</small>
              </div>

            </div>

            <div className="chart-box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

        </div>

      </div>

    </div>


    <div className="featured-content">

      <div className="featured-badge">
        FULL STACK PROJECT
      </div>

      <h3>
        School Management System
      </h3>

      <p>
        A complete school management platform that
        provides an organized way to manage students,
        teachers, classes and attendance.
      </p>

      <div className="features">

        <div>
          <span>✓</span>
          Student Management
        </div>

        <div>
          <span>✓</span>
          Teacher Management
        </div>

        <div>
          <span>✓</span>
          Attendance Management
        </div>

        <div>
          <span>✓</span>
          Admin Dashboard
        </div>

      </div>

      <div className="tech-list">
  <span>HTML5</span>
  <span>CSS3</span>
  <span>JavaScript</span>
  <span>React.js</span>
  <span>Node.js</span>
  <span>Express.js</span>
  <span>SQL</span>
</div>

      <a
        href="#contact"
        className="project-button"
      >
        View Project →
      </a>

    </div>

  </div>

</section>


      {/* EDUCATION */}

      <section
        id="education"
        className="section"
      >

        <p className="section-label">
          EDUCATION
        </p>

        <h2>
          My academic background
        </h2>

        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div>

            <h3>
              Bachelor of Computer Applications (BCA)
            </h3>

            <p className="university">
              Guru Kashi University
            </p>

            <p>
              Computer Applications • Software
              Development • Data Structures
            </p>

          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section
        id="contact"
        className="section contact-section"
      >

        <p className="section-label">
          CONTACT
        </p>

        <h2>
          Let's work together.
        </h2>

        <p className="contact-intro">
          Have a project, internship opportunity
          or job opportunity? Send me a message.
        </p>

        <div className="contact-grid">

          <div className="contact-info">

            <div className="contact-item">
              <span>✉</span>
              <div>
                <small>Email</small>
                <p>saqibnazir248@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span>◉</span>
              <div>
                <small>GitHub</small>
                <p>https://github.com/saqibnazir248</p>
              </div>
            </div>

            <div className="contact-item">
              <span>in</span>
              <div>
                <small>LinkedIn</small>
                <p>https://www.linkedin.com/in/saqib-ahmad-252006374</p>
              </div>
            </div>

            <div className="contact-item">
              <span>⌖</span>
              <div>
                <small>Location</small>
                <p>India</p>
              </div>
            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />

            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="send-button"
            >
              Send Message 🚀
            </button>

            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </form>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <p>
          © 2026 Saqib Nazir. All rights reserved.
        </p>
      </footer>

    </div>
  );
}


export default App;