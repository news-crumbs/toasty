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
import {connect} from 'react-redux';

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
    let maxLength=600
    return (
      <Container fluid>
          {this.props.favorites.length ? (
            <Container fluid>
              {this.props.favorites.map(article => (
              <Col size="md-3">
                <div className="login-bkg">
                  <form className="form">
                  <a href={article.url} target="_blank">
                    <strong className="login-title">{article.title} by {article.author}</strong>
                  </a>
                  <p>{article.text.length > maxLength ? (article.text.substring(0, 600) + "...") : article.text}</p>
                  <DeleteBtn onClick={() => this.props.dispatch({ type: 'REMOVE_FAVORITE' ,favorite: article})} />
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
                    <div className="login-bkg">
                      <form className="form">
                        <p className="login-title">You no likey?!</p>
                        <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                        <p>Go star some articles to add them to your favorites page!</p>
                        <Link to="/articles"><button type="submit" className="btn btn-primary">← Back to Articles</button></Link>
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

//Should be called mapStoreToProps, will pull favorites from the store//
const mapStateToProps = (state) => {
  return { favorites: state.favorites}
}
export default connect(mapStateToProps)(Favorite);
