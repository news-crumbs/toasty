import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import FlipPage from "react-flip-page";
import Four from "../../components/Four";
import "./NoMatch.css"

const NoMatch = () =>
  <Container fluid>
      <FlipPage loopForever="true" width="auto" height="720" orientation="horizontal" uncutPages="false" treshold="50" animationduration="50">
        <div className="bg">
        </div>
        <div className="bg">
        </div>
      </FlipPage>
  </Container>;

export default NoMatch;


