import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>A Co-operative Approach to Education</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Non-Profit Pouches supplies high-quality lockable phone pouches (similar to Yondr) to parents and schools,
              helping to create distraction-free learning environments.
            </p>
            <p className="emphasis">But we want to be more than just a supplier..</p>
            <p>
              We want to be a co-operative owned by the people who buy our pouches. As a member, you get:
            </p>
            <ul>
              <li>A voice in how profits are invested in tech education</li>
              <li>Voting rights on which educational initiatives to commission</li>
              <li>The ability to review and recommend talks, AI training, and other tech education programs</li>
              <li>Full transparency in pricing and decision-making</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
