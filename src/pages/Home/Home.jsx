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
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2022 NO RIGHTS RESERVED</p>
      </footer>
    </>
  )
}
export default Home