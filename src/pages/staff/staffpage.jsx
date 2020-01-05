import React from "react";

import CardList from "../../components/card-list/card-list.component";

import { Container, Row } from "react-bootstrap";
import { Styles } from "./staffpage.styles";

const StaffPage = () => (
  <Styles>
    <Container fluid>
      <Row className="title-row">
        <h2>We hire the best medicine specialists</h2>
      </Row>
      <Row className="card-list-row">
        <CardList />
      </Row>
    </Container>
  </Styles>
);

export default StaffPage;
