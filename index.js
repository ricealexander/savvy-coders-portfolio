import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const state = {
  Blog: {
    title: "Additional Links (from blog page)",
  },
  Home: {
    title: "Additional Links",
  },
  Contact: {
    title: "Additional Links (from contact page)",
  },
  Projects: {
    title: "Additional Links (from projects page)",
  }
}

function render(state) {
  const root = document.querySelector('[data-hook="root"]');
  root.innerHTML = `
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
  `;
}

render(state.Home);

function handleNavigation(event) {
  event.preventDefault();

  const target = event.target.closest('.nav_link');
  const component = target.getAttribute('data-component');

  render(state[component]);
}

const navLinks = document.querySelectorAll(".top-navigation .nav_link");

navLinks[0].addEventListener("click", handleNavigation);
navLinks[1].addEventListener("click", handleNavigation);
navLinks[2].addEventListener("click", handleNavigation);