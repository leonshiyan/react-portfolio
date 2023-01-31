import projects from "../data/projects"
const ProjectList = (props) => {
  return (
    <>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project.title}</li>
        ))}
      </ul>
    </>
  )
}
export default ProjectList