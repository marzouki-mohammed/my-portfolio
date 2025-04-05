import Sidebar from "../components/Sidebar"
import ProfileCard from "../components/ProfileCard"
import PosteContent from "../components/PosteContent"

const Postes = () => {
  return (
    <div className="main-container">
       <div className="d-none d-lg-block ">
          <Sidebar mobileSize={false}/>
       </div>
       <div className="d-flex flex-column w-100 has-scrollbar" style={{maxHeight:"100vh" , overflowY:"scroll"}}>
          <ProfileCard />
          <div className="d-flex flex-column mt-4  justify-content-center align-items-center">
             <PosteContent />
             <PosteContent />
             <PosteContent />
             <PosteContent />
             
             
          </div>
        </div>

    </div>
  )
}

export default Postes