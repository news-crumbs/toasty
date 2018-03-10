import React from "react";
import FlipPage from "react-flip-page";
import "./Flip.css";
import {connect} from 'react-redux';


const Flip = ({ articles, maxLength = 600, linkLength = 50, dispatch }) =>

  <FlipPage width="auto" height="720" orientation="horizontal" uncutPages="true" treshold="50" animationduration="300" pageBackground="#fff">
    {articles.map((a, i) => {
      return (
        <article>
          <div className="col-md-6">
            <h1>{a.title}</h1>
            <p>{a.text.length > maxLength ? (a.text.substring(0, 600) + "...") : a.text}</p>
            <p> Read the article here:
        <a href={a.url}>{a.url.length > linkLength ? (a.url.substring(0, 50) + "...") : a.url}</a>
            </p>
            <button
            onClick={() => dispatch({ type: 'ADD_FAVORITE', favorite: a})}> Add to favorites </button>
          </div>
        </article>
      )
    }
    )}

  </FlipPage>;

export default connect()(Flip);

{/* <article>
<div className="col-md-6">
  <h1>My awesome first article</h1>
  <p>My awesome first content</p>
  <img className="img-responsive" src="../../assets/images/toast1.jpg" alt="logo"/>
</div>
</article>
<article>
  <div className="col-md-6">
    <h1>My wonderful second article</h1>
    <p>My wonderful second content</p>
    <img className="img-responsive" src="../../assets/images/toast2.jpg" alt="logo"/>
  </div>
  <div className="col-md-6">
    <a href="https://www.google.com"><img className="img-responsive" src="../../assets/images/toast3.jpg" alt="logo"/></a></div>
</article>
<article>
  <div className="col-md-6">
    <h1>"My excellent third article"</h1>
    <p>My excellent third content</p>
    <img className="img-responsive" src="../../assets/images/toast4.jpg" alt="logo"/>
  </div>
</article> */}