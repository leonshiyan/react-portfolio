import NavBar from "../../components/NavBar"
import styles from './About.module.css'

const About = (props) => {
  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <section className={styles.about}>
          <header>
            <h1>About Page</h1>
            <article>
              <p>
                Full-stack developer with a strong desire to learn and grow in the industry.Specializing in modern technologies and frameworks such as MERN stack.Always looking for opportunities to expand skills and gain knowledge about new technologies.
              </p>
            </article>
            <section className={styles.splash}>
              <img src='/pics/rsz_mypic.jpg' alt="A cute owl" />
            </section>
          </header>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2022 NO RIGHTS RESERVED</p>
      </footer>
    </>
  )
}
export default About