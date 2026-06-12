import './Projects.css'
import br from '../../assets/br.png'
import tti from '../../assets/tti.png'
import dsa from '../../assets/dsa.png'

const projects = [
  {
    title: 'AI Chat Bot React',
    img: tti,
    desc: 'A conversational AI chatbot built with React and integrated with AI APIs.',
    tech: 'React, CSS, AI API',
    github: 'https://github.com/Abhishek10440/Chat-bot-react',
    live: 'https://chat-bot-react-lake.vercel.app/'
  },
  {
    title: 'E-Commerce Fake API',
    img: br,
    desc: 'E-Commerce frontend using a fake API for product listings and cart flows.',
    tech: 'React, Fake REST API',
    github: 'https://github.com/Abhishek10440/ecommerce-app-Fake-API',
    live: ''
  },
  {
    title: 'GoDDell Store',
    img: dsa,
    desc: 'Retail-style ecommerce demo showcasing product browsing and filtering.',
    tech: 'React, Context API, CSS',
    github: 'https://github.com/Abhishek10440/GoDDell-Store',
    live: ''
  },
  {
    title: 'XAI Healthcare Demonstrator',
    img: tti,
    desc: 'Explainable AI demonstrator for healthcare use-cases.',
    tech: 'React, Machine Learning Integration',
    github: 'https://github.com/Abhishek10440/XAI-Healthcare-Demonstrator',
    live: ''
  },
  {
    title: 'Silent Signal',
    img: br,
    desc: 'Signal processing visualization and demo project.',
    tech: 'React, Visualization',
    github: 'https://github.com/Abhishek10440/silent-signal',
    live: ''
  }
]

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.title}>
            <div className="project-media">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              <p className="proj-tech">Tech: {p.tech}</p>
              <div className="proj-actions">
                <a href={p.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
                {p.live ? <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-ghost">Live</a> : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
