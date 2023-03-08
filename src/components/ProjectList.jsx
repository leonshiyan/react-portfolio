import { useState } from 'react';
import projects from "../data/projects";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProjectList = (props) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {projects.map((project, index) => (
          <Col key={index}>
            <Card
              bg="dark"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              style={{ position: 'relative' , margin : '20px 0'}}
            >
              <Card.Title>{project.title}</Card.Title>
              <Card.Img variant="top" src={project.image} alt={project.title} />
              {hoveredIndex === index && (
                <div
                  style={{
                    position: 'absolute',
                    top: 50,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                  }}
                >
                  <div>{project.description}</div>
                  <div>
                    <a href={project.repositoryLink}>
                      <button className="btn btn-primary">GitHub Repository</button>
                    </a>
                    <a href={project.deploymentLink}>
                      <button className="btn btn-primary">Deployed Site</button>
                    </a>
                  </div>
                </div>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProjectList;
