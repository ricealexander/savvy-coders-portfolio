const getIcon = (title) => {
  const items = [
    { title: 'Home',     text: 'home' },
    { title: 'Projects', text: 'dashboard' },
    { title: 'Blog',     text: 'library_books' },
  ];
  const matchingItems = items.filter(item => item.title === title);
  console.log({ title, items, matchingItems });
  return (matchingItems) ? matchingItems[0].text : '';
};

const linkTemplate = (html, link) => `
  ${html}
  <a class="nav_link" data-component="${link}" href="#">
    <li class="nav_item perfect-center">
      <i class="material-icons nav_icon">${getIcon(link)}</i>
      ${link}
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
