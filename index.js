import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const home = {
  title: 'Additional Links',
};

function render(state) {
  const root = document.querySelector('[data-hook="root"]');
  root.innerHTML = `
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
  `;
}

render(home);
