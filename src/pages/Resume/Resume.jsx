import NavBar from "../../components/NavBar"
import styles from './Resume.module.css'
const Resume = () => {
  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <h1>Resume</h1>
        <div>
          <a href={process.env.PUBLIC_URL + 'YAN SHI-Fullstack .pdf'} download>
            Download my resume as PDF
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2022 NO RIGHTS RESERVED</p>
      </footer>
    </>
  )
}
export default Resume