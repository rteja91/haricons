import React from 'react';
import Header from '../Common/Header/Header';
import FooterPage from '../Common/Footer/Footer';

const NotFound = () => {
    return (
        <div>
            <Header />
            <h1 className="text-center" style={{ backgroundColor: "#f7941e", padding: "10px 5px", color: "#fff", fontWeight: "400" }}>404 PageNotfound</h1>
            <FooterPage />
        </div>
    );
};

export default NotFound;