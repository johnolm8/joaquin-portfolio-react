import React from "react";
import EasingFunctions from "./EasingFunctions";
import {
  Nav,
  Header,
  About,
  Portfolio,
  Resume,
  Contact,
  Footer,
} from "./layout";

const smoothScroll = (e) => {
  e.preventDefault();
  const id = e.currentTarget.getAttribute("href").slice(1);
  const targetEl = document.getElementById(id);
  if (!targetEl) return;

  const html = document.querySelector("html");
  const body = document.querySelector("body");

  var t = 0;
  const fps = 60,
    finish = targetEl.offsetTop - 52,
    start = html.scrollTop, // pixel
    dir = finish > start ? 1 : -1;

  function move() {
    let fraction = EasingFunctions.easeInOutQuint(t);
    t += 1 / fps;
    let position = fraction * (finish - start) + start;
    if (position * dir >= finish * dir || t >= 1) {
      clearInterval(handler);
      html.scrollTop = finish;
      body.scrollTop = finish;
      return;
    }
    html.scrollTop = position;
    body.scrollTop = position;
  }
  var handler = setInterval(move, 1000 / fps);
};
export { smoothScroll };

export default (props) => (
  <React.Fragment>
    <Nav />
    <Header
      greeting="Hola!👋🏽"
      title="I'm Joaquín"
      subtitle="UI/UX Designer and Web Developer"
    />
    <About id="about" />
    <Portfolio id="portfolio" />
    <Resume id="resume" />
    <Contact id="contact" />
    <Footer />
  </React.Fragment>
);
