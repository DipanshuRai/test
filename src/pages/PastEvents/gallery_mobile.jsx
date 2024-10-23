import React, { useState, useEffect, useRef } from "react";
import ScrambleText from '../../components/Scramble';
import Navbar from '../Navbar/Navbar';
import "./gallery_mobile.css";
import './gallery.css';

// ImageList Component for rendering the images
const ImageList = ({ images, listRef }) => {
  return (
    <div className="list" ref={listRef}>
      {images.map((img, index) => (
        <div className="item" key={index}>
          <img src={img} alt={`image${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

// NavigationButtons Component for Prev and Next Buttons
const NavigationButtons = ({ prevSlide, nextSlide }) => {
  return (
    <div className="buttons">
      <button id="prev" onClick={prevSlide}>
        &lt;
      </button>
      <button id="next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

// Dots Component for navigating between slides
const Dots = ({ images, active, setActive }) => {
  return (
    <ul className="dots">
      {images.map((_, index) => (
        <li
          key={index}
          className={index === active ? "active" : ""}
          onClick={() => setActive(index)}
        ></li>
      ))}
    </ul>
  );
};

const GalleryMobile = () => {
  const [active, setActive] = useState(0);
  const lengthItems = 4; // Total of 5 items (index 0 to 4)
  const listRef = useRef(null);
  const intervalRef = useRef(null);

  const images = [
    "https://i.postimg.cc/7Zf4Tm2X/office1.jpg",
    "https://i.postimg.cc/VNKjyMf7/office2.jpg",
    "https://i.postimg.cc/cJBFvrsY/office3.jpg",
    "https://i.postimg.cc/Bvf1dpfc/office4.jpg",
    "https://i.postimg.cc/bJJYMSr9/office5.jpg",
  ];

  const nextSlide = () => {
    setActive((prevActive) => (prevActive + 1 > lengthItems ? 0 : prevActive + 1));
  };

  const prevSlide = () => {
    setActive((prevActive) => (prevActive - 1 < 0 ? lengthItems : prevActive - 1));
  };

  const reloadSlider = () => {
    const checkLeft = listRef.current.children[active].offsetLeft;
    listRef.current.style.left = -checkLeft + "px";
  };

  useEffect(() => {
    reloadSlider();

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [active]);

  return (
    <div className="slider">
      {/* Image List */}
      <ImageList images={images} listRef={listRef} />

      {/* Navigation Buttons */}
      <NavigationButtons prevSlide={prevSlide} nextSlide={nextSlide} />

      {/* Dots Navigation */}
      <Dots images={images} active={active} setActive={setActive} />
    </div>
  );
};

const GalleryII = () => {
  const carouselItems1 = [
    '/pastEvents/1/img4.JPG',
    '/pastEvents/1/img1.JPG',
    '/pastEvents/1/img2.JPG',
    '/pastEvents/1/img3.JPG',
    '/pastEvents/1/img11.png',
    '/pastEvents/1/img5.JPG',
    '/pastEvents/1/img6.JPG',
    '/pastEvents/1/img7.JPG',
    '/pastEvents/1/img8.JPG',
    '/pastEvents/1/img9.JPG',
    '/pastEvents/1/img10.JPG',
  ];

  const carouselItems2 = [
    '/pastEvents/2/img1.JPG',
    '/pastEvents/2/img2.JPG',
    '/pastEvents/2/img3.JPG',
    '/pastEvents/2/img4.JPG',
    '/pastEvents/2/img5.JPG',
    '/pastEvents/2/img6.JPG',
    '/pastEvents/2/img7.JPG',
    '/pastEvents/2/img8.JPG',
    '/pastEvents/2/img9.JPG',
    '/pastEvents/2/img10.JPG',
    '/pastEvents/2/img11.jpg',
  ];

  const carouselItems3 = [
    {
      index: 1,
      imageUrl: '/pastEvents/3/img11.JPG',
      description: "Architecture Example 1",
    },
    {
      index: 2,
      imageUrl: '/pastEvents/3/img1.JPG',
      description: "Architecture Example 2",
    },
    {
      index: 3,
      imageUrl: '/pastEvents/3/img2.JPG',
      description: "Architecture Example 3",
    },
    {
      index: 4,
      imageUrl: '/pastEvents/3/img3.JPG',
      description: "Architecture Example 4",
    },
    {
      index: 5,
      imageUrl: '/pastEvents/3/img4.JPG',
      description: "Architecture Example 5",
    },
    {
      index: 6,
      imageUrl: '/pastEvents/3/img5.JPG',
      description: "Architecture Example 6",
    },
    {
      index: 7,
      imageUrl: '/pastEvents/3/img6.JPG',
      description: "Architecture Example 7",
    },
    {
      index: 8,
      imageUrl: '/pastEvents/3/img7.JPG',
      description: "Architecture Example 8",
    },
    {
      index: 9,
      imageUrl: '/pastEvents/3/img8.JPG',
      description: "Architecture Example 9",
    },
    {
      index: 10,
      imageUrl: '/pastEvents/3/img9.JPG',
      description: "Architecture Example 10",
    },
    {
      index: 11,
      imageUrl: '/pastEvents/3/img10.JPG',
      description: "Architecture Example 11",
    },
  ];

  const carouselItems4 = [
    {
      index: 1,
      imageUrl: '/pastEvents/4/img1.jpg',
      description: "Architecture Example 1",
    },
    {
      index: 2,
      imageUrl: '/pastEvents/4/img2.jpg',
      description: "Architecture Example 2",
    },
    {
      index: 3,
      imageUrl: '/pastEvents/4/img3.jpg',
      description: "Architecture Example 3",
    },
    {
      index: 4,
      imageUrl: '/pastEvents/4/img4.jpg',
      description: "Architecture Example 4",
    },
    {
      index: 5,
      imageUrl: '/pastEvents/4/img5.jpg',
      description: "Architecture Example 5",
    },
    {
      index: 6,
      imageUrl: '/pastEvents/4/img6.jpg',
      description: "Architecture Example 6",
    },
    {
      index: 7,
      imageUrl: '/pastEvents/4/img7.jpg',
      description: "Architecture Example 7",
    },
    {
      index: 8,
      imageUrl: '/pastEvents/4/img8.jpg',
      description: "Architecture Example 8",
    },
    {
      index: 9,
      imageUrl: '/pastEvents/4/img9.jpg',
      description: "Architecture Example 9",
    },
    {
      index: 10,
      imageUrl: '/pastEvents/4/img10.jpg',
      description: "Architecture Example 10",
    },
    {
      index: 11,
      imageUrl: '/pastEvents/4/img11.jpg',
      description: "Architecture Example 11",
    },
  ];

  const carouselItems5 = [
    {
      index: 1,
      imageUrl: '/pastEvents/5/img1.jpg',
      description: "Architecture Example 1",
    },
    {
      index: 2,
      imageUrl: '/pastEvents/5/img2.jpg',
      description: "Architecture Example 2",
    },
    {
      index: 3,
      imageUrl: '/pastEvents/5/img3.jpg',
      description: "Architecture Example 3",
    },
    {
      index: 4,
      imageUrl: '/pastEvents/5/img4.jpg',
      description: "Architecture Example 4",
    },
    {
      index: 5,
      imageUrl: '/pastEvents/5/img5.jpg',
      description: "Architecture Example 5",
    },
    {
      index: 6,
      imageUrl: '/pastEvents/5/img6.jpg',
      description: "Architecture Example 6",
    },
    {
      index: 7,
      imageUrl: '/pastEvents/5/img7.jpg',
      description: "Architecture Example 7",
    },
    {
      index: 8,
      imageUrl: '/pastEvents/5/img8.jpg',
      description: "Architecture Example 8",
    },
    {
      index: 9,
      imageUrl: '/pastEvents/5/img9.jpg',
      description: "Architecture Example 9",
    },
    {
      index: 10,
      imageUrl: '/pastEvents/5/img10.jpg',
      description: "Architecture Example 10",
    },
    {
      index: 11,
      imageUrl: '/pastEvents/5/img11.jpg',
      description: "Architecture Example 11",
    },
  ];

  return (
    <div className="gli-wrapper">
        <Navbar></Navbar>
      <div className="stars">
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <div className="gli-main-heading">
        <div className="gli-content">
          <div className="gli-h1"><ScrambleText>PastEvents</ScrambleText></div>
          <div className="gli-h1"><ScrambleText>PastEvents</ScrambleText></div>
        </div>
      </div>
      <div className="gli-container">
        <section className="gli-slide">
          <div className="gli-heading">Malkauns | DJ Raven</div>
          <GalleryMobile/>
        </section>
        <section className="gli-slide">
          <div className="gli-heading">D-Dazzlers x Tarang</div>
          <GalleryMobile/>
        </section>
        <section className="gli-slide">
          <div className="gli-heading">Speaker Session</div>
          <GalleryMobile/>
        </section>
        <section className="gli-slide">
          <div className="gli-heading">Tech Tonic Tussle | Millet Mela</div>
          <GalleryMobile/>
        </section>
        <section className="gli-slide">
          <div className="gli-heading">IPL Auction | Tech Quiz</div>
          <GalleryMobile/>
        </section>
      </div>
    </div>
  );
};

export default GalleryII;
