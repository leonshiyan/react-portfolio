import NavBar from "../../components/NavBar"
import styles from './Home.module.css'
import ProjectList from "../../components/ProjectList"

const Home = (props) => {
  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <div className={styles.about} id="about">
          <header>
            <h1 >HI,I'M YAN SHI</h1>
            <h1 >A <span>FULLSTACK DEVELOPER</span></h1>
            <h1>
              BASED IN <span style={{ color: 'red' }}>C</span>
              <span style={{ color: 'white' }}>A</span>
              <span style={{ color: 'red' }}>NA</span>
              <span style={{ color: 'white' }}>D</span>
              <span style={{ color: 'red' }}>A</span>
            </h1>
          </header>
          <p>
            Full-stack developer with a strong desire to learn and grow in the industry. <br />
            Specializing in modern technologies and frameworks such as MERN stack.<br />
            Always looking for opportunities to expand skills and gain knowledge about new technologies.
          </p>
        </div>
        <div className={styles.projects} id="projects">
          <h1>PROJECTS</h1>
          <ProjectList />
        </div>
        <div className={styles.skills} id="skills">
          <h1>Skills</h1>
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <h2 style={{ color: '#61dafb' }}>Front-End</h2>
                <ul class="list-unstyled">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Bootstrap</li>
                  <li>React.js</li>
                </ul>
              </div>
              <div class="col-md-4">
                <h2 style={{ color: '#0E8388' }}>Back-End</h2>
                <ul class="list-unstyled">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>RESTful APIs</li>
                  <li>PostgreSQL</li>
                  <li>OAuth 2.0 and JWT</li>
                </ul>
              </div>
              <div class="col-md-4">
                <h2 style={{ color: '#D9ACF5' }}>Other Skills</h2>
                <ul class="list-unstyled">
                  <li>Git</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>Problem Solving</li>
                  <li>Collaboration</li>
                  <li>Communication</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div id="contact">
          <h1>LET'S TALK</h1>
          <button class="btn btn-primary">
            <a href="mailto:leonshiyan@email.com">Send Email</a>
          </button>
          <br />
          <button class="btn btn-primary">
            <a href="https://www.linkedin.com/in/leonshiyan/">LinkedIn</a>
          </button>
          <br />
          <button class="btn btn-primary">
            <a href=" https://github.com/leonshiyan">Github</a>
          </button>
          <br />
        </div>
      </main>
    </>
  )
}
export default Home