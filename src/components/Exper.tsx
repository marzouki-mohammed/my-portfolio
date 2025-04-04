import mimo from "../assets/momo.png"
import { Link } from "react-router-dom"
const Exper = () => {
  return (
    <div className=" bg-light p-3">
        <div className="p-3">
        <p className="mb-3 fs-4">Expérience</p>
            <div className="d-flex flex-column align-items-center gap-2">
                <div className="d-flex gap-2">
                    <img
                        src={mimo}
                        alt="ENSA Fès"
                        className=""
                        style={{ width: "50px", height: "50px", objectFit:"cover" }}
                    />
                    <div>
                        <p className="fw-bold p-0 m-0">Stagiaire en Développement Full Stack</p>
                        <p className="text-muted p-0 m-0">
                             École Nationale des Sciences Appliquées de Fès · Stage Juillet 2024 - Août 2024 · 2 mois · Maroc · Sur site
                        </p>


                    </div>
                    

                </div>              
                <div>       
                  <p className="p-0 m-0">
                        <strong>Projet :</strong> Développement d’un site e-commerce pour les produits
                        traditionnels marocains..... <Link to="" >voire plus</Link> 
                  </p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Exper