import { Link } from "react-router-dom"
import hyphenateWords from "../utilities/hyphenateWords"

const ProjectPreview = (props) => {
  const hyphenatedTitle = hyphenateWords(props.title);
  return (
    <>
      <div>
        <img 
            src={props.image} 
            alt={props.title}
        />
        <section>
            <h3>
                {props.title}
            </h3>
            <Link to={`/projects/${hyphenatedTitle}`}>
              <button>Learn More</button>
            </Link>
        </section>
      </div>
    </>
  )
}
export default ProjectPreview
