import { createBrowserRouter } from 'react-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'

const router = createBrowserRouter([
    { path: '/', Component: Home },
    { path: '/login', Component: Login },
])

export default router
