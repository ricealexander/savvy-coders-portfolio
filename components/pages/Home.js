const buildSocial = social => `
<li class="socials_item">
  <a class="socials_link" href="${social.href}" target="_blank">
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
      ${buildSocial(state.socials.github)}
      ${buildSocial(state.socials.linkedin)}
    </ul>

    <h3>More Links:</h3>
    <ul class="horizontal_list socials_list">
      ${buildSocial(state.socials.codepen)}
      ${buildSocial(state.socials.codewars)}
      ${buildSocial(state.socials.gists)}
    </ul>
  </div>
</section>
`;
