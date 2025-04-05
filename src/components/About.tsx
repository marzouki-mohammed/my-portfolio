import AboutContent from "./AboutContent"
import Exper from "./Exper"

const About = () => {
  return (
    <div className="d-flex flex-column gap-2 bg-light m-md-3">
      <Exper />
      <AboutContent />
    </div>
  )
}

export default About