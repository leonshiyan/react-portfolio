import NavBar from "../../components/NavBar"
import styles from './Home.module.css'
import ProjectList from "../../components/ProjectList"

const Home = (props) => {
  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <div className={styles.about}>
          <header>
            <h1 >HI,I'M YAN SHI</h1>
            <h1 >A FULLSTACK DEVELOPER</h1>
            <h1 >BASED IN CANADA</h1>
          </header>
          <p>
            Full-stack developer with a strong desire to learn and grow in the industry. <br />
            Specializing in modern technologies and frameworks such as MERN stack.<br />
            Always looking for opportunities to expand skills and gain knowledge about new technologies.
          </p>
        </div>
        <div ></div>
        <div className={styles.projects}>
          <h1>Projects</h1>
          <ProjectList />
        </div>
        <div id="contact">
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
        </div>
      </main>
    </>
  )
}
export default Home