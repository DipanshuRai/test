import React, { useState, useEffect, useRef } from "react";
import ScrambleText from '../../components/Scramble';
import Navbar from '../Navbar/Navbar';
import "./gallery_mobile.css";
import './gallery_laptop.css';

// ImageList Component for rendering the images
const ImageList = ({ images, listRef }) => {
  return (
    <div className="list" ref={listRef}>
      {images.map((img, index) => (
        <div className="list-item" key={index}>
          <img src={img} alt={`image${index + 1}`} className="list-item" />
        </div>
      ))}
    </div>
  );
};

// NavigationButtons Component for Prev and Next Buttons
const NavigationButtons = ({ prevSlide, nextSlide }) => {
  return (
    <div className="buttons-container">
      <button className="button-style" onClick={prevSlide}>
        &lt;
      </button>
      <button className="button-style" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

// Dots Component for navigating between slides
const Dots = ({ images, active, setActive }) => {
  return (
    <ul className="dots-container">
      {images.map((_, index) => (
        <li
          key={index}
          className={`dot-item ${index === active ? 'dot-active' : ''}`}
          onClick={() => setActive(index)}
        ></li>
      ))}
    </ul>
  );
};

const GalleryMobile = ({images}) => {
  const [active, setActive] = useState(0);
  const lengthItems = images.length - 1; // Total of 5 items (index 0 to 4)
  const listRef = useRef(null);
  const intervalRef = useRef(null);

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
    '/pastEvents/3/img11.JPG',
    '/pastEvents/3/img1.JPG',
    '/pastEvents/3/img2.JPG',
    '/pastEvents/3/img3.JPG',
    '/pastEvents/3/img4.JPG',
    '/pastEvents/3/img5.JPG',
    '/pastEvents/3/img6.JPG',
    '/pastEvents/3/img7.JPG',
    '/pastEvents/3/img8.JPG',
    '/pastEvents/3/img9.JPG',
    '/pastEvents/3/img10.JPG',
  ];

  const carouselItems4 = [
    '/pastEvents/4/img1.jpg',
    '/pastEvents/4/img2.jpg',
    '/pastEvents/4/img3.jpg',
    '/pastEvents/4/img4.jpg',
    '/pastEvents/4/img5.jpg',
    '/pastEvents/4/img6.jpg',
    '/pastEvents/4/img7.jpg',
    '/pastEvents/4/img8.jpg',
    '/pastEvents/4/img9.jpg',
    '/pastEvents/4/img10.jpg',
    '/pastEvents/4/img11.jpg',
  ];

  const carouselItems5 = [
    '/pastEvents/5/img1.jpg',
    '/pastEvents/5/img2.jpg',
    '/pastEvents/5/img3.jpg',
    '/pastEvents/5/img4.jpg',
    '/pastEvents/5/img5.jpg',
    '/pastEvents/5/img6.jpg',
    '/pastEvents/5/img7.jpg',
    '/pastEvents/5/img8.jpg',
    '/pastEvents/5/img9.jpg',
    '/pastEvents/5/img10.jpg',
    '/pastEvents/5/img11.jpg',
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
          <GalleryMobile images={carouselItems3}/>
        </section>
        <section className="gli-slide">
          <div className="gli-heading">D-Dazzlers x Tarang</div>
          <GalleryMobile images={carouselItems5}/>
        </section>
        <section className="gli-slide">
          <div className="gli-heading">Speaker Session</div>
          <GalleryMobile images={carouselItems1}/>
        </section>
        <section className="gli-slide">
          <div className="gli-heading">Tech Tonic Tussle | Millet Mela</div>
          <GalleryMobile images={carouselItems2}/>
        </section>
        <section className="gli-slide">
          <div className="gli-heading">IPL Auction | Tech Quiz</div>
          <GalleryMobile images={carouselItems4}/>
        </section>
      </div>
    </div>
  );
};

export default GalleryII;
