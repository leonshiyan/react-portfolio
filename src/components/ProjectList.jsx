import projects from "../data/projects"
import ProjectPreview from "./ProjectPreview"
const ProjectList = (props) => {
  return (
    <>
      {projects.map((project, index) => (
        <section key={index}>
          <ProjectPreview title={project.title} image={project.image}/>
        </section>
      ))}
    </>
  )
}
export default ProjectList