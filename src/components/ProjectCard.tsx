

import { Card, Row, Col } from 'react-bootstrap';

const ProjectCard = () => {
  return (
    <div className="project-section py-5 px-3">
      <Row className="align-items-center">
        <Col md={6}>
          <p className="text-primary mb-1">Featured Project</p>
          <h3 className="text-white mb-3">Example Project</h3>
          <Card className="custom-card">
            <Card.Body>
              <Card.Text className="text-light">
                A web app for visualizing personalized Spotify data. View your top artists, top tracks,
                recently played tracks, and detailed audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="text-center">
          <img
            src="https://via.placeholder.com/400x250?text=Project+Image"
            alt="project"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProjectCard;
