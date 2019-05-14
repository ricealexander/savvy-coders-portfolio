// import images
import photoAvatar  from '../../assets/avatar.png';
import iconCodepen  from '../../assets/svg/icon-codepen.svg';
import iconCodewars from '../../assets/svg/icon-codewars.svg';
import iconGists    from '../../assets/svg/icon-github-gists.svg';
import iconGithub   from '../../assets/svg/icon-github.svg';
import iconLinkedin from '../../assets/svg/icon-linkedin.svg';

export default `
<section class="columns perfect-center">
  <div class="column">
    <img src="${photoAvatar}" width="400">
  </div>
  <div class="column">
    <h1 class="title">Alexander Rice</h1>
    <h2 class="subtitle">Full-Stack Web Developer</h2>

    <h3>Connect with Me:</h3>
    <ul class="horizontal_list socials_list">
      <li class="socials_item">
        <a class="socials_link" href="https://github.com/ricealexander">
          <img class="socials_icon" src="${iconGithub}" alt="Github">
        </a>
      </li>
      <li class="socials_item">
        <a class="socials_link" href="https://www.linkedin.com/in/rice-alexander/">
          <img class="socials_icon" src="${iconLinkedin}" alt="LinkedIn">
        </a>
      </li>
    </ul>

    <h3>More Links:</h3>
    <ul class="horizontal_list socials_list">
      <li class="socials_item">
        <a class="socials_link" href="https://codepen.io/ricealexander/">
          <img class="socials_icon" src="${iconCodepen}" alt="Codepen">
        </a>
      </li>
      <li class="socials_item">
        <a class="socials_link" href="https://www.codewars.com/users/ricealexander">
          <img class="socials_icon" src="${iconCodewars}" alt="Codewars">
        </a>
      </li>
      <li class="socials_item">
        <a class="socials_link" href="https://gist.github.com/ricealexander">
          <img class="socials_icon" src="${iconGists}" alt="GitHub Gists">
        </a>
      </li>
    </ul>
  </div>
</section>
`;
