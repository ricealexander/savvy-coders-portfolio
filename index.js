import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const root = document.querySelector('[data-hook="root"]');

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

function handleNavigation(event) {
  event.preventDefault();

  const target = event.target.closest('.nav_link');
  const component = target.getAttribute('data-component');
  render(state[component]);
}

function render(state) {
  root.innerHTML = `
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
  `;

  const navLinks = document.querySelectorAll(".top-navigation .nav_link");
  navLinks.forEach(navLink => navLink.addEventListener('click', handleNavigation));
}

render(state.Home);


