import './Home.css'
import { TypeAnimation } from 'react-type-animation'
import man from '../../assets/man.png'
import ParticleBackground from '../ParticleBackground/ParticleBackground'

const Home = () => {
    return (
        <header id="home" className="home-header">
            <ParticleBackground />
            <div className="lefthome">
                <div className="homedetails">
                    <div className="line1">HELLO, I'M</div>
                    <div className="line2">Abhishek Gupta</div>
                    <div className="line3">
                        <TypeAnimation
                            sequence={[
                                "Frontend Developer", 2000,
                                "React Developer", 2000,
                                "Aspiring Full-Stack Developer", 2000,
                            ]}
                            speed={50}
                            deletionSpeed={40}
                            cursor={true}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="home-ctas">
                        <a className="btn" href="/Abhishek_Gupta_CV.pdf" download="Abhishek_Gupta_CV.pdf">Download CV</a>
                        <a className="btn" href="#projects">View Projects</a>
                        <a className="btn btn-ghost" href="#contact">Contact Me</a>
                    </div>
                    <div className="socials">
                        <a aria-label="GitHub profile" href="https://github.com/Abhishek10440" target="_blank" rel="noreferrer">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                            </svg>
                        </a>
                        <a aria-label="LinkedIn profile" href="https://www.linkedin.com/in/abhishek-gupta-932bb53a1/" target="_blank" rel="noreferrer">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M6.5 8.5H3.2V19h3.3V8.5ZM4.85 3A1.93 1.93 0 1 0 4.85 6.85 1.93 1.93 0 0 0 4.85 3ZM20.8 13.1c0-3.16-1.69-4.63-3.94-4.63-1.82 0-2.63 1-3.08 1.7V8.5h-3.3V19h3.3v-5.2c0-1.37.26-2.7 1.96-2.7 1.68 0 1.7 1.57 1.7 2.8V19h3.36v-5.9Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="righthome">
                <div className="profile-frame">
                  <img src={man} alt="Abhishek Gupta" />
                </div>
            </div>
        </header>
    )
}

export default Home
