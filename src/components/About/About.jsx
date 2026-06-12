import './About.css'

const About = () => {
  return (
    <section id="about">
      <div className="leftabout">
        <div className="circle-line" aria-hidden="true">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="aboutdetails">
          <div className="aboutinfo">
            <p className="section-kicker">About me</p>
            <h2>Professional Summary</h2>
            <p>Frontend developer specializing in React.js, with experience building responsive, accessible, and performant web applications. I also have strong foundations in data structures, algorithms, REST APIs, and AI-powered demos.</p>
          </div>

          <div className="aboutinfo">
            <h2>Education</h2>
            <ul>
              <li><span>Degree:</span> B.Sc. Computer Science</li>
              <li><span>Status:</span> Completed</li>
              <li><span>CGPA:</span> 7.2</li>
            </ul>
          </div>

          <div className="aboutinfo">
            <h2>Career Objective</h2>
            <p>I am seeking frontend opportunities where I can build thoughtful user interfaces, grow with modern web architecture, and ship polished products for real users.</p>
          </div>
        </div>
      </div>

      <div className="rightabout" aria-label="Core strengths">
        <div className="rightbox">Frontend Developer</div>
        <div className="rightbox">React <span aria-hidden="true">•</span> JavaScript</div>
        <div className="rightbox">MERN <span aria-hidden="true">•</span> DSA</div>
      </div>
    </section>
  )
}

export default About
