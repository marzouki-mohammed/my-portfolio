import About from "../components/About"
import PosteContent from "../components/PosteContent";
import ProfileCard from "../components/ProfileCard"
import Sidebar from "../components/Sidebar"
import { FaSignsPost } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from 'react-icons/io';
import Formations from "../components/Formations";
import CertificatCard from "../components/CertificatCard";
const Home = () => {
   const formations = [
      {
        titre: "Formation Développement Web",
        organisme: "OpenClassrooms",
        annee: "2024",
      },
      {
        titre: "Formation Gestion de Projet",
        organisme: "Udemy",
        annee: "2023",
      },
    ];
  return (
    <div className="main-container">
       <div className="d-none d-lg-block ">
          <Sidebar mobileSize={false}/>
       </div>
       <div className="d-flex flex-column w-100 has-scrollbar" style={{maxHeight:"100vh" , overflowY:"scroll"}}>
          <ProfileCard />
          <div className="d-flex flex-column mt-2">
             <About />
             <div className="mt-3 p-3 m-md-3">
               <div className="fs-4 text-decoration-underline">
                  <FaSignsPost /> Postes
               </div>
               <div className="row mt-3">
                  <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                     <PosteContent />
                  </div>
                  <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                     <PosteContent />
                  </div>
                  <div className="col-12 d-flex justify-content-center align-items-cente">
                     <Link to="/postes" className="border rounded-pill p-3 mt-3 text-black text-decoration-none  bg-light">
                           more <IoIosArrowForward className="text-secondary fs-4 ms-2" />
                     </Link>

                  </div>
                  



               </div>
             </div>
             <div className="mt-3 p-3 m-md-3">
               <div className="fs-4 text-decoration-underline">
                  🎓 Formations
               </div>

               <div className="d-flex justify-content-center align-items-center mt-3">
                 <div className="d-flex flex-column" style={{maxWidth:"600px", gap:"20px"}}>
                  {
                    formations.map((item) => (
                     <Formations formations = {item} />
                    )) 
                  }  
                 </div>
               </div>

                 

             </div>
             <div className="mt-3 p-3 m-md-3">
               <div className="fs-4 text-decoration-underline">
                  📜 Certifications
               </div>
               <div className="row mt-3">
                  <div className="col-12 col-md-6  d-flex justify-content-center align-items-center">
                     <CertificatCard />
                  </div>
                  <div className="col-12 col-md-6  d-flex justify-content-center align-items-center">
                     <CertificatCard />
                  </div>
                  <div className="col-12 col-md-6  d-flex justify-content-center align-items-center">
                     <CertificatCard />
                  </div>
                  <div className="col-12 col-md-6  d-flex justify-content-center align-items-center">
                     <CertificatCard />
                  </div>
                  <div className="col-12 d-flex justify-content-center align-items-cente">
                     <Link to="/certification" className="border rounded-pill p-3 mt-3 text-black text-decoration-none  bg-light">
                           more <IoIosArrowForward className="text-secondary fs-4 ms-2" />
                     </Link>

                  </div>


               </div>


             </div>
               
             
          </div>
        </div>

    </div>
    
  )
}

export default Home