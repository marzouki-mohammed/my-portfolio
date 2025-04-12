import project from "../assets/cirtif.png"
import {motion} from "framer-motion"
import { GrLinkNext } from "react-icons/gr";



import { Card, Row, Col } from 'react-bootstrap';


const ProjectCard = () => {
  return (
    <div className="bg-black rounded-2 p-2 mt-3" style={{maxWidth:"750px"}}>
      <Row className="align-items-center">
        <div className="col-12">
          <p className="text-white mb-3 fs-4">Example Project</p>
          <Card className="custom-card" style={{maxWidth:"450px"}}>
            <Card.Body>
              <Card.Text className="text-darck">
                A web app for visualizing personalized Spotify data. View your top artists, top tracks,
                recently played tracks, and detailed audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 text-center">
          <img
            src={project}
            alt="project"
            className="img-fluid rounded shadow"
            style={{maxWidth:"300px" }}
          />
        </div>

        <div  className="col-12">
            <div className="d-flex justify-content-between bg-white opacity-75 mt-2 rounded-2 p-3">
                  <div className="d-flex gap-2 justify-content-center align-items-center">
                    <img src={project} alt="." width="30" height="30"
                      />
                      <p className="fs-4 m-0 p-0">
                      Ecommerce WebSite</p>
                  </div>
                  <div className='border-start d-flex justify-content-center align-items-center text-center align-content-center' style={{width: "50px"}}>
                        <motion.div
                            initial={{rotate:0}}
                            whileTap={{rotate:-60}}
                            transition={{duration:0.3 , ease:"linear"}}

                        >
                            <GrLinkNext className='fs-5'/>

                        </motion.div>

                    </div>
            </div>
                   
        </div>
      </Row>
    </div>
  );
};

export default ProjectCard;
