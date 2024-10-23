import React, { useState } from 'react';
import './WebAndCreatives.css';

const Card = ({ image, name, profession, socialLinks }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleClick = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    return (
        <>
        <div className="card">
            <div className="card__border">
                <img src={image} alt="card" className="card__img" />
            </div>

            <h3 className="card__name">{name}</h3>
            <span className="card__profession">{profession}</span>

            <div className={`card__social ${isOpen ? 'animation' : ''}`}>
                <div className="card__social-control">
                    <div className="card__social-toggle" onClick={handleToggleClick}>
                        <i className={`ri-add-line ${isOpen ? 'rotated' : ''}`}></i>
                    </div>
                    <span className="card__social-text">My social networks</span>

                    {isOpen && (
                        <ul className="card__social-list">
                            {socialLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="card__social-link">
                                        <i className={link.icon}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};

export default Card;
