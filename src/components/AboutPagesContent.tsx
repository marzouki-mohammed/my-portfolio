import { FaGem } from 'react-icons/fa';
const AboutPagesContent = () => {
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
                  <div  className="border rounded-4 p-3 mt-3 d-flex justify-content-between align-items-center bg-light">
                        <div className='w-100'>
                          <p className="mb-1 fw-semibold text-decoration-none text-black">
                            <FaGem className="me-2 text-secondary" />
                            Compétences 
                          </p>
                          <div className="d-flex flex-column gap-2 w-100 p-3">
                            <p className='text-muted border-bottom w-100'>React.js</p>
                            <p className='text-muted border-bottom w-100'>ASP.NET Core</p>
                            <p className='text-muted border-bottom w-100'>.NET framework </p>
                            <p className='text-muted border-bottom w-100'>TypeScript</p>
                            <p className='text-muted border-bottom w-100'>React.js</p>
                            <p className='text-muted border-bottom w-100'>ASP.NET Core</p>
                            <p className='text-muted border-bottom w-100'>.NET framework </p>
                            <p className='text-muted border-bottom w-100'>TypeScript</p>
                            <p className='text-muted border-bottom w-100'>React.js</p>
                            <p className='text-muted border-bottom w-100'>ASP.NET Core</p>
                            <p className='text-muted border-bottom w-100'>.NET framework </p>
                            <p className='text-muted border-bottom w-100'>TypeScript</p>
                            
                          </div>
                        </div>
                      </div>
                  </div>
            
      </div>
    </div>
  )
}

export default AboutPagesContent