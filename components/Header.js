const linkTemplate = (html, link) => `
  ${html}
  <a class="nav_link" data-component="${link.title}" href="#">
    <li class="nav_item perfect-center">
      <i class="material-icons nav_icon">${link.icon}</i>
      ${link.title}
    </li>
  </a>
`;

export default state => `
  <header class="top-navigation">
    <nav class="nav container">
      <ul class="horizontal_list nav_list">
        ${state.links.reduce(linkTemplate, '')}
      </ul>
    </nav>
  </header>
`;
