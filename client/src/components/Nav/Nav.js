import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./nav.css"
import Search from "./Search.js"
import { Input, FormBtn } from "../Form"
import { BASEURL, FILTER, APIKEY } from "../../utils";
import axios from 'axios';
import API from "../../utils/API";
import {Link} from "react-router-dom";


class Nav extends React.Component {
  state = {
    topic: "",
    articles: [],
  }

  handleInputChange = event => {
    console.log(event, event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios({
      method: 'get',
      url: `${BASEURL + APIKEY + this.state.topic + FILTER}`,
      responseType: 'json'
    })
      .then(res => {
        debugger
        this.setState({ articles: res.data.posts, title: "", author: "", synopsis: "" })
      });

  };

  render() {
    return (

      <Container fluid>
        <nav className="navbar navbar-expand-lg navbar-default bg-light">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/Login">Login</Link>
            <Container fluid>
              <Col size="md-2">
              </Col>
                <div className="col-md-3 navbar-brand">
                  <h4>
                    <Link to="/Articles">News Crumbs</Link>
                  </h4>
                </div>
              <Col size="md-2">
              </Col>
                <div className="col-md-3 navbar-brand">
                  <h4>
                    <Link to="/favorites">Favorites</Link>
                  </h4>
                </div>
              <Col size="md-2">
              </Col>
            </Container>
          </div>
        </nav>
      </Container>
    )
  }
};


export default Nav;
