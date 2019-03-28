import Home from '@/views/Home';

import Login from '@/views/shared/user/Login';
import Register from '@/views/shared/user/Register';
import Profile from '@/views/shared/user/Profile';

import RequestReset from '@/views/shared/user/RequestReset';
import Reset from '@/views/shared/user/Reset';

import Forum from '@/views/Forum';

import ChildView from '@/views/ChildView';


// lazy loading routes

const Projects = resolve => {
    require.ensure(['../views/contribute/Projects.vue'], () => {
        resolve( require('../views/contribute/Projects.vue') );
    });
};
const Collaborations = resolve => {
    require.ensure(['../views/contribute/Collaborations.vue'], () => {
        resolve( require('../views/contribute/Collaborations.vue') );
    });
};

const StartProject = resolve => {
    require.ensure(['../views/start/StartProject.vue'], () => {
        resolve( require('../views/start/StartProject.vue') );
    });
};
const Offer = resolve => {
    require.ensure(['../views/start/Offer.vue'], () => {
        resolve( require('../views/start/Offer.vue') );
    });
};
const Checklist = resolve => {
    require.ensure(['../views/start/Checklist.vue'], () => {
        resolve( require('../views/start/Checklist.vue') );
    });
};
const Phases = resolve => {
    require.ensure(['../views/start/Phases.vue'], () => {
        resolve( require('../views/start/Phases.vue') );
    });
};

const ZurichStyle = resolve => {
    require.ensure(['../views/citizenscience/ZurichStyle.vue'], () => {
        resolve( require('../views/citizenscience/ZurichStyle.vue') );
    });
};
const SDG = resolve => {
    require.ensure(['../views/citizenscience/SDG.vue'], () => {
        resolve( require('../views/citizenscience/SDG.vue') );
    });
};

const Mission = resolve => {
    require.ensure(['../views/about/Mission.vue'], () => {
        resolve( require('../views/about/Mission.vue') );
    });
};
const People = resolve => {
    require.ensure(['../views/about/People.vue'], () => {
        resolve( require('../views/about/People.vue') );
    });
};
const Partnerships = resolve => {
    require.ensure(['../views/about/Partnerships.vue'], () => {
        resolve( require('../views/about/Partnerships.vue') );
    });
};
const PWA = resolve => {
    require.ensure(['../views/about/PWA.vue'], () => {
        resolve( require('../views/about/PWA.vue') );
    });
};
const Contact = resolve => {
    require.ensure(['../views/about/Contact.vue'], () => {
        resolve( require('../views/about/Contact.vue') );
    });
};

const Events = resolve => {
    require.ensure(['../views/Events.vue'], () => {
        resolve( require('../views/Events.vue') );
    });
};
const Terms = resolve => {
    require.ensure(['../views/shared/static/Terms.vue'], () => {
        resolve( require('../views/shared/static/Terms.vue') );
    });
};


export const routes = [
    { path: '/', component: Home, meta: {i18n: 'navigation-homepage', nav: false} },

    {
        path: '/contribute', component: ChildView, meta: {i18n: 'navigation-contribute', nav: true},
        redirect: '/contribute/projects',
        children: [
            { path: '/contribute/projects', component: Projects, meta: {i18n: 'navigation-contribute-projects'} },
            { path: '/contribute/collaborations', component: Collaborations, meta: {i18n: 'navigation-contribute-collaborations'} }
        ]
    },

    {
        path: '/start', component: ChildView, meta: {i18n: 'navigation-startproject', nav: true},
        redirect: '/start/startproject',
        children: [
            { path: '/start/startproject', component: StartProject, meta: {i18n: 'navigation-startproject-overview'} },
            { path: '/start/offer', component: Offer, meta: {i18n: 'navigation-startproject-offer'} },
            { path: '/start/checklist', component: Checklist, meta: {i18n: 'navigation-startproject-checklist'} },
            { path: '/start/phases', component: Phases, meta: {i18n: 'navigation-startproject-phases'} }
        ]
    },

    {
        path: '/citizenscience', component: ChildView, meta: {i18n: 'navigation-citizenscience', nav: true},
        redirect: '/citizenscience/zurichstyle',
        children: [
            { path: '/citizenscience/zurichstyle', component: ZurichStyle, meta: {i18n: 'navigation-citizenscience-zurichstyle'} },
            { path: '/citizenscience/sdg', component: SDG, meta: {i18n: 'navigation-citizenscience-sdg'} }
        ]
    },

    {
        path: '/about', component: ChildView, meta: {i18n: 'navigation-about', nav: true},
        redirect: '/about/mission',
        children: [
            { path: '/about/mission', component: Mission, meta: {i18n: 'navigation-about-mission'} },
            { path: '/about/people', component: People, meta: {i18n: 'navigation-about-people'} },
            { path: '/about/partnerships', component: Partnerships, meta: {i18n: 'navigation-about-partnerships'} },
            { path: '/about/pwa', component: PWA, meta: {i18n: 'navigation-about-pwa'} },
            { path: '/about/contact', component: Contact, meta: {i18n: 'navigation-about-contact'} }
        ]
    },

    { path: '/events', component: Events, meta: {i18n: 'navigation-events', nav: true} },
    { path: '/forum', component: Forum, meta: {requiresAuth: true, i18n: 'navigation-forum', nav: true} },

    { path: '/login', component: Login, meta: {requiresAuth: true, i18n: 'navigation-login', nav: false} },
    { path: '/register', component: Register, meta: {i18n: 'navigation-register', nav: false} },
    { path: '/profile', component: Profile, meta: {requiresAccount: true, i18n: 'navigation-profile', nav: false} },
    { path: '/reset', component: RequestReset, meta: {i18n: 'navigation-reset', nav: false} },
    { path: '/reset/:token', component: Reset, meta: {i18n: 'navigation-reset', nav: false} },

    { path: '/terms', component: Terms, meta: {i18n: 'navigation-terms', nav: false} }
];
