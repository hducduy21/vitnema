import React from 'react';
import './card.scss';
import CircleButton from '../CircleButton';
interface CardProps {
    title: string;
    poster: string;
    size?: 'small' | 'normal';
}

const Card: React.FC<CardProps> = ({ title, poster, size = 'normal' }) => {

    return (
        <div className="card">
            <div className="card-poster">
                <img alt={title} src={poster} />
                <div className="title-absolute">
                    <span>{title}</span>
                </div>
            </div>
            <div className="card-desc">
                <h4 className="title">{title}</h4>

                <div className="card-action">
                    <div className="card-action-general">
                        <CircleButton
                            label="Play"
                            type={'play'}
                            action={() => {}}
                        />
                        <CircleButton
                            label="Add to wishlist"
                            type={'add'}
                            action={() => {}}
                        />
                        <CircleButton
                            label="Like"
                            type={'like'}
                            action={() => {}}
                        />
                    </div>
                    <div className="card-action-detail">
                        <CircleButton
                            label="More info"
                            type={'info'}
                            action={() => {}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
