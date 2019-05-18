import Links from '../store/Links';

const linkTemplate = (html, link) => `${html}
  <a class="nav_link" data-component="${Links[link].page}" href="${Links[link].href}">
    <li class="nav_item perfect-center">
      <i class="material-icons nav_icon">${Links[link].icon}</i>
      ${Links[link].text}
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
