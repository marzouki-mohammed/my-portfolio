import Sidebar from "../components/Sidebar"
import ProfileCard from "../components/ProfileCard"
import { FaChevronUp , FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import reactImg from "../assets/react.png"
import next from "../assets/next2.png"
import androidImg from "../assets/android.png"
import ProjectCard from "../components/ProjectCard";
import folder from "../assets/folder.png"

interface projectType {
    title : string ,
    svgContent : any
}

const allProjectType: projectType[] = [
    {
        title: "All Projects",
        svgContent: (
            <img src={folder} alt="Next.js Logo" width="32" height="32" />
        )
    },
    {
      title: "Asp.Net",
      svgContent: (
        <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="4" fill="#512BD4" />
          <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="14" fontFamily="Arial" fontWeight="bold">
            ASP
          </text>
        </svg>
      )
    },
    {
        title: "React",
        svgContent: (
            <img src={reactImg} alt="React Logo" width="32" height="32" />
        )
    },
    {
        title: ".Net",
        svgContent: (
            <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="10" fill="#178600" />
            <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="14" fontFamily="Arial" fontWeight="bold">.NET</text>
          </svg>
        )
    },
    {
        title: "Next.js",
        svgContent: (
            <img src={next} alt="Next.js Logo" width="32" height="32" />
        )                                    
    },
    {
        title: "React / Asp.Net",
        svgContent: (
            <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="4" fill="#007acc" />
                    <text x="50%" y="40%" textAnchor="middle" fill="white" fontSize="10" fontFamily="Arial">React</text>
                    <text x="50%" y="70%" textAnchor="middle" fill="white" fontSize="10" fontFamily="Arial">ASP</text>
            </svg>
                                               
        ) 
                                   
    },
    {
        title: "Android App",
        svgContent: (
            <img src={androidImg} alt="Android Logo" width="32" height="32" />
                                               
        ) 
                                   
    },
    {
        title: "HTML / CSS / JS",
        svgContent: (
            <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="64" height="64" rx="8" fill="#F7DF1E"/>
                <text x="50%" y="45%" textAnchor="middle" fill="black" fontSize="10" fontFamily="Arial" fontWeight="bold">HTML</text>
                <text x="50%" y="60%" textAnchor="middle" fill="black" fontSize="10" fontFamily="Arial" fontWeight="bold">CSS</text>
                <text x="50%" y="75%" textAnchor="middle" fill="black" fontSize="10" fontFamily="Arial" fontWeight="bold">JS</text>
            </svg>                                                   
        ) 
                                   
    }
    
  ];


<button className="btn d-flex align-items-center gap-3 p-2    w-100 btn-dark text-white" style={{borderBottom:"2px solid white"}}>
 
  
</button>
  

import { GoProjectSymlink } from "react-icons/go";
import ProjectCardMobile from "../components/ProjectCardMobile";
const Projects = () => {
  const [isopen , setIsopen] = useState<boolean>(false);
  const [typeProjectSelected , isTypeProjectSelected] = useState<number>(0);
  const [selectedTypeIndex, setSelectedTypeIndex] = useState<number>(-1);

  const handleClickBtnTypeProject = (i: number) => {
    isTypeProjectSelected(i);
    setIsopen(false);
    
        setSelectedTypeIndex(i);

  };
  
  return (
    <div className="main-container">
    <div className="d-none d-lg-block ">
       <Sidebar mobileSize={false} />
    </div>
    <div className="d-flex flex-column  w-100 has-scrollbar" style={{maxHeight:"100vh" , overflowY:"scroll"}}>
       <ProfileCard />
       <div className="project-grid">
  
                <div style={{width:"300px"}}>
                    {/* Mobile - affichage réduit */}
                    <div className={`d-flex flex-column d-md-none  ${isopen ? 'bg-black rounded':''}`}>
                       <button className="btn d-flex justify-content-between p-2  w-100 btn-dark text-white" style={{borderBottom:"2px solid white"}} onClick={ () => setIsopen(!isopen)}>
                            {/* SVG ASP.NET */}
                            <div className="d-flex gap-2 align-items-center" >
                                {
                                    allProjectType[typeProjectSelected].svgContent
                                }
                                {
                                    allProjectType[typeProjectSelected].title
                                }

                            </div>
                            <div >
                                {!isopen && <FaChevronUp />}
                            </div>        
                        </button> 
                        { isopen &&                  
                                <div className="bg-black">
                                    {
                                        allProjectType.map((item ,index)=>(
                                            item.title === allProjectType[typeProjectSelected].title ? "" : (
                                                <button
                                                className="btn d-flex align-items-center gap-3 p-2 w-100 btn-dark text-white"
                                                style={{ borderBottom: "2px solid white" }}
                                                onClick={() => handleClickBtnTypeProject(index  )}
                                              >
                                                {item.svgContent}
                                                {item.title}
                                              </button>
                                              )

                                        ))
                                    }                             
                                </div>
                        } 
                    </div>
                    

                    {/* Desktop Sidebar */}
                    <div className="p-2 border-end w-100 d-none d-md-block">
                    <fieldset className="mb-3">
                        <legend className="h5 mb-3">Choose One</legend>
                        {
                            allProjectType.map((item ,index)=>(
                                (
                                    <button
                                    className={`btn d-flex align-items-center gap-3 p-2 mb-2 border rounded w-100 btn-dark  ${selectedTypeIndex === index ? "active-btn  border-dark" : "text-white"}`}
                                        style={{ borderBottom: "2px solid white" }}
                                        onClick={() => handleClickBtnTypeProject(index)}
                                        >
                                                {item.svgContent}
                                                {item.title}
                                              </button>
                                        )

                                ))
                        }
                    </fieldset>
                    </div>
                </div>


            <div className="has-scrollbar pro-layout">
                    <div className="layout-prod">
                        <ProjectCardMobile />
                        <ProjectCardMobile />
                        <ProjectCardMobile />
                        <ProjectCardMobile />
                        <ProjectCardMobile />
                        <ProjectCardMobile />
                        <ProjectCardMobile />
                        <ProjectCardMobile />
                        <ProjectCardMobile />
                        <ProjectCardMobile />
                        <ProjectCardMobile />

                    {/* <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard /> */}
                    </div>
            </div> 
            
        </div>



       
     </div>



     


     
    
    

 </div>
  )
}

export default Projects