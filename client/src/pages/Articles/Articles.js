//Main page of the Desktop App
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


class Articles extends Component {
  state = {
    articles: [],
    title: "",
    url: "",
    synopsis: "",
    image: ""
  };

  componentDidMount() {
    //this.loadArticles();
  }

  loadArticles = () => {
    API.getArticle()
      .then(res =>
        this.setState({ articles: res.data, title: "", url: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

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
      console.log(res);
      this.setState({ articles: res.data.posts, title: "", author: "", synopsis: "" })
    });
	 
  };

  
/*
loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };
 */

  render() {
    return (
      <Container fluid>
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
        <Row>
        <Col size="md-12 sm-12">
            <Flip articles={this.state.articles}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;