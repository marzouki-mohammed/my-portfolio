import Sidebar from "../components/Sidebar"
import ProfileCard from "../components/ProfileCard"
const Dashboard = () => {
  return (
    <div className="main-container">
       <div className="d-none d-lg-block ">
          <Sidebar mobileSize={false}/>
       </div>
       <div className="d-flex flex-column w-100 has-scrollbar" style={{maxHeight:"100vh" , overflowY:"scroll"}}>
          <ProfileCard />
          <div className="d-flex flex-column mt-2 flex-md-row">
                Dashboard
          </div>
        </div>

    </div>
  )
}

export default Dashboard