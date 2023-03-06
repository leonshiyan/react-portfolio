import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import hyphenateWords from "../utilities/hyphenateWords"

const ProjectPreview = (props) => {
  const hyphenatedTitle = hyphenateWords(props.title);
  return (
    <>
    <br />
      <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src={props.image} alt={props.title} />
      <br />
      <a href={props.repositoryLink}>
        <button>GitHub Repository</button>
      </a>
      <br />
      <a href={props.deploymentLink}>
        <button>Deployed Site</button>
      </a>
    </div>
      <br />
      <br />
    </>
  )
}
export default ProjectPreview
