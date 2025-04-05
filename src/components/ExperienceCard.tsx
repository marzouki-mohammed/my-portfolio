
import { Card, Badge, ListGroup } from 'react-bootstrap';
import ensaf from "../assets/ensa.png"


const ExperienceCard = () => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <div className="d-flex align-items-start">
          <img
            src={ensaf}
            alt="ENSA Fès"
            width="60"
            height="60"
            className="me-3 object-fit-contain"
            

          />
          <div>
            <Card.Title className="mb-2">Stagiaire en Développement Full Stack</Card.Title>
            <Card.Subtitle className="text-muted">
              École Nationale des Sciences Appliquées de Fès · Stage
            </Card.Subtitle>
            <small className="text-muted">juil. 2024 - août 2024 · 2 mois · Maroc · Sur site</small>
          </div>
        </div>

        <hr />

        <Card.Text>
          <strong>Projet :</strong> Développement d’un site e-commerce pour les produits traditionnels marocains
        </Card.Text>

        <Card.Text>
          <strong>Technologies utilisées :</strong><br />
          PHP, HTML, CSS, JavaScript, SQL, Bootstrap, Sass, APIs, UML, Hack
        </Card.Text>

        <Card.Text>
          <strong>Outils :</strong> Visual Studio Code, WampServer, PhpMyAdmin, Composer<br />
          <strong>Versionnement :</strong> Git, GitHub
        </Card.Text>

        <Card.Text>
          <strong>🎯 Objectifs :</strong>
          <ListGroup variant="flush">
            <ListGroup.Item>Concevoir une plateforme e-commerce conviviale et réactive</ListGroup.Item>
            <ListGroup.Item>Implémenter la gestion des produits, commandes et paiements</ListGroup.Item>
            <ListGroup.Item>Améliorer l’expérience utilisateur avec un design optimisé</ListGroup.Item>
          </ListGroup>
        </Card.Text>

        <Card.Text>
          🔗 <a href="https://stage2024.science-conf.net/stage24/ecommerce_web_site_marzouki/" target="_blank" rel="noopener noreferrer">Lien du site</a><br />
          💻 <a href="https://github.com/marzouki-mohammed/Ecommerce-website" target="_blank" rel="noopener noreferrer">Code source sur GitHub</a>
        </Card.Text>

        <Card.Text>
          ✅ Résultat : Un site opérationnel, hébergé et accessible en ligne.
        </Card.Text>

        <div>
          <Badge bg="secondary" className="me-1">#Ecommerce</Badge>
          <Badge bg="secondary" className="me-1">#DéveloppementWeb</Badge>
          <Badge bg="secondary" className="me-1">#PHP</Badge>
          <Badge bg="secondary" className="me-1">#SQL</Badge>
          <Badge bg="secondary" className="me-1">#GitHub</Badge>
          <Badge bg="secondary">#Projet</Badge>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ExperienceCard;
