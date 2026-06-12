import './Skills.css'
import mern from '../../assets/mern.png'
import java from '../../assets/java.png'
import lang from '../../assets/lang.png'
import fw from '../../assets/fw.png'

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <img src={fw} alt="Frontend" />
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Bootstrap</p>
        </div>

        <div className="skill-card">
          <img src={mern} alt="Backend" />
          <h3>Backend</h3>
          <p>Node.js, Express.js</p>
        </div>

        <div className="skill-card">
          <img src={lang} alt="Database" />
          <h3>Database</h3>
          <p>MongoDB, MySQL</p>
        </div>

        <div className="skill-card">
          <img src={java} alt="Tools" />
          <h3>Tools</h3>
          <p>Git, GitHub, VS Code, Postman</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
