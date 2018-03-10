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

class Favorite extends Component {
  state = {
    articles: [],
  };
  // When this component mounts, grab the article with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getArticle(this.props.match.params.id)
      .then(res => this.setState({ article: res.data }))
      .catch(err => console.log(err));
  }

  //TODO: Need to populate favorite, possibly use redux?//
  render() {
    return (
      <Container fluid>
          {this.state.articles.length ? (
            <Container fluid>
              {this.state.articles.map(article => (
              <Col size="md-3">
                <div class="login-bkg">
                  <form class="form">
                  <a href={article.url}>
                    <strong class="login-title">{article.thread.title} by {article.thread.url}</strong>
                  </a>
                  <p>{article.text}</p>
                  <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  </form>
                </div>
              </Col>
              ))}
            </Container>
          ) : (
            <Container fluid>
              <Row>
                <Col size="md-5"></Col>
                  <Col size="md-2">
                    <div class="login-bkg">
                      <form class="form">
                        <p class="login-title">You no likey?!</p>
                        <label class="sr-only" for="inlineFormInput">Name</label>
                        <p>Go star some articles to add them to your favorites page!</p>
                        <Link to="/articles"><button type="submit" class="btn btn-primary">← Back to Articles</button></Link>
                      </form>
                    </div>
                  </Col>
                <Col size="md-5"></Col>
              </Row>
            </Container>
            )}
      </Container>
    )
  };
}
export default Favorite;
