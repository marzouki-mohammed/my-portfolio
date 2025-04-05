
import { BsThreeDots } from "react-icons/bs";
import mimo from "../assets/momo.png"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Sidebar from "./Sidebar";
import {motion , AnimatePresence} from "framer-motion"
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { open,close } from "../app/features/menuSlice";
import { AppDispatch , RootState } from "../app/store";


const ProfileCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const menustae = useSelector((state: RootState) => state.menuOpen.value);
  const  handlerOpenmenuEvent = () => {
       if(menustae) dispatch(close())
       else dispatch(open())
  }
  
  
  return (
    
      <div className="d-flex flex-column w-100">
  
          <div className="banner">
             <div className="p-2 d-flex justify-content-between">
                <div className="d-lg-none">
                  <Logo />
                </div>
                <div className="d-flex align-items-center d-lg-none">
                  <button type="button" className="btn" onClick={handlerOpenmenuEvent}>
                       <HiOutlineMenuAlt3 className="fs-3" />
                  </button>

                  { menustae &&
                    <AnimatePresence>
                        <motion.div className="menu"

                            initial={{x:-230}}
                            animate={{x:0}}
                            transition={{duration:0.3 , ease:"linear"}}
                      >
                          <Sidebar mobileSize={true}/>

                      </motion.div>
                  </AnimatePresence>}  
                </div>

             </div>
             
             
          </div>

          <div className="container">
              <div className="row gap-2">
                <div className="col-12 col-sm-4 col-lg-2 img-profile">
                    <img
                      src={mimo}
                      alt="Profile"
                      className="rounded-circle border border-4 border-black position-relative bg-white"
                      style={{ width: "100px", height: "100px", objectFit: "cover",left:"10px", top:"-25px" }}
                    />
                </div>
                <div  className="p-3 col-12 col-sm col-lg profile-info">
                    <div>
                        <span className="profile-name">Marzouki Mohammed</span>
                        <div className="text-muted">
                          I'm a Software & Web Developer | Computer Engineering Student
                        </div>

                    </div>
                  
                    <div className=" gap-2 d-flex align-items-center ">
                      <button type="button" className="btn border border-2 btn-light" style={{height:"40px"}}>
                        <BsThreeDots size={20} className="text-muted cursor-pointer" />
                      </button>
                      <button type="button" className="btn border border-2 btn-light"  style={{height:"40px"}}>
                        View portfolio
                      </button>
                      <button type="button" className="btn border border-2 btn-dark" style={{height:"40px"}}>
                        + Follow
                      </button>
                    </div>

                </div>
                     
              </div>
          </div>
          
      </div>
    
  );
};

export default ProfileCard;
