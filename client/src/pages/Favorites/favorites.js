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
    )
  };
}
export default Favorite;
