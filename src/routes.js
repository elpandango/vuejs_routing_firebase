import Home from './components/Home.vue';
import User from './components/User.vue';
import UserDetails from './components/UserDetails.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/user', component: User, children: [
    { path: ':id', component: UserDetails, name: 'userDetails'}
  ] }
];
