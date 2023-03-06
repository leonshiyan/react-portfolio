import NavBar from "../../components/NavBar"
import styles from './Home.module.css'

const Home = (props) => {
  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <section className={styles.about}>
          <header>
            <h1 >Welcome to my Page</h1>
            <h3 >My name is Yan Shi</h3>
            <h4 >A software engineer</h4>
          </header>
          <img src='/pics/rsz_mypic.jpg' alt="My" />
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
      </main>

    </>
  )
}
export default Home