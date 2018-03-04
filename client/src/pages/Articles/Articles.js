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
import webhose from 'webhose-nodejs';
// import BASEURL from '../../utils/webHoseAPI';
// import APIKEY from "../../utils/keys";
import { BASEURL, FILTER, APIKEY } from "../../utils";

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
    // webhose.search(this.state.topic, options, function (err, res) {
    //   console.log(res);
    //   // console.log(this.state.topic);
    //   console.log(`process env: \n token: ${process.env.REACT_APP_WEBHOSE_TOKEN}\n uri: ${process.env.REACT_APP_WEBHOSE_URI}`);
    //   if(err) console.log(err);
  
    //   console.log(res.status);  // HTTP status code
    //   console.log(res.msg);     // Status message
    //   console.log(res.data);    // Webhose response body
    // })
    /*
    build axios url to this format:
    https://webhose.io/filterWebContent?token=
    apikey
    &format=json&sort=crawled&q=
    query
    %3Asite_type:news
    %3Alanguage%3Aenglish

     https://webhose.io/filterWebContent?token=
     a5cd9f56-4829-4d72-aed5-72af9e38b4b2
     &format=json&q=
     guns
     %20sort=crawled%20site_type%3Anews%20language%3aenglish
     */
    axios({
      method:'get',
      url:`${BASEURL + APIKEY + this.state.topic + FILTER}`,
      responseType:'json'
    })
      .then(function(response) {
      console.log(response)
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