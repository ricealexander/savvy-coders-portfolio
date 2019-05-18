import photoAvatar  from '../assets/avatar.png';
import iconCodepen  from '../assets/svg/icon-codepen.svg';
import iconCodewars from '../assets/svg/icon-codewars.svg';
import iconGists    from '../assets/svg/icon-github-gists.svg';
import iconGithub   from '../assets/svg/icon-github.svg';
import iconLinkedin from '../assets/svg/icon-linkedin.svg';

export default {
  body: 'Home',
  title: 'Home',
  links: ['projects', 'blog'],
  images: {
    photoAvatar,
  },
  socials: {
    codepen: {
      name: 'Codepen',
      icon: iconCodepen,
      href: 'https://codepen.io/ricealexander/',
    },
    codewars: {
      name: 'Codewars',
      icon: iconCodewars,
      href: 'https://www.codewars.com/users/ricealexander',
    },
    gists: {
      name: 'Gists',
      icon: iconGists,
      href: 'https://gist.github.com/ricealexander',
    },
    github: {
      name: 'Github',
      icon: iconGithub,
      href: 'https://github.com/ricealexander',
    },
    linkedin: {
      name: 'LinkedIn',
      icon: iconLinkedin,
      href: 'https://www.linkedin.com/in/rice-alexander/',
    },
  },
};
