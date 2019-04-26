// I don't want my email visible in the index page source
// Most bots don't have JavaScript enabled
(()=>{
  const socialsLinks = document.querySelector('[data-hook="socials-links"]');
  const emailLink = '<li>Email: <a href="mailto:webdev@ricealexander.com">webdev@ricealexander.com</a></li>';
  socialsLinks.insertAdjacentHTML('beforeend', emailLink);
})();
