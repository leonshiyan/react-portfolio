import NavBar from "../components/NavBar"
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

const Home = (props) => {
  return (
    <>
      <NavBar />
      <Container fluid="md" style={{ backgroundColor: "#388", width: "100vw" ,height : "100vh"}}>
      <Row>
        <Col className="my-5">
            <h1 className="my-2">Welcome to my Page</h1>
            <h3 className="my-2">My name is Yan Shi</h3>
            <h4 className="my-2">A software engineer</h4>
            <Image src="pics/rsz_mypic.jpg" alt="mypicture" />
        </Col>
      </Row>
      </Container>
    </>
  )
}
export default Home