// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Events from './views/Events.vue'

// lazy loading routes
const Home = resolve => {
  require.ensure(['../views/Home.vue'], () => {
    resolve( require('../views/Home.vue') );
  });
};
const Activities = resolve => {
  require.ensure(['../views/Activities.vue'], () => {
    resolve( require('../views/Activities.vue') );
  });
};
const Offer = resolve => {
  require.ensure(['../views/Offer.vue'], () => {
    resolve( require('../views/Offer.vue') );
  });
};
const About = resolve => {
  require.ensure(['../views/About.vue'], () => {
    resolve( require('../views/About.vue') );
  });
};

export const routes = [
    { path: '/', component: Home, meta: {title: 'Homepage'} },
    { path: '/activities', component: Activities, meta: {title: 'Activities'} },
    { path: '/offer', component: Offer, meta: {title: 'Offer'} },
    { path: '/about', component: About, meta: {title: 'About'} }
]
