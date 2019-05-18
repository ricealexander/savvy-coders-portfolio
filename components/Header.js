import Links from '../store/Links';

const linkTemplate2 = (link, callback) => `
<a class="nav_link" data-component="${link.page}" href="${link.href}">
  <li class="nav_item perfect-center">
    <i class="material-icons nav_icon">${link.icon}</i>
    ${link.text}
    ${callback ? `<ul>${callback}</ul>` : ''}
  </li>
</a>`;

const linkTemplate = (stateLinks, callback) => (html, link) => {
  const callback2 = (stateLinks[link]) ? stateLinks[link].reduce(linkTemplate(stateLinks), '') : '';
  return html + linkTemplate2(Links[link], callback2);
};

export default state => `
<header class="top-navigation">
  <nav class="nav container">
    <ul class="horizontal_list nav_list">
      ${state.links.primary.reduce(linkTemplate(state.links), '')}
      ${linkTemplate2(Links.projects, state.links.projects.reduce(linkTemplate(state.links), ''))}
    </ul>
  </nav>
</header>`;
