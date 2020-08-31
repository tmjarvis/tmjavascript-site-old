import React from "react";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";

const ProjectCard = (props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, cursor: "pointer" }}
      className="col-sm-6 my-3"
    >
      <Card
        style={{ height: "100%", minHeight: 350, color: "#000000" }}
        onClick={props.onCardClick}
      >
        <Card.Body>
          <h4 style={{ paddingBottom: 15 }}>{props.cardTitle}</h4>
          <Card.Text>{props.cardText}</Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">{props.lastUpdated}</small>
        </Card.Footer> */}
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
