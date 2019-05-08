// Import Components
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

// Import Images
import photoAvatar  from "./assets/avatar.png";
import iconCodepen  from "./assets/svg/icon-codepen.svg";
import iconCodewars from "./assets/svg/icon-codewars.svg";
import iconGists    from "./assets/svg/icon-github-gists.svg";
import iconGithub   from "./assets/svg/icon-github.svg";
import iconLinkedin from "./assets/svg/icon-linkedin.svg";

const images = {
  photoAvatar,
  iconCodepen,
  iconCodewars,
  iconGists,
  iconGithub,
  iconLinkedin,
}


var root = document.querySelector('[data-hook="root"]');

const state = {
  Blog: {
    title: "Additional Links (from blog page)",
    images,
  },
  Home: {
    title: "Additional Links",
    images,
  },
  Contact: {
    title: "Additional Links (from contact page)",
    images,
  },
  Projects: {
    title: "Additional Links (from projects page)",
    images,
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


