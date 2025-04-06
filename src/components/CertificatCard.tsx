
import { motion } from 'framer-motion';
import cetrif from "../assets/cirtif.png"
import { GrLinkNext } from "react-icons/gr";

const CertificatCard = () => {
  return (
    <div className="card shadow-lg d-flex flex-column mb-3">
        <motion.div className='p-3'
                 initial={{opacity:1}}
                 whileHover={{opacity:0.50}}
        >
            <motion.img
              src={cetrif}
              alt="Certificat"
              className="img-fluid rounded-3"
              style={{ maxHeight: "250px", objectFit: "cover" }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />

        </motion.div>
        <div className='d-flex gap-2 border-top w-100 p-3'>
            <p className='fs-5 text-muted'> certification en react et typescript</p>
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
      




    //   <motion.div
    //     className=" d-flex flex-column border-0 rounded-4 overflow-hidden"
    //     initial={{ opacity: 1 }}
    //     animate={{ opacity: 0.5  }}
    //     transition={{ duration: 0.6, ease: "easeOut" }}
    //   >
    //     <div className="row g-0">
    //       {/* Partie gauche : Texte */}
    //       <div className="col-md-6 bg-light p-4 d-flex flex-column justify-content-center">
    //         <h3 className="fw-bold">Keep life organised and work moving – all in one place</h3>
    //         <p className="mt-3">
    //           Create, store, and access all of your files. Collaborate with friends, family, and co-workers from any device.
    //         </p>

    //         {/* Animation sur le bouton */}
    //         <motion.button
    //           whileHover={{ scale: 1.05 }}
    //           whileTap={{ scale: 0.95 }}
    //           className="btn btn-primary mt-3 w-50"
    //         >
    //           Find the plan for you
    //         </motion.button>
    //       </div>

    //       {/* Partie droite : Image avec animation */}
    //       <div className="col-md-6 bg-white text-center p-4">
    //         <motion.img
    //           src={cetrif}
    //           alt="Certificat"
    //           className="img-fluid rounded-3"
    //           style={{ maxHeight: "250px", objectFit: "cover" }}
    //           whileHover={{ scale: 1.05 }}
    //           transition={{ type: 'spring', stiffness: 300 }}
    //         />
    //         <p className="mt-3 text-muted">Do more with your files</p>
    //       </div>
    //     </div>

    //     {/* Footer de la carte */}
    //     <div
    //       className="card-footer bg-gradient text-white d-flex justify-content-between align-items-center"
    //       style={{ background: 'linear-gradient(to right, #7AB6FF, #B3D8FF)' }}
    //     >
    //       <h5 className="mb-0">
    //         <img
    //           src={cetrif}
    //           alt="Dropbox Logo"
    //           width="24"
    //           className="me-2"
    //         />
    //         Dropbox
    //       </h5>
    //       <motion.span
    //         whileHover={{ x: 5 }}
    //         transition={{ type: "spring", stiffness: 200 }}
    //         style={{ fontSize: "1.5rem" }}
    //       >
    //         ➜
    //       </motion.span>
    //     </div>
    //   </motion.div>
    // </div>
  );
};

export default CertificatCard;
