
import { Link } from "react-router-dom";
import FeatureLinks from "../components/FeatureLinks";
import "../styles/Projects.css"

export default function ProjectsPage() {

  return (
    <>
      <h1>Projects</h1>

      <p>
        <a href="https://github.com/troyshields" target="_blank" rel="noopener noreferrer">Check out GitHub</a> to see these projects and this entire site.
      </p>

      <h2>Games</h2>
      <ol className="project-list">
        <li><Link to="/project-assembly"><strong>Assembly: Endgame</strong>
          <p>A hangman-like game.</p></Link>
          </li>
        <li><Link to="/project-tenzies"><strong>Tenzies</strong>
          <p>A rolling the dice game.</p></Link>
          </li>
      </ol>

      <h2>Concepts</h2>    
      <ol className="project-list">
        <li><Link to="/project-meme"><strong>Meme Generator</strong>
          <p>Fetches images and demonstrates simple input interaction</p></Link>
          </li>
        <li><Link to="/project-recipe"><strong>Recipe Generator</strong>
        <p>In theory, this could hook up to AI and return recipes.</p></Link>
          </li>
        <li><Link to="/project-stopwatch"><strong>Stopwatch</strong>
          <p>This illustrates useRef, useState and useEffect</p></Link>
          </li>
        <li><Link to="/project-pads"><strong>Pads</strong>
          <p>This illustrates the use of props and useState</p></Link>
          </li>
        <li><Link to="/project-temperature"><strong>Temperature conversion</strong>
          <p>This illustrates useState and getting the current value</p></Link>
          </li>
        <li><Link to="/project-userlist"><strong>Filter user list</strong>
          <p>This illustrates fetching data, useState and useEffect</p></Link>
          </li>
      </ol>

    </>
    

  )
}