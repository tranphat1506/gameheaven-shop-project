import { Header } from '../components/Header';

const publicRoutes = [
    { path: '/', page: Header },
    { path: '/home', page: Header },
];

const privateRoutes = [
    { path: '/', page: Header },
    { path: '/home', page: Header },
];

export { publicRoutes, privateRoutes };
