import projects from "../data/projects"
import hyphenateWords from "./hyphenateWords"

function findProject(title) {
  const hyphenatedTitle = hyphenateWords(title);
  return projects.filter(project => hyphenateWords(project.title) === hyphenatedTitle)[0];
}

export default findProject