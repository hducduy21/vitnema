import React from 'react';
import './home.scss';
import Logo from '../../assets/logo.png';
import { FaMagnifyingGlass, FaBell, FaUser } from 'react-icons/fa6';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../../components/Card';

const Home: React.FC = () => {
    const [deviceType, setDeviceType] = React.useState('tablet');
    const responsive = {
        desktop: {
            breakpoint: { max: 1000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 300, min: 200 },
            items: 2,
            slidesToSlide: 5, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    return (
        <div className="wrapper">
            <section id="home">
                <img
                    alt="Error loading"
                    src={
                        'https://img.ophim.live/uploads/movies/chi-em-lam-chieu-phan-2-poster.jpg'
                    }
                />

                <div className="nav-bar">
                    <div className="first-nav">
                        <img alt="Error loading" src={Logo} />
                        <span>Home</span>
                        <span>Series</span>
                        <span>Films</span>
                        <span>News & Popular</span>
                        <span>My List</span>
                        <span>Browse by Languages</span>
                    </div>
                    <div className="second-nav">
                        <FaMagnifyingGlass size={'25px'} />
                        <FaBell size={'25px'} />
                        <FaUser size={'25px'} />
                    </div>
                </div>
            </section>
            <section id="recommended">
                <div className="slider">
                    <Card
                        title="Người Bán Hàng Cần Mẫn Người Bán Hàng Cần Mẫn"
                        poster="https://img.ophim.live/uploads/movies/nguoi-ban-hang-can-man-poster.jpg"
                    />
                    <Card
                        title="Người Bán Hàng Cần Mẫn Người Bán Hàng Cần Mẫn"
                        poster="https://img.ophim.live/uploads/movies/nguoi-ban-hang-can-man-poster.jpg"
                    />
                    <Card
                        title="Người Bán Hàng Cần Mẫn Người Bán Hàng Cần Mẫn"
                        poster="https://img.ophim.live/uploads/movies/nguoi-ban-hang-can-man-poster.jpg"
                    />
                    <Card
                        title="Người Bán Hàng Cần Mẫn Người Bán Hàng Cần Mẫn"
                        poster="https://img.ophim.live/uploads/movies/nguoi-ban-hang-can-man-poster.jpg"
                    />
                    <Card
                        title="Người Bán Hàng Cần Mẫn Người Bán Hàng Cần Mẫn"
                        poster="https://img.ophim.live/uploads/movies/nguoi-ban-hang-can-man-poster.jpg"
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;
