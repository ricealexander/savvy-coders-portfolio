import * as pages from './pages';

export default state => `
<main>
  <div class="container" style="margin-top: 3rem;">
    ${pages[state.body](state)}
  </div>
</main>
`;
