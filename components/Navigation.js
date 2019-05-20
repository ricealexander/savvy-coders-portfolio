const buildLink = (link, dropdown) => `
<li class="nav_item perfect-center${dropdown ? ' has_dropdown' : ''}">
  <a class="nav_link" data-component="${link.page}" href="${link.href}">
    <i class="material-icons nav_icon">${link.icon}</i>
    ${link.text}
  </a>
  ${dropdown ? `<ul class="nav_dropdown">${dropdown}</ul>` : ''}
</li>`;

const recursiveLinkBuilder = state => (html, link) => {
  const stateLinks = state.links;
  const dropdown = (stateLinks[link]) ? stateLinks[link].reduce(recursiveLinkBuilder(state), '') : '';
  return html + buildLink(state.linkIndex[link], dropdown);
};

export default state => `
<header class="top-navigation">
  <nav class="nav container">
    <ul class="horizontal_list nav_list">
      ${state.links.primary.reduce(recursiveLinkBuilder(state), '')}
    </ul>
  </nav>
</header>`;
