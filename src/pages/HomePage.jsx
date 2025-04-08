import { Link } from "react-router-dom"
import FeatureLinks from "../components/FeatureLinks"
import Hero from "../components/Hero";
import Skills from "../components/Skills";

export default function HomePage() {

  return (
    <>
 
      <Hero/>

      <p className="intro">
      A seasoned front-end developer with over 20 years of experience crafting accessible and user-centric digital experiences, I'm now driving a strategic shift towards modern React development. My extensive background in Drupal, including deep expertise in atomic design, theming, and full website lifecycle management, provides a robust foundation for building scalable, component-based React applications.</p>

      <Skills/>

      <div className="key-strengths">
        <h2>Key Strengths</h2>
        <div className="key-strengths-items">
          <h3>Extensive Experience:</h3>
          <p>20+ years in front-end development, specializing in Drupal CMS, atomic design, and accessibility.</p>
          <h3>Full Lifecycle Mastery:</h3>
          <p>Proven ability to manage projects from concept through deployment, including strategic planning, architecture, and maintenance.</p>
          <h3>Accessibility Champion:</h3>
          <p>Passionate about inclusive design, with ongoing pursuit of WAS and CPACC certifications.</p>
          <h3>Problem Solver:</h3>
          <p>Proven ability to navigate complex technical challenges, including code upgrades and system configurations.</p>
          <h3>React Development:</h3>
          <p>I'm actively integrating React into my workflow, leveraging my established understanding of component-based architecture and atomic design to rapidly build dynamic, scalable applications. My experience in creating and maintaining complex theming systems translates directly to crafting reusable React components, allowing me to quickly deliver robust and user-friendly interfaces. Explore my <Link to="/projects">React projects</Link> and see my skills in action!</p>
        </div>
      </div>

    </>
  )
}