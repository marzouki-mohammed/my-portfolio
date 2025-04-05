import { FaGem } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const AboutContent = () => {
  return (
    <div className="bg-light border-bottom">
        <div className="p-3">
        <p className="mb-3 fs-4">Aboute Me</p>
        <div>       
                  <p className="p-0 m-0">
                      Étudiant en Génie Informatique à l’ENSA Fès passionné par le développement web et logiciel, 
                      intéressé par la recherche de solutions innovantes et désireux de contribuer à des approches 
                      créatives dans le monde de la technologie.
                  </p>
                  <Link to="/about" className="border rounded-4 p-3 mt-3 d-flex justify-content-between align-items-center bg-light">
                        <div>
                          <p className="mb-1 fw-semibold text-decoration-none text-black">
                            <FaGem className="me-2 text-secondary" />
                            Compétences principales
                          </p>
                          <p className="mb-0 text-muted">
                            React.js • ASP.NET Core • .NET framework • TypeScript
                          </p>
                        </div>
                        <IoIosArrowForward className="text-secondary fs-4" />
                  </Link>
                  </div>
            
      </div>
    </div>
  )
}

export default AboutContent