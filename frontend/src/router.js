
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import ApplicationApplicationManager from "./components/listers/ApplicationApplicationCards"
import ApplicationApplicationDetail from "./components/listers/ApplicationApplicationDetail"

import Process1InvestigationManager from "./components/listers/Process1InvestigationCards"
import Process1InvestigationDetail from "./components/listers/Process1InvestigationDetail"
import Process1ProcessingManager from "./components/listers/Process1ProcessingCards"
import Process1ProcessingDetail from "./components/listers/Process1ProcessingDetail"

import Analysis1Analysis1Manager from "./components/listers/Analysis1Analysis1Cards"
import Analysis1Analysis1Detail from "./components/listers/Analysis1Analysis1Detail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/applications/applications',
                name: 'ApplicationApplicationManager',
                component: ApplicationApplicationManager
            },
            {
                path: '/applications/applications/:id',
                name: 'ApplicationApplicationDetail',
                component: ApplicationApplicationDetail
            },

            {
                path: '/process1s/investigations',
                name: 'Process1InvestigationManager',
                component: Process1InvestigationManager
            },
            {
                path: '/process1s/investigations/:id',
                name: 'Process1InvestigationDetail',
                component: Process1InvestigationDetail
            },
            {
                path: '/process1s/processings',
                name: 'Process1ProcessingManager',
                component: Process1ProcessingManager
            },
            {
                path: '/process1s/processings/:id',
                name: 'Process1ProcessingDetail',
                component: Process1ProcessingDetail
            },

            {
                path: '/analysis1s/analysis1s',
                name: 'Analysis1Analysis1Manager',
                component: Analysis1Analysis1Manager
            },
            {
                path: '/analysis1s/analysis1s/:id',
                name: 'Analysis1Analysis1Detail',
                component: Analysis1Analysis1Detail
            },



    ]
})
