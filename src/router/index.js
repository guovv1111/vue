import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home';
import Detail from '@/components/Detail';
import Cur from '@/components/Cur';
import Last from '@/components/Last';
import EScript from '@/components/EScript';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: 'cur',
                    name: 'Cur',
                    component: Cur,
                },
                {
                    path: 'last',
                    name: 'Last',
                    component: Last,
                }
            ]
        },
        {
            path: '/detail/:userId',
            name: 'Detail',
            component: Detail
        },
        {
            path: '/escript',
            name: 'EScript',
            component: EScript
        }
    ]
})
