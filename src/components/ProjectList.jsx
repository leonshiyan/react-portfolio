import projects from "../data/projects"
import { Button } from "react-bootstrap"
const ProjectList = (props) => {
  return (
    <>
      {projects.map((project, index) => (
        <section key={index}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
          <br />
          <a href={project.repositoryLink}>
            <Button>GitHub Repository</Button>
          </a>
          <br />
          <a href={project.deploymentLink}>
            <Button>Deployed Site</Button>
          </a>
        </section>
      ))}
    </>
  )
}
export default ProjectList