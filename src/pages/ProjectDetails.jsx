import projects from "../data/projects";

const ProjectDetails = () => {
  const project = projects[0];

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <br />
      <a href={project.repositoryLink}>
        <button>GitHub Repository</button>
      </a>
      <br />
      <a href={project.deploymentLink}>
        <button>Deployed Site</button>
      </a>
    </div>
  );
};

export default ProjectDetails;
