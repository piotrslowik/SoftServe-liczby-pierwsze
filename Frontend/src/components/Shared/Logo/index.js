import React from 'react';

import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/" className="Logo-link">
            <div className="Logo">
                <p>Auto-Moto</p>
                <p className="luxury">LUXURY</p>
            </div>
        </Link>
    )
}

export default Logo;
