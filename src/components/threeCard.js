import React from 'react';


function threeCard() {
    return(
        <div className='container'>
            <div className='card-1'>
                <img src='./images/icon-sedans.svg' alt='luxury image'/>
                <h2>Sedans</h2>
                <p>Choose a sedan for its affordability and excellent fuel economy.Ideal for cruising in the city or on your next road trip</p>
                <a href=''>Learn More</a>
            
            </div>

            <div className='card-2'>
                <img src='./images/icon-suvs.svg' alt='luxury image'/>
                <h2>SUVS</h2>
                <p>Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures. </p>
                <a href=''>Learn More</a>
            
            </div>
            <div className='card-3'>
                <img src='./images/icon-luxury.svg' alt='luxury image'/>
                <h2>Luxury</h2>
                <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style</p>
                <a href=''>Learn More</a>
            
            </div>

        </div>
    );
}

export default threeCard;
