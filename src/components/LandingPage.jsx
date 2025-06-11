/*

The design of the landing page is made using the figma design provided.
Once we have the icons and images, we can replace them with the final designs.

*/

import React from 'react';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="landing-page-container">
            {/* Top navigation bar */}
            <nav className="navbar">
                <div className="logo">
                    <span className="logo-text">
                        <span className="logo-p">P</span>
                        <span className="logo-l">L</span>
                        <span className="logo-a">A</span>
                        <span className="logo-y">Y</span>
                        GROUND
                    </span>
                </div>
            </nav>

            {/* Main section with welcome and button */}
            <main className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Welcome to <span className="highlight">AI Playground!</span>
                    </h1>
                    <p className="hero-subtitle">
                        Discover the amazing world of Artificial Intelligence through
                        <span className="highlight-fun"> fun games & exciting adventures!</span>
                    </p>
                    {/* Start exploring button */}
                    <button className="cta-button">
                        Let's Start Exploring!
                    </button>
                </div>
            </main>

            {/* Footer info */}
            <footer className="footer">
                <p>© {new Date().getFullYear()} AI Playground Play, Absorb and Succeed</p>
            </footer>
        </div>
    );
}

export default LandingPage;
