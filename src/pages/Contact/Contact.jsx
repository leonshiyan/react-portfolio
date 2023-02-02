import NavBar from "../../components/NavBar"
import styles from './Contact.module.css'
import { Button } from "react-bootstrap"

const Contact = (props) => {
  return (
    <>
      <NavBar/>
      <main className={styles.container}>
      <h1>Contact</h1>
        <Button variant="outline-info" size="lg">
          <a href="mailto:leonshiyan@email.com">Send Email</a>
        </Button>
        <br />
        <Button variant="outline-info" size="lg">
          <a href="https://www.linkedin.com/in/leonshiyan/">LinkedIn</a>
        </Button>
        <br />
        <Button variant="outline-info" size="lg">
          <a href=" https://github.com/leonshiyan">Github</a>
        </Button>
        <br />
      </main>
      <footer className={styles.footer}>
        <p>© 2022 NO RIGHTS RESERVED</p>
      </footer>
    </>
  )
}
export default Contact