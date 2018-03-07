import React from "react";
import "./nav.css"
import Search from "./Search.js"
import {Input, FormBtn} from "../Form"
import { BASEURL, FILTER, APIKEY } from "../../utils";
import axios from 'axios';
import API from "../../utils/API";


class Nav extends React.Component {
  state = {
    topic:"",
    articles:[],
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
      method:'get',
      url:`${BASEURL + APIKEY + this.state.topic + FILTER}`,
      responseType:'json'
    })
      .then(res => {
      debugger
      this.setState({ articles: res.data.posts, title: "", author: "", synopsis: "" })
    });
	 
  };

render(){
  return (

<div class="container-fluid">
  <nav class="navbar navbar-expand-lg navbar-default bg-light">
    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}

    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="/login">Login</a>
      
      <div class="container">
        
          
          <div class="col-md-4 navbar-brand">
            <h4>
              
                <a href="/">News Crumbs</a>
            
            </h4>
          </div>

          <div class="col-md-3 navbar-brand">
            <h4>
            
                <a href="/favorites">Favorites</a>
              
            </h4>
          </div>

        

        <div class="col-md-5 navbar-brand">
        
          <form class="form-inline my-2 my-lg-0">
          <Input
              value={this.state.topic}
              onChange={this.handleInputChange}
              name="topic"
              placeholder="Topic (required)"
            />
            <FormBtn
              // notice this is set to disabled and has a lower transparency unless, this.state.topic exists (or evaluates to anything other than false (as a boolean) or 0).
                disabled={!(this.state.topic)}
                onClick={this.handleFormSubmit}

              >
                Submit Request
              </FormBtn> 
              {/* <input id="searchBox" class="form-control mr-sm-6" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          </form>
        
        </div>

      </div>

    </div>

  </nav>
</div>
  )}
};


export default Nav;
