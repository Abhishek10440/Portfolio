import './ParticleBackground.css'

const particles = Array.from({ length: 24 }, (_, index) => index)

const ParticleBackground = () => {
  return (
    <div className="particle-background" aria-hidden="true">
      {particles.map((particle) => (
        <span className="particle" key={particle}></span>
      ))}
    </div>
  )
}

export default ParticleBackground
