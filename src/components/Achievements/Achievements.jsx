import './Achievements.css'
import cross from '../../assets/cross.svg'

const Achievements = () => {
  return (
    <section id="achievements" className="ach-section">
      <h2 className="section-title">Achievements</h2>
      <div className="ach-list">
        <div className="ach-card">
          <img src={cross} alt="" aria-hidden="true"/>
          <div>
            <h3>Developed a production-ready AI Chatbot</h3>
            <p>Built and deployed a conversational AI chatbot using React and AI APIs.</p>
          </div>
        </div>

        <div className="ach-card">
          <img src={cross} alt="" aria-hidden="true"/>
          <div>
            <h3>Multiple Open-source Projects</h3>
            <p>Published several projects on GitHub demonstrating full-stack skills.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
