export default function (state) {
  return `
<header class="top-navigation">
  <nav class="nav container">
    <ul class="horizontal_list nav_list">
      <a class="nav_link" data-component="Home" href="#">
        <li class="nav_item perfect-center">
          <i class="material-icons nav_icon">home</i>
          Home
        </li>
      </a>
      <a class="nav_link" data-component="Projects" href="#">
        <li class="nav_item perfect-center">
          <i class="material-icons nav_icon">dashboard</i>
          Projects
        </li>
      </a>
      <a class="nav_link" data-component="Blog" href="#">
        <li class="nav_item perfect-center">
          <i class="material-icons nav_icon">library_books</i>
          Blog
        </li>
      </a>
    </ul>
  </nav>
</header>
`;
}
