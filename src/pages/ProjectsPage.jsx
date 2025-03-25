
import { Link } from "react-router-dom";
import FeatureLinks from "../components/FeatureLinks";

export default function ProjectsPage() {

  return (
    <>
      <h1>Projects</h1>

      <p>
        <a href="https://github.com/troyshields" target="_blank" rel="noopener noreferrer">Check out GitHub</a> to see these projects and this entire site.
      </p>

      <h2>Games</h2>
      <ol>
        <li><Link to="/project-assembly">Assembly: Endgame</Link>
          <p>A hangman-like game.</p></li>
        <li><Link to="/project-tenzies">Tenzies</Link>
          <p>A rolling the dice game.</p></li>
      </ol>

      <h2>Concepts</h2>    
      <ol>
        <li><Link to="/project-meme">Meme Generator</Link>
          <p>This fetches images and demonstrates simple input interaction</p></li>
        <li><Link to="/project-recipe">Recipe Generator</Link>
          <p>This project, in theory, could hook up to AI in order to return recipes from an ingredient list.</p></li>
        <li><Link to="/project-stopwatch">Stopwatch</Link>
          <p>This illustrates useRef, useState and useEffect</p></li>
        <li><Link to="/project-pads">Pads</Link>
          <p>This illustrates the use of props and useState</p></li>
        <li><Link to="/project-temperature">Temperature conversion</Link>
          <p>This illustrates useState and getting the current value</p></li>
        <li><Link to="/project-userlist">Filter user list</Link>
          <p>This illustrates fetching data, useState and useEffect</p></li>
      </ol>

    </>
    

  )
}