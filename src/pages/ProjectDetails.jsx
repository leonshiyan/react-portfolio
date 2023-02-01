import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import findProject from "../utilities/findProject"

const ProjectDetails = () => {
  const { projectDetails } = useParams()
  const project = findProject(projectDetails);

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

export default ProjectDetails
