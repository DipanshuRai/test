import React from 'react';
import Card from './Card'; // Ensure this path matches where your Card component is located

const cardData = [
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Emily Jules',
        profession: 'UI/UX Designer',
        socialLinks: [
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://www.linkedin.com/', icon: 'ri-linkedin-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Hamley Doe',
        profession: 'Front-End Developer',
        socialLinks: [
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://www.linkedin.com/', icon: 'ri-linkedin-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'John Jules',
        profession: 'UI/UX Designer',
        socialLinks: [
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://www.linkedin.com/', icon: 'ri-linkedin-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'John Doe',
        profession: 'Front-End Developer',
        socialLinks: [
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://www.linkedin.com/', icon: 'ri-linkedin-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Emily Jules',
        profession: 'UI/UX Designer',
        socialLinks: [
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://www.linkedin.com/', icon: 'ri-linkedin-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'John Doe',
        profession: 'Front-End Developer',
        socialLinks: [
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://www.linkedin.com/', icon: 'ri-linkedin-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Emily Jules',
        profession: 'UI/UX Designer',
        socialLinks: [
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://www.linkedin.com/', icon: 'ri-linkedin-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'John Doe',
        profession: 'Front-End Developer',
        socialLinks: [
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://www.linkedin.com/', icon: 'ri-linkedin-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Emily Jules',
        profession: 'UI/UX Designer',
        socialLinks: [
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://www.linkedin.com/', icon: 'ri-linkedin-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'John Doe',
        profession: 'Front-End Developer',
        socialLinks: [
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://www.linkedin.com/', icon: 'ri-linkedin-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'Emily Jules',
        profession: 'UI/UX Designer',
        socialLinks: [
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://www.linkedin.com/', icon: 'ri-linkedin-line' },
        ],
    },
    {
        image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
        name: 'John Doe',
        profession: 'Front-End Developer',
        socialLinks: [
            { url: 'https://www.instagram.com/', icon: 'ri-instagram-line' },
            { url: 'https://www.linkedin.com/', icon: 'ri-linkedin-line' },
        ],
    },
];

const CardList = () => {
    return (
        <>
        <br /><br /><br />
        <div className="card-list">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    name={card.name}
                    profession={card.profession}
                    socialLinks={card.socialLinks}
                />
            ))}
        </div>
        </>
    );
};

export default CardList;
