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
    { path: '/', component: Home, meta: {page: 'page-homepage', nav: false} },
    { path: '/activities', component: Activities, meta: {page: 'page-activities', nav: true} },
    { path: '/offer', component: Offer, meta: {page: 'page-offer', nav: true} },
    { path: '/about', component: About, meta: {page: 'page-about', nav: true} }
]
