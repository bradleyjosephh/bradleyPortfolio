import headshot from '../../assets/images/headshot.jpg';

const About = (props) => {
  return (
    <div className="App">
        <img src={headshot} className="App-logo" alt="Bradley Hankus" />
        <h2>
          About Me
        </h2>
        <h3> Bradley Hankus</h3>
        <p> Hello, I am a full-stack web developer based out of Irvine, California. I have skills ranging in a multiple of languages and have worked with numerous different technologies to create a variety of applications. I work well in a team and know how to take on whatever role that is required of me. </p>
    </div>
  )
}

export default About;