import NavBar from "../../components/NavBar"
import styles from './Home.module.css'
import ProjectList from "../../components/ProjectList"

const Home = (props) => {
  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <section id="about">
          <header>
            <h1 >HI,I'M YAN SHI</h1>
            <h1 >A FULLSTACK DEVELOPER</h1>
            <h1 >BASED IN CANADA</h1>
          </header>
          <p>
            Full-stack developer with a strong desire to learn and grow in the industry.
          </p>
          <p>
            Specializing in modern technologies and frameworks such as MERN stack.
          </p>
          <p>
            Always looking for opportunities to expand skills and gain knowledge about new technologies.
          </p>
        </section>
        <div id="projects">
          <h1>Projects</h1>
          <ProjectList />
        </div>
        <section id="contact">
          <h1>Contact</h1>
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
        </section>
      </main>
    </>
  )
}
export default Home