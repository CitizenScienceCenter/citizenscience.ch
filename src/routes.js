import Home from './views/Home.vue'
import About from './views/About.vue'
import Events from './views/Events.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/events', component: Events }
]
