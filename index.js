// Import Dependencies
import Navigo from 'navigo';
// import { capitalize } from 'lodash';

// Import Components
import Navigation from './components/Navigation';
import Content    from './components/Content';
import Footer     from './components/Footer';

// Import States
import * as states from './store';

const root = document.querySelector('[data-hook="root"]');
const router = new Navigo(window.location.origin);

function startApp(state) {
  root.innerHTML = `
    ${Navigation(state)}
    ${Content(state)}
    ${Footer(state)}
  `;
  router.updatePageLinks();
}

function handleRoute(params) {
  const page = params.path.charAt(0).toUpperCase() + params.path.slice(1);
  startApp(states[page]);
}

router
  .on('/:path', handleRoute)
  .on('/', () => startApp(states.Home))
  .resolve();
