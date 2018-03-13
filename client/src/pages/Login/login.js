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
    password: "",
    newNom:"",
    newPass:""
  };

    handleLogin = event => {
      event.preventDefault();
      // console.log('checking DB for user');
      // var apiBaseUrl = "http://localhost:3000/api/users";
      // let brah={
      //   "nom":this.state.nom,
      //   "password":this.state.password
      // };
      // axios.get(apiBaseUrl, brah.nom)
      //   .then(function(response){
      //     console.log(response.data);
          
      //   }
      console.log(this.state);
      var apiBaseUrl = "http://localhost:3000/api/users";
      let payload={
        "nom":this.state.nom,
        "password":this.state.password
        };
        if(payload.nom === payload.password){
          alert(`Username and Password must not match`);
          console.log(`user name and password must not match`);
          this.setState({
           nom: "",
            password: ""
          });
        }else{
          axios.post(apiBaseUrl, payload)
            .then(function (response) {
              console.log(response);
              console.log(response.status);
              if(response.status === 200){
              console.log("Login successful");
              window.location.replace("/Articles");
              }
            })
            .catch(function (error) {
            console.log(error);
            });
        }
    }

    handleRegistration = event => {
      event.preventDefault();
      console.log(this.state);
      var apiBaseUrl = "http://localhost:3000/api/users";
      let payload={
        "nom":this.state.newNom,
        "password":this.state.newPass
        };
        if(payload.nom === payload.password){
          alert(`Username and Password must not match`);
          console.log(`user name and password must not match`);
          this.setState({
            newNom: "",
            newPass: ""
          });
        }else{
          axios.get(apiBaseUrl, payload.nom)
            .then(function(response){
              console.log(response);
              console.log(response.status);
              if(response.status === 200){
                console.log(`username ${payload.nom} taken`);
                alert(`username ${payload.nom} taken`); 
                // too much scoping isssues to use this.setState??
                // this.setState({
                //   newNom: "",
                //   newPass: ""
                // });
              } else {
                axios.post(apiBaseUrl, payload)
                  .then(function (response) {
                    console.log(response);
                    console.log(response.status);
                    if(response.status === 200){
                    console.log("Login successful");
                    window.location.replace("/Articles");
                    }
                  })
                  .catch(function (error) {
                  console.log(error);
                  });
                }
            });
        }

    }

    handleInputChange = event => {
      console.log(event.target.name);
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

  render() {
    return (
      <Container fluid>
        <div className="top-m">
        <Row>  
          <Col size="md-2"></Col>
          <Col size="md-4">
              <div class="login-bkg">
                <form class="form">
                <Col size="md-1">
              </Col>
                  <p class="login-title">Current Users</p>
                  <label class="sr-only" for="inlineFormInput">Name</label>
                  <input type="text" value= {this.state.nom} name="nom" onChange= {this.handleInputChange} class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Name"></input>
                  
                  <label class="sr-only" for="inlineFormInputGroup">Password</label>
                  <input type="text" value= {this.state.password} onChange= {this.handleInputChange} name="password" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputGroup" placeholder="Password"></input>
                  <button type="submit" onClick={this.handleLogin} class="btn btn-primary">Submit</button>
                </form>
              </div>
            </Col>
            <Col size="md-4">
              <div class="login-bkg">
                <form class="form">
                  <p class="login-title">New Users</p>
                  <label class="sr-only" for="inlineFormInput">Name</label>
                  <input type="text" value={this.state.newNom} onChange={this.handleInputChange} name="newNom" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Name"></input>
                  <label class="sr-only" for="inlineFormInputGroup">Password</label>
                  <input type="text" value={this.state.newPass} onChange={this.handleInputChange} name="newPass" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputGroup" placeholder="Password"></input>
                  <button type="submit" onClick={this.handleRegistration} class="btn btn-primary">Register</button>
                </form>
              </div>
            </Col>
            <Col size="md-2"></Col>
        </Row>
        </div>
        <Row>
          <Col size="md-10 md-offset-1">
          </Col>
        </Row>
        <Row>
          <Col size="md-5">
          </Col>
          <Col size="md-2">
            <p className="grn-btn"><Link to="/articles">← Back to Articles</Link></p>
          </Col>
          <Col size="md-5">
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Login;
