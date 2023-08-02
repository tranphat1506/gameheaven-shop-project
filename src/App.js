import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routers';
const App = () => {
    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.page;
                const Layout = route.Layout || React.Fragment;
                const { props } = route || {};
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout {...props}>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
            <Route></Route>
        </Routes>
    );
};

export default App;
