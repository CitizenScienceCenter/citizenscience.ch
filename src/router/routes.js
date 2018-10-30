// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Events from './views/Events.vue'

// lazy loading routes
const Home = resolve => {
  require.ensure(['../views/Home.vue'], () => {
    resolve( require('../views/Home.vue') );
  });
};
const About = resolve => {
  require.ensure(['../views/What.vue'], () => {
    resolve( require('../views/What.vue') );
  });
};
const SDG = resolve => {
  require.ensure(['../views/Who.vue'], () => {
    resolve( require('../views/Who.vue') );
  });
};

export const routes = [
    { path: '/', component: Home, meta: {title: 'Homepage'} },
    { path: '/what', component: About, meta: {title: 'What'} },
    { path: '/who', component: SDG, meta: {title: 'Who'} }
]
