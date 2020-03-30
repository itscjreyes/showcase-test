import React from 'react';

import './banner.styles.scss';

export const Banner = () => {
    return (
        <section className="banner">
            <div className="logo-wrapper">
                <a href="https://crowdriff.com" className="logo"><img src="https://crowdriffstg.wpengine.com/wp-content/uploads/crowdriff-logo-all-white.svg" alt="CrowdRiff"/></a>
            </div>
            <div className="container">
                <div className="content-wrapper">
                    <h1>Travel & Tourism Industry Response Community</h1>
                    <p>On this page, you can find a curated stream of content to equip you with the insights and knowledge on what other travel & tourism brands are doing to effectively respond to this current pandemic.</p>
                </div>
            </div>
        </section>
    )
}