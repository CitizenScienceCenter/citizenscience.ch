// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Events from './views/Events.vue'

// lazy loading routes
const Home = resolve => {
  require.ensure(['./views/Home.vue'], () => {
    resolve( require('./views/Home.vue') );
  });
};
const About = resolve => {
  require.ensure(['./views/About.vue'], () => {
    resolve( require('./views/About.vue') );
  });
};
const Events = resolve => {
  require.ensure(['./views/Events.vue'], () => {
    resolve( require('./views/Events.vue') );
  });
};

export const routes = [
    { path: '/', component: Home, meta: {title: 'Homepage'} },
    { path: '/about', component: About, meta: {title: 'About'} },
    { path: '/events', component: Events, meta: {title: 'Events'} }
]
