import * as React from "react";
import ReactDOM from "react-dom/client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectGrid() {
  return (
    <Container id="ProjectGridID" className="ProjectGridClass">
      <Row>
        <Col sm={8}>sm=8</Col>
        <Col sm={4}>sm=4</Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
  );
}
export default ProjectGrid();
ReactDOM.createRoot(document.querySelector("#ProductGrid")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ProjectGrid />
    </StyledEngineProvider>
  </React.StrictMode>
);
