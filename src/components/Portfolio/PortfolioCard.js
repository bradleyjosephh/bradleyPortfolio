
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

const PortfolioCard = (props) => {
  const { project } = props;
  return (
    <>
      <Card id="portcards" color="dark" className="col-sm-3 mb-4 white-border">
        <CardImg variant="top" src={project.img} />
        <CardBody>
          <CardTitle>{project.title}</CardTitle>
          <CardText>
            {project.description}
          </CardText>
        </CardBody>
        <Button variant="primary" color="info" href={project.repo}>Repo</Button>
        <Button variant="primary" color="warning" href={project.source}>Source</Button>
    </Card>
    <br />
    </>
  )
}

export default PortfolioCard