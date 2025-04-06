import { FC } from "react";
import mimo from "../assets/momo.png"

interface formationContent { 
        titre: string,
        organisme: string,
        annee: string,
}
interface formationType{
    formations:formationContent;
}
const Formations : FC<formationType> = ({formations}) => {
  return (
    <div>
        
        <div className="d-flex gap-4 justify-content-center align-content-center">
            <div className="d-flex justify-content-center align-items-center">
               <div className="circle"></div>

            </div>
            <div className="d-flex  gap-3 w-100 border rounded-2 justify-content-center align-items-center p-2">
                    <img
                        src={mimo}
                        alt="ENSA Fès"
                        className=""
                        style={{ width: "50px", height: "50px", objectFit:"cover" }}
                    />
                
                     <div className="d-flex flex-column">
                        <p className="fs-4 p-0 m-0">{formations.titre}</p>
                        <p className="fs-6 p-0 m-0 text-muted"><strong>Organisme :</strong> {formations.organisme}</p>
                        <p className="fs-6 p-0 m-0 text-muted"><strong>Année :</strong> {formations.annee}</p>
                     </div>
                
            </div>
        </div>
              

    </div>
  )
}

export default Formations