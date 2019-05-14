// import images
import photoAvatar  from '../../assets/avatar.png';
import iconCodepen  from '../../assets/svg/icon-codepen.svg';
import iconCodewars from '../../assets/svg/icon-codewars.svg';
import iconGists    from '../../assets/svg/icon-github-gists.svg';
import iconGithub   from '../../assets/svg/icon-github.svg';
import iconLinkedin from '../../assets/svg/icon-linkedin.svg';

const buildLink = (name) => {
  const items = [
    {
      name: 'Codepen',
      icon: iconCodepen,
      href: 'https://codepen.io/ricealexander/',
    },
    {
      name: 'Codewars',
      icon: iconCodewars,
      href: 'https://www.codewars.com/users/ricealexander',
    },
    {
      name: 'Gists',
      icon: iconGists,
      href: 'https://gist.github.com/ricealexander',
    },
    {
      name: 'Github',
      icon: iconGithub,
      href: 'https://github.com/ricealexander',
    },
    {
      name: 'LinkedIn',
      icon: iconLinkedin,
      href: 'https://www.linkedin.com/in/rice-alexander/',
    },
  ];

  const matchingItems = items.filter(item => item.name === name);
  return (!matchingItems) ? '' : `
    <li class="socials_item">
      <a class="socials_link" href="${matchingItems[0].href}">
        <img class="socials_icon" src="${matchingItems[0].icon}" alt="${matchingItems[0].name}">
      </a>
    </li>
  `;
};

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
      ${buildLink('Github')}
      ${buildLink('LinkedIn')}
    </ul>

    <h3>More Links:</h3>
    <ul class="horizontal_list socials_list">
      ${buildLink('Codepen')}
      ${buildLink('Codewars')}
      ${buildLink('Gists')}
    </ul>
  </div>
</section>
`;
