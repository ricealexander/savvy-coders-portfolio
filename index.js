// Import Components
import Navigation  from './components/Navigation';
import Content from './components/Content';
import Footer  from './components/Footer';

// Import States
import * as states from './store';

const root = document.querySelector('[data-hook="root"]');

function render(state) {

  function handleNavigation(event) {
    event.preventDefault();
    const target = event.target.closest('.nav_link');
    const component = target.getAttribute('data-component');
    render(states[component]);
  }

  root.innerHTML = `
    ${Navigation(state)}
    ${Content(state)}
    ${Footer(state)}
  `;

  const navLinks = document.querySelectorAll('.top-navigation .nav_link');
  navLinks.forEach(navLink => navLink.addEventListener('click', handleNavigation));
}

render(states.Home);
