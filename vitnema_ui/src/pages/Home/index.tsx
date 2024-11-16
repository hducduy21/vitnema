import React from 'react';
import './index.scss';

const Home: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="frame-container">
                <iframe
                    src="https://www.youtube.com/embed/uJMCNJP2ipI?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
};

export default Home;
