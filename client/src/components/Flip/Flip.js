import React from "react";
import FlipPage from "react-flip-page";
import "./Flip.css";


const Flip = () =>

<FlipPage showSwipehint="true" width="auto" orientation="horizontal" uncutPages="true" treshold="50" animationduration="300" pageBackground="#6497b1">
<article>
<div class="col-md-6">
  <h1>My awesome first article</h1>
  <p>My awesome first content</p>
  <img className="img-responsive" src="../../assets/images/toast1.jpg" alt="logo"/>
</div>
</article>
<article>
  <div class="col-md-6">
    <h1>My wonderful second article</h1>
    <p>My wonderful second content</p>
    <img className="img-responsive" src="../../assets/images/toast2.jpg" alt="logo"/>
  </div>
  <div class="col-md-6">
    <a href="https://www.google.com"><img className="img-responsive" src="../../assets/images/toast3.jpg" alt="logo"/></a></div>
</article>
<article>
  <div class="col-md-6">
    <h1>"My excellent third article"</h1>
    <p>My excellent third content</p>
    <img className="img-responsive" src="../../assets/images/toast4.jpg" alt="logo"/>
  </div>
</article>
</FlipPage>;

export default Flip;