import projects from "../data/projects"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const ProjectList = (props) => {
  return (
    <>
    <Row xs={1} md={3} className="g-4">
      {projects.map((project, index) => (
        <Col>
          <Card key={index} bg="dark">
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Card.Img variant="top" src={project.image} alt={project.title}/>
              <a href={project.repositoryLink}>
                <button class="btn btn-primary">GitHub Repository</button>
              </a>
              <br />
              <a href={project.deploymentLink}>
                <button class="btn btn-primary">Deployed Site</button>
              </a>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}
export default ProjectList