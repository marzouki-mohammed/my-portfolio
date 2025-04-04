
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
import { FC } from "react";

interface sidebar {
    pageType? : string
}




const Sidebar : FC<sidebar> = ({pageType}) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Navbar bg="light" expand="lg" className="d-flex flex-column vh-100 p-3 border-end">
      <div  className="mb-3 d-flex justify-content-between align-items-center w-100">
        <Logo />
        {
            pageType !== "Home" &&
            <button type="button" className="btn btn-light" onClick={() => {dispatch(close())}}>
                <IoCloseSharp className="fs-3" />
            </button>
        }
             
      </div>
      
      <Nav className="flex-column w-100">
        <Nav.Link href="#"><LuHouse className="me-2" /> Home</Nav.Link>
        <Nav.Link href="#"><LuLayoutDashboard className="me-2" /> Dashboard</Nav.Link>
        <Nav.Link href="#"><IoFolderOpenOutline className="me-2" /> Projects</Nav.Link>
        <Nav.Link href="#"><FiCheckSquare className="me-2" /> Tasks</Nav.Link>
        <Nav.Link href="#"><FaRegChartBar className="me-2" /> Reporting</Nav.Link>
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
