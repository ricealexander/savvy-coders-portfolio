import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const home = {
  title: 'Additional Links',
};
const projects = {
  title: 'Additional Links (from projects page)',
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

document.querySelector('[data-hook="projects-link"]')
  .addEventListener("click", event => {
    event.preventDefault(); // stops page reload
    render(projects); // re-render on click
});