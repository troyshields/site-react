import "../styles/Skills.css"
import skillsData from "../data/skills.json"

const skillsList = skillsData.skills.map(skill => <li key={skill.id}>{skill.title}</li>)

export default function Skills() {

  return (
    <>
      <div className="skills">

        <h2>Skills</h2>

        <ul>
          {skillsList}
        </ul>

      </div>
    </>
  )
}