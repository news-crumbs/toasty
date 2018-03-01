//Main page of the Desktop App
import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Flip from "../../components/Flip"; 
import webhose from 'webhose-nodejs';
import whAPI from '../../utils/webHoseAPI';
import APIKEY from "../../utils/keys";

//const BASEURL = 'https://webhose.io/search';
//const query = "&q=iphone";

const options = {
	format: 'json',
	language: 'english',
	site_type: 'news',
	size: 10
};

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
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    webhose.search(this.state.topic, options, function (err, res) {})
	 
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