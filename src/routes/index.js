import loadable from '@/utils/loadable'

const Index = loadable(() => import(/* webpackChunkName: 'index' */ '@/views/Index'))

const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
]

export default routes
