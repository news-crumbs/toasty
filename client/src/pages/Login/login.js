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
    nom: "",
    password: ""
  };
  // When this component mounts, grab the article with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    // API.getArticle(this.props.match.params.id)
    //   .then(res => this.setState({ article: res.data }))
    //   .catch(err => console.log(err));
  }

   handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    var apiBaseUrl = "http://localhost:3000/api/users";
    var payload={
      "nom":this.state.nom,
      "password":this.state.password
      };
      axios.post(apiBaseUrl, payload)
      .then(function (response) {
      console.log(response);
      if(response.data.code == 200){
      console.log("Login successfull");
      }
      else if(response.data.code == 204){
      console.log("Username password do not match");
      alert("username password do not match")
      }
      else{
      console.log("Username does not exists");
      alert("Username does not exist");
      }
      })
      .catch(function (error) {
      console.log(error);
      });
      }

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
  //   axios({
  //     method:'post',
  //     user: 
  //     url:`${BASEURL + APIKEY + this.state.topic + FILTER}`,
  //     responseType:'json'
  //   })
  //     .then(res => {
  //     console.log(res);
  //     this.setState({ articles: res.data.posts, title: "", author: "", synopsis: "" })
  //   });
	 
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
              <Col size="md-5">
                <div class="login-bkg">
                  <form class="form">
                  <Col size="md-1">
                </Col>
                    <p class="login-title">Current Users</p>
                    <label class="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" value= {this.state.nom} onChange= {this.handleInputChange} class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Name"></input>
                    
                    <label class="sr-only" for="inlineFormInputGroup">Password</label>
                    <input type="text" value= {this.state.password} onChange= {this.handleInputChange} class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputGroup" placeholder="Password"></input>
                    <button type="submit" onClick={this.handleFormSubmit} class="btn btn-primary">Submit</button>
                  </form>
                </div>
              </Col>
              <Col size="md-5">
              <div class="login-bkg">
                  <form class="form">
                  <p class="login-title">New Users</p>
                    <label class="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" value={this.state.nom} onChange={this.handleInputChange} class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Name"></input>
                    <label class="sr-only" for="inlineFormInputGroup">Password</label>
                    <input type="text" value={this.state.password} onChange={this.handleInputChange} class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputGroup" placeholder="Password"></input>
                    <button type="submit" onClick={this.handleFormSubmit} class="btn btn-primary">Register</button>
                  </form>
                </div>
              </Col>
          </Col>
          <Col size="md-1">
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">

          </Col>
        </Row>
        <Row>
        <Col size="md-5">
          </Col>
          <Col size="md-2">
            <p className="grn-btn"><Link to="/">← Back to Articles</Link></p>
          </Col>
          <Col size="md-5">
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
