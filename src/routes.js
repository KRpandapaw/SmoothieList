import Users from './components/Users';
import User from './components/User';
import Home from './components/Home';
import Smoothies from './components/Smoothies';

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/smoothies',
        component: Smoothies
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/users/:id',
        component: User
    }
];