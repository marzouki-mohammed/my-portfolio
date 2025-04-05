import { Nav, Navbar, Image } from "react-bootstrap";
import { LuHouse , LuLayoutDashboard} from "react-icons/lu";
import { IoFolderOpenOutline } from "react-icons/io5";
import { FiCheckSquare } from "react-icons/fi";
import { FaRegChartBar } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import Logo from "./Logo";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { AppDispatch  } from "../app/store";
import { close } from "../app/features/menuSlice";
import mimo from "../assets/momo.png"
import { FC, useState } from "react";
import { Link , useLocation } from "react-router-dom";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


interface size {
  mobileSize : boolean
}





const Sidebar : FC<size>= ({mobileSize}) => {
  const dispatch = useDispatch<AppDispatch>();

  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  
  // Liste des chemins considérés comme liés à "Home"
  const homeRelatedPaths = ['experience', 'about', 'postes'];
  
  // Vérifie si l'un des mots-clés est inclus dans le chemin actuel
  const conditionHome = homeRelatedPaths.some((keyword) =>
    currentPath.includes(keyword)
  );
  const [isopenHome , setIsopenHome] = useState<boolean>(conditionHome);

  const handlerclickOpenMenu = () => {
    setIsopenHome(!isopenHome);
  }


  let homeLink: any;
  if (conditionHome) {
    homeLink = (
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between">
            <Link to="/" className="menu-item disabled">
                    <LuHouse className="me-2" /> Home
            </Link>
        <div onClick={handlerclickOpenMenu}>
          {
            isopenHome ? <FaAngleDown /> : <FaAngleUp />
          }         
        </div>
      </div>
      { isopenHome &&
        <div className="p-2 ms-3 d-flex flex-column w-100">
        <Link to="/experience" className={`menu-item ${currentPath.includes('experience') ? 'active' : ''}`}>Expenrience</Link>
        <Link to="/about" className={`menu-item ${currentPath.includes('about') ? 'active' : ''}`}>About</Link>
        <Link to="/postes" className={`menu-item ${currentPath.includes('postes') ? 'active' : ''}`}>Postes</Link>
        <Link to="/certification" className={`menu-item ${currentPath.includes('certification') ? 'active' : ''}`}>certification</Link>
      </div>}

      </div>
      
    );
  } else {
    homeLink = (
      <Link to="/" className={`menu-item ${currentPath === '/' ? 'active' : ''}`}>
        <LuHouse className="me-2" /> Home
      </Link>
    );
  }

  return (
    <Navbar bg="light" expand="lg" className="d-flex flex-column vh-100 p-3 border-end">
      <div  className="mb-3 d-flex justify-content-between align-items-center w-100">
        <Logo />
        {
            (mobileSize) &&
            <button type="button" className="btn btn-light" onClick={() => {dispatch(close())}}>
                <IoCloseSharp className="fs-3" />
            </button>
        }
             
      </div>
      
      <Nav className="flex-column w-100">
        {homeLink}
        
        <Link to="/dashboard" className={`menu-item ${currentPath.includes('dashboard') ? 'active' : ''}`}><LuLayoutDashboard className="me-2" /> Dashboard</Link>
        <Link to="/projects" className={`menu-item ${currentPath.includes('projects') ? 'active' : ''}`}><IoFolderOpenOutline className="me-2" /> Projects</Link>
        <Link to="/tasks" className={`menu-item ${currentPath.includes('tasks') ? 'active' : ''}`}><FiCheckSquare className="me-2" /> Tasks</Link>
        <Link to="/reporting" className={`menu-item ${currentPath.includes('reporting') ? 'active' : ''}`}><FaRegChartBar className="me-2" /> Reporting</Link>
      </Nav>

      <div className="mt-auto w-100">
        <Nav className="flex-column">
          <Nav.Link href="#"><FaGear className="me-2" /> Settings</Nav.Link>
        </Nav>

        <div className="d-flex align-items-center mt-3 bg-white p-2 rounded-3 border">
          <Image src={mimo} width="20" height="20" roundedCircle className="me-2 border border-black" style={{objectFit:"cover"}} />
          <div>
            <strong>Marzouki Mohammed</strong>
            <br />
            <small>@frankie</small>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Sidebar;