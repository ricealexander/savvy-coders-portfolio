const buildLink = (link, dropdown) => `
<li class="nav_item perfect-center${dropdown ? ' has_dropdown' : ''}">
  <a class="nav_link" href="${link.href}" data-navigo>
    <i class="material-icons nav_icon">${link.icon}</i>
    ${link.text}
  </a>
  ${dropdown ? `<ul class="nav_dropdown">${dropdown}</ul>` : ''}
</li>`;

const recursiveLinkBuilder = state => (html, link) => {
  const Links = state.links;
  // if the link exists as a dropdown, build the dropdown
  const dropdown = (Links[link]) ? Links[link].reduce(recursiveLinkBuilder(state), '') : '';
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
