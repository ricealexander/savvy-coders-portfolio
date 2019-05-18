const buildLink = social => `
<li class="socials_item">
  <a class="socials_link" href="${social.href}">
    <img class="socials_icon" src="${social.icon}" alt="${social.name}">
  </a>
</li>`;

export default state => `
<section class="columns perfect-center">
  <div class="column">
    <img src="${state.images.photoAvatar}" width="400">
  </div>
  <div class="column">
    <h1 class="title">Alexander Rice</h1>
    <h2 class="subtitle">Full-Stack Web Developer</h2>

    <h3>Connect with Me:</h3>
    <ul class="horizontal_list socials_list">
      ${buildLink(state.socials.github)}
      ${buildLink(state.socials.linkedin)}
    </ul>

    <h3>More Links:</h3>
    <ul class="horizontal_list socials_list">
      ${buildLink(state.socials.codepen)}
      ${buildLink(state.socials.codewars)}
      ${buildLink(state.socials.gists)}
    </ul>
  </div>
</section>
`;
