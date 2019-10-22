// Import Dependencies
import Navigo from 'navigo'
// import { capitalize } from 'lodash';

// Import Components
import Navigation from './components/Navigation'
import Content    from './components/Content'
import Footer     from './components/Footer'

// Import States
import * as states from './store'
import { db } from './firebase'

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()

const root = document.querySelector('[data-hook="root"]')
const router = new Navigo(window.location.origin)

function render(state) {
  root.innerHTML = `
    ${Navigation(state)}
    ${Content(state)}
    ${Footer(state)}
  `
  router.updatePageLinks()
}

function handleRoute(params) {
  const page = params.path
  console.log(params)
  render(states[capitalize(page)])
}

router
  .on('/:path', handleRoute)
  .on('/', () => render(states.Home))
  .resolve()


// axios
//   .get('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => {
//     // response.data contains an ARray of 100 post objects
//     states.Blog.main = response.data.map(
//       ({ title, body }) => `
//       <article>
//         <h2>${title}<h2>
//         <p>${body}<p>
//       </article>
//     `,
//     ).join('');

//     if (capitalize(router.lastRouteResolved().params.page) === 'Blog') {
//       render(states.Blog);
//     }

//   })
//   .catch(err => console.log(err));


// Gallery
db.collection('images')
