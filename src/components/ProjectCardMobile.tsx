import folder from "../assets/folder.png"
import certif from "../assets/cirtif.png"
const ProjectCardMobile = () => {
  return (
    <div className="border rounded-2 mt-3 p-2 mb-3 bg-dark" style={{ maxWidth: '500px' }}>

      <div className="d-flex justify-content-between  mb-2 text-size">

        <div className="d-flex justify-content-center gap-2">
          <img src={folder} alt="." className="Project-logo" />
          <div>
            <p className="mb-0 text-white">Site E-commerce Artisanal</p>
            <small style={{color:"#fcffcb"}}>Projet personnel</small>
          </div>
        </div>

        <small style={{color:"#fcffcb", margin:"0", padding:"0" , marginLeft:"5px"}}>Mars – Avril 2024</small>
      </div>

      <div className="w-100 text-center">
        <img src={certif} className="project-media" alt="." />

      </div>

      <p className="mb-3 text-white text-size mt-2">
        Développement d’un site e-commerce pour produits traditionnels marocains.
      </p>

      <div className="d-flex flex-wrap gap-2 mb-3">
        <span className="badge bg-light text-dark border">React</span>
        <span className="badge bg-light text-dark border">PHP</span>
        <span className="badge bg-light text-dark border">MySQL</span>
        <span className="badge bg-light text-dark border">Bootstrap</span>
      </div>

      <button className="btn btn-light mb-2">Voir plus</button>
    </div>
  );
};

export default ProjectCardMobile;
