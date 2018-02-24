import React from "react";
import FlipPage from "react-flip-page";
import "./Flip.css";

const Flip = () =>

<FlipPage uncutPages ="true" showSwipehint="true" width="auto" orientation="horizontal" uncutpages="true" treshold="50" animationduration="300" pageBackground="#6497b1">
<article>
  <h1>My awesome first article</h1>
  <p>My awesome first content</p>
  <p>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumvLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
</article>
<article>
  <h1>My wonderful second article</h1>
  <p>My wonderful second content</p>
</article>
<article>
  <h1>My excellent third article</h1>
  <p>My excellent third content</p>
</article>
</FlipPage>;

export default Flip;