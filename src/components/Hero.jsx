import "../styles/Hero.css";
import profilePic2 from "./site-react/images/profile-web2.jpg";

export default function Hero() {

  return (
    <>
      <div className="hero">
          <div className="hero-info">
            <h1>Hi, I'm Troy</h1>
            <p>I'm a Senior Front End Developer with 20+ years of experience, building accessible and user-centric websites.</p>
            <a className="button" href="https://www.linkedin.com/in/troyshields/" target="blank">Get in Touch</a>
          </div>
          <div className="hero-img">
            <img src={profilePic2} alt="Troy Shields" />
          </div>
        </div>
    </>
  )
}