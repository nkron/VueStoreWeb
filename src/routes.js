import Home from './components/Home.vue'
import Portfolio from './components/Portfolio/Portfolio.vue'
import Stonks from './components/Stonks/Stonk.vue'

export const routes = [
    {path: '/', component: Home},
    {path: '/portfolio', component: Portfolio},
    {path: '/stonks', component: Stonks}
]