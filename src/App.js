import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

const App = () => {
    return (
        <>
        <Toaster />
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Layout>
        </>
    );
}

export default App;