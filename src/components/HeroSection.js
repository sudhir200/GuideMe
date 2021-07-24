import React from 'react';
import hero from './images/hero.jpg';
import './HeroSection.css';


const HeroSection = () => {
    return(
       
            <div className="hero-container">
                
               <div className="hero-wrapper">
                <h1><span className="s-pan">Ad</span>venture Calls?</h1>
                <p>Find the best Tourist Guides around...</p>
                <div className="search-bar">
                    <div className="search-input">
                    <input type="text" name="search" placeholder="Location eg. Pokhara" />
                    </div>
                    <div className="search-btn">
                    <button>Search</button>
                    </div>


                </div>
               </div>
                

                
            </div>
        
       
    )
}
export default HeroSection;