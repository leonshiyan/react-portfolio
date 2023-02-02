import NavBar from "../../components/NavBar"
import ProjectList from "../../components/ProjectList"
import styles from './Projects.module.css'

const Projects = (props) => {
  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <h1>Projects</h1>
        <ProjectList />
      </main>
      <footer className={styles.footer}>
        <p>© 2022 NO RIGHTS RESERVED</p>
      </footer>
    </>
  )
}
export default Projects