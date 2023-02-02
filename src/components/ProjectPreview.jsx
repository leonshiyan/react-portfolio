import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import hyphenateWords from "../utilities/hyphenateWords"

const ProjectPreview = (props) => {
  const hyphenatedTitle = hyphenateWords(props.title);
  return (
    <>
    <br />
      <h3>{props.title}</h3>
      <img 
          src={props.image} 
          alt={props.title}
      />
      <Link to={`/projects/${hyphenatedTitle}`}>
        <Button variant="info">Learn More</Button>
      </Link>
      <br />
      <br />
    </>
  )
}
export default ProjectPreview
