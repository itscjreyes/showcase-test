import React from 'react';

import './footer.styles.scss';

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <a href="https://crowdriff.com" className="logo"><img src="https://crowdriffstg.wpengine.com/wp-content/uploads/crowdriff-logo-sm.png" alt="CrowdRiff"/></a>
                <p>&copy;2020 CrowdRiff Inc.</p>
            </div>
        </footer>
    )
}