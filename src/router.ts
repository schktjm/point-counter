import * as VueRouter from 'vue-router';
import Hoge from './components/Hoge';
import { Parent } from './components/Test';

const routes: VueRouter.RouteRecordRaw[] = [
    { path: '/', component: Parent },
    { path: '/hoge', component: Hoge },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export default router;
