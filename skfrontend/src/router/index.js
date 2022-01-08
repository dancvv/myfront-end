import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../components/Home"
import News from "../components/News"
import Books from "../components/Books"
import Videos from "../components/Videos"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/books',
            component: Books
        },
        {
            path: '/videos',
            component: Videos
        }
    ]
})