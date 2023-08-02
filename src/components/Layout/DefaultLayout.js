import { Header } from '../Header';
const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default DefaultLayout;
