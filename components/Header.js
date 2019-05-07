export default function (state) {
  return `
<header class="top-navigation">
  <nav class="nav container">
    <ul class="horizontal_list nav_list">
      <li class="nav_item">
        <a class="nav_link" data-component="Home" href=".">
          <i class="material-icons nav_icon">home</i>
          Home
        </a>
      </li>
      <li class="nav_item">
        <a class="nav_link" data-component="Projects" href=".">
          <i class="material-icons nav_icon">dashboard</i>
          Projects
        </a>
      </li>
      <li class="nav_item">
        <a class="nav_link" data-component="Blog" href=".">
          <i class="material-icons nav_icon">library_books</i>
          Blog
        </a>
      </li>
    </ul>
  </nav>
</header>
`;
}
