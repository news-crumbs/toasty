// import React, { Component } from "react";
// import Search from "./Search";
// // import API from "../utils/webHoseAPI";
// class WebhoseContainer extends Component {
//   state = {
//     result: [],
//     search: ""
//   };
//   // When this component mounts, search for the movie "The Matrix"
//   componentDidMount() {
//     this.searchArticles("");
//   }
//   getArticles = query => {
//     API.search(query)
//       .then(res => this.setState({ result: res.data }))
//       .catch(err => console.log(err));
//   };
//   handleInputChange = event => {
//     const value = event.target.value;
//     const name = event.target.name;
//     this.setState({
//       [name]: value
//     });
//   };
//   // When the form is submitted, search the API for the value of `this.state.search`
//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchArticles(this.state.search);
//   };
//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col size="md-8">
//             <Panel
//               heading={this.state.result.Title || "Search for a topic to Begin"}
//             >
//               {this.state.result.Title
//                 ? <ArticleDetail
//                     title={this.state.result.Title}

//                   />
//                 : <h3>No Results to Display</h3>}
//             </Panel>
//           </Col>
//           <Col size="md-4">
//             <Panel heading="Search">
//               <Search
//                 value={this.state.search}
//                 handleInputChange={this.handleInputChange}
//                 handleFormSubmit={this.handleFormSubmit}
//               />
//             </Panel>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }
// export default WebhoseContainer;