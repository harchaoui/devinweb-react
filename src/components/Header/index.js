import './style.css'

import React from 'react'
import MenuItem from './MenuItem'
import Logo from './Logo'


export default function () {
    return (
        <header className="upshift">
            <div className="container">
                <div className="menu-bar">
                    <Logo />
                    <div>
                        <MenuItem label="personal" color="red" url="#" />
                        <MenuItem label="business" color="red" url="#" />
                    </div>
                    <div>
                        <MenuItem label="about" url="#" />
                        <MenuItem label="pricing" url="#" />
                        <MenuItem label="faq" url="#" />
                        <MenuItem label="contact us" url="#" />
                    </div>
                    <div>
                        <MenuItem label="login" url="#" />
                        <MenuItem label="join now" url="#" hasBg />
                    </div>
                </div>

                <div className="hero">
                    <div>
                        <div className="hero-text">
                            <h3>Just drive.</h3>
                            <h3>we'll do the rest.</h3>
                            <p>All-inclusive. usage-based car subscriptions.</p>
                        </div>

                        <div className="cta">
                            <input type="number" name="phone" id="phone" />
                            <button className="cta-get-started"> get started</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28831/profile/profile-80.jpg?1" alt="Wes Bos"
                            height="44" />
                    </div>
                </div>

                <div className="partners">
                    <span>business insider</span>
                    <span>wired</span>
                    <span>urban-x</span>
                    <span>metropolis</span>
                    <span>curbed</span>
                    <a href="#" className="down"> down</a>
                </div>
            </div>
        </header>
    );
}

