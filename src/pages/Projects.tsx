import Sidebar from "../components/Sidebar"
import ProfileCard from "../components/ProfileCard"
import { FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import reactImg from "../assets/react.png"
import next from "../assets/next2.png"
import androidImg from "../assets/android.png"
import ProjectCard from "../components/ProjectCard";
const Projects = () => {
  const [isopen , setIsopen] = useState<boolean>(false);
  return (
    <div className="main-container">
    <div className="d-none d-lg-block ">
       <Sidebar mobileSize={false} />
    </div>
    <div className="d-flex flex-column  w-100 has-scrollbar" style={{maxHeight:"100vh" , overflowY:"scroll"}}>
       <ProfileCard />


       <div className="d-flex flex-column  mt-4 p-2">

        <div className="p-4 border-end" style={{ width: "300px" }}>
            <fieldset className="mb-3">
                <legend className="h5 mb-3">Choose One</legend>

                {/* ASP.NET */}
                <button className="btn d-flex align-items-center gap-3 p-2 mb-2 border rounded w-100 bg-black text-white">
                <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="4" fill="#512BD4" />
                    <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="14" fontFamily="Arial" fontWeight="bold">ASP</text>
                </svg>
                Asp.Net
                </button>

                {/* React */}
                <button className="btn d-flex align-items-center gap-3 p-2 mb-2 border rounded w-100 bg-black text-white">
                <img src={reactImg} alt="Next.js Logo" width="40" height="40" />
                React
                </button>

                {/* .NET */}
                <button className="btn d-flex align-items-center gap-3 p-2 mb-2 border rounded w-100 bg-black text-white">
                <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" rx="10" fill="#178600" />
                    <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="14" fontFamily="Arial" fontWeight="bold">.NET</text>
                </svg>
                .Net
                </button>

                {/* Next.js */}
                <button className="btn d-flex align-items-center gap-3 p-2 mb-2 border rounded w-100 bg-black text-white">
                <img src={next} alt="Next.js Logo" width="40" height="40" />
                Next.js
                </button>

                {/* React / ASP.NET */}
                <button className="btn d-flex align-items-center gap-3 p-2 mb-2 border rounded w-100 bg-black text-white">
                <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="4" fill="#007acc" />
                    <text x="50%" y="40%" textAnchor="middle" fill="white" fontSize="10" fontFamily="Arial">React</text>
                    <text x="50%" y="70%" textAnchor="middle" fill="white" fontSize="10" fontFamily="Arial">ASP</text>
                </svg>
                React / Asp.Net
                </button>

                <button className="btn d-flex align-items-center gap-3 p-2 mb-2 border rounded w-100 bg-black text-white">
                <img src={androidImg} alt="Next.js Logo" width="40" height="40" />
                Android App
                </button>

                {/* HTML / CSS / JS */}
                <button className="btn d-flex align-items-center gap-3 p-2 mb-2 border rounded w-100 bg-black text-white">
                <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="64" height="64" rx="8" fill="#F7DF1E"/>
                    <text x="50%" y="45%" textAnchor="middle" fill="black" fontSize="10" fontFamily="Arial" fontWeight="bold">HTML</text>
                    <text x="50%" y="60%" textAnchor="middle" fill="black" fontSize="10" fontFamily="Arial" fontWeight="bold">CSS</text>
                    <text x="50%" y="75%" textAnchor="middle" fill="black" fontSize="10" fontFamily="Arial" fontWeight="bold">JS</text>
                </svg>
                HTML / CSS / JS
                </button>
            </fieldset>
        </div>

        <ProjectCard />





           <div className="d-flex flex-column justify-content-start bg-black" >

                <div className="text-white bg-black p-2 rounded-2 mb-2" onClick={() => {setIsopen(!isopen)}}>
                    Fitler <FaChevronUp className="ms-1"/>
                </div>


                {
                    isopen &&
                    <div className=" d-flex flex-column border-top border-white">
                        <div>aaaa</div>
                        <div>aaaa</div>
                        <div>aaaa</div>

                        <div>aaaa</div>



                    </div>
                }

           </div>
           
         
       </div>
     </div>
    
    

 </div>
  )
}

export default Projects