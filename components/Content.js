import * as pages from './Pages';


export default state => `
<main>
  <div class="container" style="margin-top: 3rem;">
    <h1>${state.title}</h1>
    ${pages[state.body]}
  </div>
</main>
`;
