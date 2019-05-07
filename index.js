import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';

const state = {};
state.title = 'Additional Links';

document.querySelector('[data-hook="root"]').innerHTML = `
  ${Header(state)}
  ${Content(state)}
  ${Footer(state)}
`;
