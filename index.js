// Import Components
import Header  from './components/Header';
import Content from './components/Content';
import Footer  from './components/Footer';

// Import Images
import photoAvatar  from './assets/avatar.png';
import iconCodepen  from './assets/svg/icon-codepen.svg';
import iconCodewars from './assets/svg/icon-codewars.svg';
import iconGists    from './assets/svg/icon-github-gists.svg';
import iconGithub   from './assets/svg/icon-github.svg';
import iconLinkedin from './assets/svg/icon-linkedin.svg';

const images = {
  photoAvatar,
  iconCodepen,
  iconCodewars,
  iconGists,
  iconGithub,
  iconLinkedin,
};

const root = document.querySelector('[data-hook="root"]');

const states = {
  Home: {
    title: 'Additional Links',
    images,
  },
  Projects: {
    title: 'Additional Links (from projects page)',
    images,
  },
  Blog: {
    title: 'Additional Links (from blog page)',
    images,
  },
};

function render(state) {

  function handleNavigation(event) {
    event.preventDefault();

    const target = event.target.closest('.nav_link');
    const component = target.getAttribute('data-component');
    render(states[component]);
  }

  root.innerHTML = `
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
  `;

  const navLinks = document.querySelectorAll('.top-navigation .nav_link');
  navLinks.forEach(navLink => navLink.addEventListener('click', handleNavigation));
}

render(states.Home);
