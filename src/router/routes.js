import Login from '@/views/shared/user/Login';
import Register from '@/views/shared/user/Register';
import Profile from '@/views/shared/user/Profile';

import RequestReset from '@/views/shared/user/RequestReset';
import Reset from '@/views/shared/user/Reset';

import Forum from '@/views/Forum';



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
const Checklist = resolve => {
    require.ensure(['../views/Checklist.vue'], () => {
        resolve( require('../views/Checklist.vue') );
    });
};
const Phases = resolve => {
    require.ensure(['../views/Phases.vue'], () => {
        resolve( require('../views/Phases.vue') );
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
const Terms = resolve => {
    require.ensure(['../views/Terms.vue'], () => {
        resolve( require('../views/Terms.vue') );
    });
};

export const routes = [
    { path: '/', component: Home, meta: {page: 'page-homepage', nav: false} },
    { path: '/activities', component: Activities, meta: {page: 'page-activities', nav: true} },
    { path: '/activities/checklist', component: Checklist, meta: {nav: false} },
    { path: '/activities/phases', component: Phases, meta: {nav: false} },
    { path: '/offer', component: Offer, meta: {page: 'page-offer', nav: true} },
    { path: '/about', component: About, meta: {page: 'page-about', nav: true} },
    { path: '/events', component: Events, meta: {page: 'page-events', nav: true} },
    { path: '/forum', component: Forum, meta: {requiresAuth: true, page: 'page-forum', nav: true} },

    { path: '/login', component: Login, meta: {page: 'page-login', nav: false} },
    { path: '/register', component: Register, meta: {page: 'page-register', nav: false} },
    { path: '/profile', component: Profile, meta: {requiresAccount: true, page: 'page-profile', nav: false} },
    { path: '/reset', component: RequestReset, meta: {page: 'page-reset', nav: false} },
    { path: '/reset/:token', component: Reset, meta: {page: 'page-reset', nav: false} },

    { path: '/terms', component: Terms, meta: {page: 'page-terms', nav: false} }
];
