import { DefaultLayout } from '../components/Layout';
import { Home } from '../pages/Home';
import { Payment } from '../pages/Payment';
import { ReviewImg } from '../pages/ReviewMedia';
import { Search } from '../pages/Search';

const publicRoutes = [
    { path: '/', page: Home, Layout: DefaultLayout },
    { path: '/home', page: Home, Layout: DefaultLayout },
    { path: '/payment', page: Payment, Layout: DefaultLayout },
    { path: '/search', page: Search, Layout: DefaultLayout },
    {
        path: '/photo',
        page: ReviewImg,
        Layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
