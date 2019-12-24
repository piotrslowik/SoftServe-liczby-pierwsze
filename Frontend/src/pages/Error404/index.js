import React from 'react';

import Logo from '../../components/Shared/Logo';

const Error404 = () => {
    return (
        <div className="Error404">
            <div className="Error404__back">
                <Logo />
                <h3>Powrót</h3>
            </div>
            <div className="Error404__text">
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
        </div>
    )
}

export default Error404;
