import About from "../components/About"
import ProfileCard from "../components/ProfileCard"
import Sidebar from "../components/Sidebar"
const Home = () => {
  return (
    <div className="main-container">
       <div className="d-none d-lg-block ">
          <Sidebar pageType = "Home" />
       </div>
       <div className="d-flex flex-column w-100 has-scrollbar" style={{maxHeight:"100vh" , overflowY:"scroll"}}>
          <ProfileCard />
          <div className="d-flex flex-column mt-2">
             <About />
          </div>
        </div>

    </div>
    
  )
}

export default Home