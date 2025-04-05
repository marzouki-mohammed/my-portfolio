import ExperienceCard from "../components/ExperienceCard"
import Sidebar from "../components/Sidebar"
import ProfileCard from "../components/ProfileCard"

const AllExperience = () => {
  return (
    <div className="main-container">
       <div className="d-none d-lg-block ">
          <Sidebar mobileSize={false} />
       </div>
       <div className="d-flex flex-column  w-100 has-scrollbar" style={{maxHeight:"100vh" , overflowY:"scroll"}}>
          <ProfileCard />
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
          </div>
        </div>
       
       

    </div>
    
  )
}

export default AllExperience