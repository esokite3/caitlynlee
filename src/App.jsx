import { useState } from 'react';
import { Rnd } from 'react-rnd';
import { jsPDF } from 'jspdf';
import './index.css';

import profilePic from './assets/CaitlynLee-Headshot.jpg'
import folderIcon from './assets/folder-icon.png';
import githubIcon from './assets/github.png';
import linkedinIcon from './assets/linkedin.png';
import mailIcon from './assets/mail-icon.png';
import memojiIcon from './assets/memoji.ico';
import messageIcon from './assets/message.png';
import noiseBackground from './assets/noise.png';
import pdfIcon from './assets/pdf-icon.png';
import resume from './assets/Resume-CaitlynLee.jpg';
import textIcon from './assets/text-icon.png';
import wallpaper from './assets/wallpaper.jpg';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [openWindows, setOpenWindows] = useState({});
  const [zoom, setZoom] = useState(1);

  const handleLoginKey = (e) => {
    if (e.key === 'Enter') {
      setLoggedIn(true);
    }

    // Delay showing desktop to let animation play
    setTimeout(() => setLoggedIn(true), 1000);
  }

  const toggleWindow = (id, action) => {
    setOpenWindows(prev => {
      const current = prev[id] || { visible: false, minimized: false, maximized: false };
      if (action === 'open') return { ...prev, [id]: { ...current, visible: true, minimized: false } };
      if (action === 'close') return { ...prev, [id]: { ...current, visible: false } };
      if (action === 'minimize') return { ...prev, [id]: { ...current, minimized: !current.minimized } };
      if (action === 'maximize') return { ...prev, [id]: { ...current, maximized: !current.maximized } };
      return prev;
    });
  };

  const downloadPDF = () => {
    const pdf = new jsPDF();
    const img = document.getElementById('resume-image');
    if (img) pdf.addImage(img, 'JPEG', 10, 10, 190, 0);
    pdf.save('Caitlyn_Lee_Resume.pdf');
  };

  const printImage = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<img src="${resume}" style="width:100%"/>`);
    printWindow.document.close();
    printWindow.print();
  };

  const zoomIn = () => setZoom(prev => Math.min(prev + 0.25, 2));
  const zoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));

  const Window = ({ id, title, children }) => {
    const state = openWindows[id] || {};
    if (!state.visible) return null;

    const minimizedStyle = state.minimized ? { height: '40px', width: '200px' } : {};
    const maximizedStyle = state.maximized ? { top: 0, left: 0, width: '100vw', height: '100vh' } : {};

    return (
      <Rnd default={{ x: 100, y: 100, width: 400, height: 300 }} minWidth={300} minHeight={200} style={{ zIndex: 9999 }}>
        <div className={`window show ${state.maximized ? 'maximized' : ''} ${state.minimized ? 'minimized' : ''}`} style={{ ...minimizedStyle, ...maximizedStyle }}>
          <div className="window-header">
            <div className="window-controls">
              <div className="window-control close" onClick={() => toggleWindow(id, 'close')}></div>
              <div className="window-control minimize" onClick={() => toggleWindow(id, 'minimize')}></div>
              <div className="window-control maximize" onClick={() => toggleWindow(id, 'maximize')}></div>
            </div>
            <div className="window-title">{title}</div>
            <div className="window-spacer"></div>
          </div>
          <div className="window-content">{children}</div>
        </div>
      </Rnd>
    );
  };

  if (!loggedIn) {
    return (
      <div
        className={`login-screen ${loggingIn ? 'fade-out' : ''}`}
        tabIndex={0}
        onKeyDown={handleLoginKey}
      >
        <div className="login-box">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h2>Caitlyn's Portfolio</h2>
          <div className="login-input">
            <span>Press Enter to log in</span>
            <div className="arrow">→</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="noise-container" style={{ backgroundImage: `url(${noiseBackground})` }}>
      {/* Intro message */}
      <div className="fake-text-message">
        <div className="bubble">
          <img src={messageIcon} alt="Text message" className="message-icon" />
          <div className="text-content">
            <div className="text-name"><strong>Caitlyn</strong></div>
            <div className="text-body">Hey! Thanks for visiting my website. It's still a work in progress 😄</div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className={`desktop ${loggedIn ? 'show' : ''}`} style={{ backgroundImage: `url(${wallpaper})` }}>
        <div className="folder" onClick={() => toggleWindow('home', 'open')}>
          <img src={folderIcon} alt="Home" className="folder-icon" />
          <div className="folder-name">Home</div>
        </div>
        <div className="folder" onClick={() => toggleWindow('experience', 'open')}>
          <img src={folderIcon} alt="Experience" className="folder-icon" />
          <div className="folder-name">Experience & Projects</div>
        </div>
        <div className="folder" onClick={() => toggleWindow('socials', 'open')}>
          <img src={folderIcon} alt="Socials" className="folder-icon" />
          <div className="folder-name">Socials</div>
        </div>
      </div>

      {/* Home Window */}
      <Window id="home" title="Home">
        <div className="file" onClick={() => toggleWindow('about', 'open')}>
          <img src={textIcon} className="file-icon" alt="Text file" />
          <span className="file-name">about_me.txt</span>
        </div>
      </Window>

      {/* About Me */}
      <Window id="about" title="about_me.txt">
        <pre>
Hello! I'm Caitlyn 👋
I am an undergraduate student at UC San Diego majoring in Computer Science and minoring in Business Analytics.

I've been doing some form of art for the majority of my life, but this took a shift once I got to college. I aspire to find the art in technology to combine two of my identities.

Besides my academic career, I am a huge basketball fan! I created a Clippers Stat Tracker, a tool that displays data about the current LA Clippers roster.

I hope you enjoy the rest of my portfolio!

Last modified: Tue Nov 4 13:43:58
        </pre>
      </Window>

      {/* Experience */}
      <Window id="experience" title="Experience & Projects">
        <div className="file" onClick={() => toggleWindow('experienceTxt', 'open')}>
          <img src={textIcon} className="file-icon" alt="Text file" />
          <span className="file-name">experience_projects.txt</span>
        </div>
        <div className="file" onClick={() => toggleWindow('resume', 'open')}>
          <img src={pdfIcon} className="file-icon" alt="PDF file" />
          <span className="file-name">resume.pdf</span>
        </div>
      </Window>

      {/* Resume */}
      <Window id="resume" title="resume.jpg">
        <div className="image-toolbar">
          <button className="toolbar-btn" onClick={downloadPDF}>Download</button>
          <button className="toolbar-btn" onClick={printImage}>Print</button>
          <div className="zoom-controls">
            <button className="toolbar-btn" onClick={zoomOut}>-</button>
            <span>{Math.round(zoom * 100)}%</span>
            <button className="toolbar-btn" onClick={zoomIn}>+</button>
          </div>
        </div>
        <div className="image-content">
          <img id="resume-image" src={resume} alt="Resume" style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }} />
        </div>
      </Window>

      {/* Experience text */}
      <Window id="experienceTxt" title="experience_projects.txt">
        <p>
          <strong>EXPERIENCE</strong><br /><br />
          <strong>Current</strong><br />
          01  <em>Undergraduate Research Assistant @ UCSD</em><br />
          • Lead a team of students on an image annotation project of 1000+ images of avocado trees using Label Studio.
          • Prepare datasets for future machine learning model development by organizing image files and metadata.
          • Begin development of machine learning models for phenotype classification and object detection, leveraging Python, TensorFlow, and PyTorch
          <br /><br />
          02  <em>PR/Marketing @ EDGE</em><br />
          • Lead marketing and public relations efforts for EDGE, a mentorship program jointly run by Women in Computing (WiC) and the Society of Women Engineers (SWE) at UCSD.
          • Develop and manage social media campaigns, newsletters, and event promotions to boost visibility and engagement.
          • Create digital and print materials (flyers, graphics, recaps) that highlight EDGE’s mission to empower young women in STEM.
          • Collaborate with event and outreach teams to ensure consistent branding and effective communication across all channels.
          <br /><br />
          03  <em>Sports Marketing @ KSDT Sports</em><br />
          Marketing sporting events, creating graphics, and managing social media accounts.<br /><br />
          <strong>Previous</strong><br />
          01  <em>Software Engineering Program Participant @ BASTA x Google</em><br />
          • Selected as one of 219 students from 2,600+ applicants for a 10 week SWE mentorship with a Google Software Engineer.
          • Solve LeetCode-style algorithmic problems weekly, applying optimization strategies and debugging techniques.
          • Participate in mock interviews and receive code review feedback to strengthen software engineering skills.
          <br /><br />
          02  <em>Summer Immersion Program @ Girls Who Code</em><br />
          Learned web development and built a portfolio using HTML, CSS, and JavaScript.<br /><br />
          <strong>PROJECTS</strong><br /><br />
          01  <em>Educational Web Game</em><br />
          • Collaborating in a team of 6 to design and develop an online educational game for 3rd-4th grade students with an anticipated tech stack of Typescript.
          • Applying Agile principles including sprint planning, task tracking, and iterative feedback to guide development.
          • Leading early-stage design discussions and contributing to requirements analysis, UI/UX wireframes in Figma, and feature planning.<br /><br />
          01  <em>Bikeshare Data Analysis</em><br />
          • Developing a full-stack web application using React (frontend) and Spring Boot (backend) with AWS DynamoDB backend to track LA Clippers player profiles, career averages, and last 5 games performance statistics.
          • Deployed backend REST API on Heroku and frontend on Vercel with continuous integration via GitHub, implementing environment-specific configurations for seamless production deployment.
          • Integrated AWS SDK for Java to query DynamoDB tables and serve JSON responses for dynamic frontend rendering.<br /><br />
          01  <em>Bikeshare Data Analysis</em><br />
          • Analyzed ~1M bike share records using Python (pandas, NumPy, Scikit-learn) to study correlation between ridership and daylight patterns.
          • Conducted EDA and regression modeling (OLS) to analyze ridership trends, finding membership type as the strongest predictor of trip duration.
          • Collaborated in a team of 5 via Git/GitHub, debugging scripts and ensuring reproducibility across environments.<br /><br />
          <span className="resume-link" onClick={() => toggleWindow('resume', 'open')}>Check out my resume for more details!</span>
        </p>
      </Window>

      {/* Socials */}
      <Window id="socials" title="Socials">
        <div className="socials-content">
          <a href="https://www.linkedin.com/in/caitlyn-lee3" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/esokite3" target="_blank">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
            <span>GitHub</span>
          </a>
          <a href="mailto:leecaitlyn33@gmail.com">
            <img src={mailIcon} alt="Email" className="social-icon" />
            <span>Mail</span>
          </a>
        </div>
      </Window>
    </div>
  );
}