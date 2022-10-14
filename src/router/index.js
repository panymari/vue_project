import { createWebHistory, createRouter } from "vue-router";
import UserPage from "@/components/user/UserPage";
import Users from "@/components/user/Users";

const routes = [
    {
        path: "/",
        name: "Users",
        component: Users,
    },
    {
        path: "/user/:id",
        name: "UserPage",
        component: UserPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;