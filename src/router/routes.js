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
const Events = resolve => {
    require.ensure(['../views/Events.vue'], () => {
        resolve( require('../views/Events.vue') );
    });
};
const Privacy = resolve => {
    require.ensure(['../views/Privacy.vue'], () => {
        resolve( require('../views/Privacy.vue') );
    });
};
const Terms = resolve => {
    require.ensure(['../views/Terms.vue'], () => {
        resolve( require('../views/Terms.vue') );
    });
};

export const routes = [
    { path: '/', component: Home, meta: {page: 'page-homepage', nav: false} },
    { path: '/activities', component: Activities, meta: {page: 'page-activities', nav: true} },
    { path: '/offer', component: Offer, meta: {page: 'page-offer', nav: true} },
    { path: '/about', component: About, meta: {page: 'page-about', nav: true} },
    { path: '/events', component: Events, meta: {page: 'page-events', nav: true} },
    { path: '/privacy', component: Privacy, meta: {page: 'page-privacy', nav: false} },
    { path: '/terms', component: Terms, meta: {page: 'page-terms', nav: false} }
]
