
import { Card, Badge, ListGroup } from 'react-bootstrap';
import mimo from "../assets/momo.png"
import { useState } from 'react';
import PostFooter from './PostFooter';


const PosteContent = () => {
  const [allDescriptionIsOpen , setAllDescriptionIsOpen] = useState<boolean>(false);
  const handlerclickAllDiscription = () => {
        setAllDescriptionIsOpen(!allDescriptionIsOpen);
  }
  return (
    <Card className="mb-4" style={{maxWidth:"700px"}}>
      <Card.Body>
        <div className="d-flex align-items-start">
          <img
            src={mimo}
            alt="ENSA Fès"
            width="60"
            height="60"
            className="me-3 object-fit-contain rounded-circle border object-fit-cover"
            

          />
          <div>
            <Card.Title className="mb-2">Mohammed  Marzouki
              <span className='fs-6 text-muted'>• Vous</span>
            </Card.Title>
            <Card.Subtitle className="text-muted">
               I'm a Software & Web Developer | Computer Engineering Student
            </Card.Subtitle>
            <small className="text-muted">juil. 2024 - août 2024 · 2 mois · Maroc · Sur site</small>
          </div>
        </div>

        <hr />

        
            
            {
              allDescriptionIsOpen ?
              (<div>
                 <Card.Text>
                    📢 <br />
                    Après avoir présenté la partie client, voici un aperçu de la gestion administrateur sur notre plateforme e-commerce. <br />
                    🎯 Fonctionnalités clés pour les administrateurs : <br />
                    ✅ Gestion des produits : Ajout, suppression et mise à jour des stocks. <br />
                    ✅ Gestion des commandes : Suivi des commandes et expéditions. <br />
                    ✅ Gestion des clients : Suivi des inscriptions et statistiques. <br />
                    ✅ Gestion des catégories : Organisation et distribution des produits. <br />
                    ✅ Gestion des administrateurs : Attribution des rôles et permissions. <br />
                    💡 Grâce à ces fonctionnalités, l’administrateur peut contrôler et optimiser le fonctionnement du store pour une meilleure expérience utilisateur. <br />
                </Card.Text>
                <Card.Text>
                  🔗 <a href="https://stage2024.science-conf.net/stage24/ecommerce_web_site_marzouki/" target="_blank" rel="noopener noreferrer">Lien du site</a><br />
                  💻 <a href="https://github.com/marzouki-mohammed/Ecommerce-website" target="_blank" rel="noopener noreferrer">Code source sur GitHub</a>
                </Card.Text>

                <div>
                  <Badge bg="secondary" className="me-1">#Ecommerce</Badge>
                  <Badge bg="secondary" className="me-1">#DéveloppementWeb</Badge>
                  <Badge bg="secondary" className="me-1">#PHP</Badge>
                  <Badge bg="secondary" className="me-1">#SQL</Badge>
                  <Badge bg="secondary" className="me-1">#GitHub</Badge>
                  <Badge bg="secondary">#Projet</Badge>
                </div> 

                <button className='border-0 bg-white text-muted' onClick={handlerclickAllDiscription}>
                    … moins
                </button>  
              </div>) : 

                (<div>
                📢 
                Après avoir présenté la partie client, voici un aperçu de la gestion administrateur sur notre plateforme e-commerce.

                <button className='border-0 bg-white text-muted' onClick={handlerclickAllDiscription}>
                    … plus
                </button>
                </div>)
            }
            <div  className='border mt-2'>
              <Card.Img src={mimo}/>
            </div>
            <PostFooter />
        

            



        



        


        
      </Card.Body>
    </Card>
  );
};

export default PosteContent;

