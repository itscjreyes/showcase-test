import React from 'react';

import './no-results.styles.scss';

export const NoResults = () => {
    return (
        <section className="no-results">
            <div className="container">
                <h2>Sorry, there are no matches. Please try again.</h2>
            </div>
        </section>
    )
}