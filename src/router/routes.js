
export const routes = [
    {
        path: "/",
        component: () => import('../views/index.vue'),
        name: "Home",
        hidden: true
    },
    {
        path: "/2",
        component: () => import('../views/index2.vue'),
        name: "Home",
        hidden: true
    },
]

export const authRoutes = [

]
