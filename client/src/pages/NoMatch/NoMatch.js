import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import FlipPage from "react-flip-page";
import Four from "../../components/Four";

const NoMatch = () =>
  <Container fluid>
      <FlipPage loopForever="true" width="auto" height="720" orientation="horizontal" uncutPages="false" treshold="50" animationduration="50">
        <div className="bg">
          <h1 text-align="center">No body likes to get burnt</h1>
          <h2>404 Page Not Found</h2>
        </div>
        <div className="bg">
          <h1>Please go home</h1>
        </div>
      </FlipPage>
  </Container>;

export default NoMatch;


