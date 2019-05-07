import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const state = {};
state.title = 'Additional Links';

document.querySelector('[data-hook="root"]').innerHTML = `
  ${Header(state)}
  ${Content(state)}
  ${Footer(state)}
`;
