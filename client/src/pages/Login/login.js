import axios from 'axios';
import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Flip from "../../components/Flip"; 
import { BASEURL, FILTER, APIKEY } from "../../utils";

class Login extends Component {
  state = {
    article: {}
  };
  // When this component mounts, grab the article with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getArticle(this.props.match.params.id)
      .then(res => this.setState({ article: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.article.title}
              </h1>
              <Col size="md-2">
              </Col>
              <Col size="md-3">
                <form class="form">
                  <p>Current Users</p>
                  <label class="sr-only" for="inlineFormInput">Name</label>
                  <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe"></input>

                  <label class="sr-only" for="inlineFormInputGroup">Username</label>
                  <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div class="input-group-addon">@</div>
                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username"></input>
                  </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </Col>
              <Col size="md-2"><h2 className="center">or</h2></Col>
              <Col size="md-3">
                <form class="form">
                  <p>New Users</p>
                  <label class="sr-only" for="inlineFormInput">Name</label>
                  <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe"></input>

                  <label class="sr-only" for="inlineFormInputGroup">Username</label>
                  <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div class="input-group-addon">@</div>
                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username"></input>
                  </div>
                <button type="submit" class="btn btn-primary">Register</button>
                </form>
              </Col>
            </Jumbotron>
          </Col>
          <Col size="md-2">
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">

          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Articles</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
