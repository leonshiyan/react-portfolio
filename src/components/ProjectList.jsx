import projects from "../data/projects"
import ProjectPreview from "./ProjectPreview"
const ProjectList = (props) => {
  return (
    <>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectPreview title={project.title} image={project.image}/>
          </li>
        ))}
      </ul>
    </>
  )
}
export default ProjectList