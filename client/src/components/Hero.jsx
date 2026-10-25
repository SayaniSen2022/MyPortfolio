import { useEffect, useRef, useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import { FaArrowDown, FaArrowUpRightFromSquare, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineCodeBracket, HiOutlineCommandLine, HiOutlineCube, HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { SiAnthropic, SiBootstrap, SiChakraui, SiCss3, SiExpress, SiFastapi, SiGit, SiGithub, SiHtml5, SiJavascript, SiJquery, SiJsonwebtokens, SiMysql, SiNextdotjs, SiNodedotjs, SiOpenai, SiPostgresql, SiPostman, SiPydantic, SiPython, SiReact, SiRedux, SiSwagger, SiTailwindcss, SiTypescript } from "react-icons/si";
import "./Hero.css";

const projects = [
  { number: "01", name: "Hypertensive.io", type: "Open-source health tracker", description: "A clear, data-led way to log blood-pressure readings and understand progress over time.", tags: ["React", "Data UI"], image: "./images/H-io.jpg", imageAlt: "Hypertensive.io application interface", url: "https://hypertensive-io.netlify.app/statistics" },
  { number: "02", name: "Little Lemon", type: "Restaurant experience", description: "A responsive restaurant site with a thoughtful reservation journey, built for Meta’s front-end capstone.", tags: ["React", "Responsive"], image: "./images/LittleLemon.jpg", imageAlt: "Little Lemon restaurant application interface", url: "https://github.com/SayaniSen2022/Capstone" },
];
const socials = [
  { label: "GitHub", icon: FaGithub, url: "https://github.com/SayaniSen2022" },
  { label: "LinkedIn", icon: FaLinkedinIn, url: "https://www.linkedin.com/in/sayani-sen-535749147/" },
];
const skills = [
  ["Languages", "JavaScript", "TypeScript", "Python"],
  ["Frontend", "React", "Next.js", "HTML", "CSS", "jQuery"],
  ["State management", "Redux", "Redux Toolkit", "Context API"],
  ["Styling & UI", "Tailwind CSS", "Bootstrap", "Chakra UI"],
  ["Backend & APIs", "Node.js", "Express.js", "FastAPI", "RESTful APIs", "JWT", "Pydantic"],
  ["Databases", "PostgreSQL", "MySQL"],
  ["Tools", "Git", "GitHub", "Swagger", "Postman"],
  ["AI tools", "Claude", "Codex", "MCP", "Promptfoo", "Tool Calls"],
];
const skillIcons = {
  JavaScript: SiJavascript, TypeScript: SiTypescript, Python: SiPython,
  React: SiReact, "Next.js": SiNextdotjs, HTML: SiHtml5, CSS: SiCss3, jQuery: SiJquery,
  Redux: SiRedux, "Redux Toolkit": SiRedux, "Context API": HiOutlineCube,
  "Tailwind CSS": SiTailwindcss, Bootstrap: SiBootstrap, "Chakra UI": SiChakraui,
  "Node.js": SiNodedotjs, "Express.js": SiExpress, FastAPI: SiFastapi, "RESTful APIs": HiOutlineCommandLine, JWT: SiJsonwebtokens, Pydantic: SiPydantic,
  PostgreSQL: SiPostgresql, MySQL: SiMysql, Git: SiGit, GitHub: SiGithub, Swagger: SiSwagger, Postman: SiPostman,
  Claude: SiAnthropic, Codex: SiOpenai, MCP: HiOutlineCommandLine, Promptfoo: HiOutlineCommandLine, "Tool Calls": HiOutlineCommandLine,
};

const TerminalPrompt = () => {
  const [showCow, setShowCow] = useState(false);
  const [cowVersion, setCowVersion] = useState(0);
  const cowTimer = useRef(null);
  useEffect(() => () => clearTimeout(cowTimer.current), []);
  const [cursor, setCursor] = useState({ position: 0, scroll: 0, selected: false });
  const syncCursor = (event) => {
    const input = event.currentTarget;
    setCursor({
      position: input.selectionStart ?? 0,
      scroll: input.scrollLeft,
      selected: input.selectionStart !== input.selectionEnd,
    });
  };

  return (
    <>
    <label className="terminal-cursor">
      <span>sayani@portfolio:~$</span>
      <div className="terminal-input-wrap">
        <input
          className="terminal-input"
          type="text"
          aria-label="Terminal prompt"
          autoComplete="off"
          autoCapitalize="none"
          spellCheck={false}
          onChange={syncCursor}
          onSelect={syncCursor}
          onScroll={syncCursor}
          onKeyUp={syncCursor}
          onFocus={syncCursor}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.nativeEvent.isComposing) {
              event.preventDefault();
              if (event.currentTarget.value.trim()) {
                clearTimeout(cowTimer.current);
                event.currentTarget.value = "";
                event.currentTarget.scrollLeft = 0;
                setCursor({ position: 0, scroll: 0, selected: false });
                setCowVersion((version) => version + 1);
                setShowCow(true);
                cowTimer.current = setTimeout(() => setShowCow(false), 5000);
              }
            }
          }}
        />
        <b
          className="terminal-block-cursor"
          aria-hidden="true"
          style={{
            left: `clamp(0px, calc(${cursor.position}ch - ${cursor.scroll}px), calc(100% - 1ch))`,
            visibility: cursor.selected ? "hidden" : "visible",
          }}
        />
      </div>
    </label>
    {showCow && (
      <div key={cowVersion} className="terminal-response" role="status" aria-label="Cow says: this is not a real terminal.">
        <pre aria-hidden="true">{[
          " ______________________________",
          "< this is not a real terminal. >",
          " ------------------------------",
          "        \\   ^__^",
          "         \\  (oo)\\_______",
          "            (__)\\       )\\/\\",
          "                ||----w |",
          "                ||     ||",
        ].join("\n")}</pre>
      </div>
    )}
    </>
  );
};

const Hero = () => {
  const { colorMode: theme, setColorMode: setTheme } = useColorMode();
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#2e3440" : "#eceff4");
  }, [theme]);
  return (
  <main className="portfolio-shell">
    <section className="portfolio" aria-labelledby="intro-title">
      <header className="topbar">
        <button className="wordmark" type="button" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><span className="prompt">~/</span>sayani-sen</button>
        <button className="theme-toggle" type="button" role="switch" aria-checked={theme === "dark"} aria-label="Dark mode" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <HiOutlineMoon aria-hidden="true" /> : <HiOutlineSun aria-hidden="true" />}
        </button>
      </header>
      <div className="hero-grid" id="top">
        <div className="terminal-window">
          <div className="terminal-bar"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>sayani@portfolio:~</span></div>
          <div className="intro-copy">
            <p className="command"><span>sayani@portfolio:~$</span> whoami</p>
            <h1 id="intro-title">Sayani Sen<span className="period">.</span></h1>
            <p className="role">software developer</p>
            <p className="command command-second"><span>sayani@portfolio:~$</span> cat about.txt</p>
            <p className="summary">I am a software developer specializing in frontend development, building intuitive, responsive, and scalable web applications with a strong understanding of backend technologies.</p>
            <TerminalPrompt />
            <div className="hero-actions"><button className="button button-primary" type="button" onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}>view projects <span aria-hidden="true">↓</span></button><a className="button button-quiet" href="./Sayani_Sen-Resume.pdf" download="SayaniSen-Resume.pdf">download CV <FaArrowDown aria-hidden="true" /></a></div>
          </div>
        </div>
        <aside className="profile-card" aria-label="Developer profile">
          <div className="card-header"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>developer.profile</span></div>
          <div className="portrait-wrap"><img src="./images/profile.jpg" alt="Sayani Sen" /></div>
          <div className="profile-meta"><p><span>role</span><b>Software Developer</b></p><p><span>based in</span><b>India / remote</b></p><p><span>experience</span><b>2+ years</b></p></div>
        </aside>
      </div>
      <section className="skills-section" aria-labelledby="skills-heading">
        <div className="section-label"><span>01</span><h2 id="skills-heading"><HiOutlineCodeBracket aria-hidden="true" /> Technical skills</h2></div>
        <div className="skills-table" role="table" aria-label="Technical skills">{skills.map(([category, ...items]) => <div className="skill-row" role="row" key={category}><h3 role="cell">{category}</h3><div className="skill-pills" role="cell">{items.map((item) => { const Icon = skillIcons[item] ?? HiOutlineCommandLine; return <span className="skill-pill" key={item}><Icon aria-hidden="true" />{item}</span>; })}</div></div>)}</div>
      </section>
      <section className="work-section" id="work" aria-labelledby="work-heading">
        <div className="section-label"><span>02</span><h2 id="work-heading">Projects</h2></div>
        <div className="project-list">{projects.map((project) => <a className="project" href={project.url} target="_blank" rel="noreferrer" key={project.name}><span className="project-no">{project.number}</span><div className="project-preview"><img src={project.image} alt={project.imageAlt} /></div><div className="project-main"><h3>{project.name}</h3><p>{project.description}</p></div><div className="project-side"><span>{project.type}</span><div>{project.tags.map((tag) => <em key={tag}>{tag}</em>)}</div></div><FaArrowUpRightFromSquare className="project-arrow" aria-hidden="true" /></a>)}</div>
      </section>
      <footer className="site-footer"><p>© {new Date().getFullYear()} Sayani Sen</p><div className="footer-actions"><a className="footer-email" href="mailto:sayanisen.official@gmail.com"><FaEnvelope aria-hidden="true" />sayanisen.official@gmail.com</a><div className="social-links">{socials.map(({ label, icon: Icon, url }) => <a className="social-link" key={label} href={url} target="_blank" rel="noreferrer" aria-label={label}><Icon /></a>)}</div></div></footer>
    </section>
  </main>
  );
};
export default Hero;
