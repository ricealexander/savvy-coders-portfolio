import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";

var initialHTML = document.body.innerHTML;

document.body.innerHTML = `
  ${Header}
  ${Content}
  ${Footer}
  ${initialHTML}
`;