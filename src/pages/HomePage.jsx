import { Link } from "react-router-dom";
import FeatureLinks from "../components/FeatureLinks";

export default function HomePage() {

  return (
    <>
      <h1>Troy Shields <span>Senior Front End Developer</span></h1>
      
      <h2>Professional Profile</h2>
      <p>Seasoned Senior Front End Developer with 20+ years of experience, primarily in with the Drupal CMS, building accessible and user-centric websites. Expert in atomic design and passionate about delivering inclusive digital experiences. Actively integrating React into workflow to build modern, component-based applications and expand front-end development capabilities.</p>

      <h2>Technical Expertise</h2>
      <p>Proficient in managing the entire website lifecycle from concept to deployment. Experience encompasses strategic planning, build plan development, system configuration, and site architecture. Skilled in implementing and creating theming systems from scratch, conducting thorough accessibility reviews and remediations. Additionally, expertise extends to core and module updates via composer, preparing deprecated code for upgrades, and overseeing smooth deployments.</p>

      <h2>Current Focus</h2>
      <p>A highly motivated professional currently expanding expertise in React development with a commitment to creating user-friendly and engaging web applications. Actively developing personal projects to strengthen React concepts and best practices. Have fun playing some games, check out some <Link to="/projects">React projects</Link>.</p>

      <p>Also pursuing WAS and CPACC Accessibility certifications</p>

    </>
  )
}