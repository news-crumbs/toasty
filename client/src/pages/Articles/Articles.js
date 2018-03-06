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
/*
loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };
 */
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

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-12 sm-12">
            <Flip/>
          </Col>
        <Col size="md-12 sm-12">
          <Jumbotron>
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
            <h2>Favorites/ Saved Articles</h2>
          
          {this.state.articles.length ? (
            <List>
              {this.state.articles.map(article => (
                <ListItem key={article._id}>
                  <Link to={"/articles/" + article._id}>
                    <strong>
                      {article.thread.title} by {article.thread.url}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Jumbotron>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;