import './gallery.css';
import ScrambleText from '../../components/Scramble';
import Navbar from '../Navbar/Navbar';

const CarouselItem = ({ index, imageUrl, description }) => {
  return (
    <li
      className="gli-carousel-item"
      style={{
        "--_index": index,
        "--_image-url": `url('${imageUrl}')`,
      }}
    >
      <a target="_blank" rel="noopener noreferrer">
        {description}
      </a>
    </li>
  );
};

const Carousel = ({ items }) => {
  return (
    <>
    {/* <Navbar/> */}
    <div className="gli-carousel">
      <div className="gli-carousel-control-button gli-left">
        <input type="radio" name="carousel-control-input" />
      </div>
      <div className="gli-carousel-control-button gli-right">
        <input type="radio" name="carousel-control-input" checked />
      </div>
      <div className="gli-carousel-rotation-direction">
        <ul
          className="gli-carousel-item-wrapper"
          style={{ "--_num-elements": items.length }}
        >
          {items.map((item) => (
            <CarouselItem
              key={item.index}
              index={item.index}
              imageUrl={item.imageUrl}
              linkUrl={item.linkUrl}
              description={item.description}
            />
          ))}
          <li className="gli-carousel-ground"></li>
        </ul>
      </div>
    </div></>
  );
};

const Gallery = () => {
  const carouselItems1 = [
    {
      index: 1,
      imageUrl: '/pastEvents/1/img4.JPG',
      description: "Architecture Example 1",
    },
    {
      index: 2,
      imageUrl: '/pastEvents/1/img1.JPG',
      description: "Architecture Example 2",
    },
    {
      index: 3,
      imageUrl: '/pastEvents/1/img2.JPG',
      description: "Architecture Example 3",
    },
    {
      index: 4,
      imageUrl: '/pastEvents/1/img3.JPG',
      description: "Architecture Example 4",
    },
    {
      index: 5,
      imageUrl: '/pastEvents/1/img11.png',
      description: "Architecture Example 5",
    },
    {
      index: 6,
      imageUrl: '/pastEvents/1/img5.JPG',
      description: "Architecture Example 6",
    },
    {
      index: 7,
      imageUrl: '/pastEvents/1/img6.JPG',
      description: "Architecture Example 7",
    },
    {
      index: 8,
      imageUrl: '/pastEvents/1/img7.JPG',
      description: "Architecture Example 8",
    },
    {
      index: 9,
      imageUrl: '/pastEvents/1/img8.JPG',
      description: "Architecture Example 9",
    },
    {
      index: 10,
      imageUrl: '/pastEvents/1/img9.JPG',
      description: "Architecture Example 10",
    },
    {
      index: 11,
      imageUrl: '/pastEvents/1/img10.JPG',
      description: "Architecture Example 11",
    },
  ];

  const carouselItems2 = [
    {
      index: 1,
      imageUrl: '/pastEvents/2/img1.JPG',
      description: "Architecture Example 1",
    },
    {
      index: 2,
      imageUrl: '/pastEvents/2/img2.JPG',
      description: "Architecture Example 2",
    },
    {
      index: 3,
      imageUrl: '/pastEvents/2/img3.JPG',
      description: "Architecture Example 3",
    },
    {
      index: 4,
      imageUrl: '/pastEvents/2/img4.JPG',
      description: "Architecture Example 4",
    },
    {
      index: 5,
      imageUrl: '/pastEvents/2/img5.JPG',
      description: "Architecture Example 5",
    },
    {
      index: 6,
      imageUrl: '/pastEvents/2/img6.JPG',
      description: "Architecture Example 6",
    },
    {
      index: 7,
      imageUrl: '/pastEvents/2/img7.JPG',
      description: "Architecture Example 7",
    },
    {
      index: 8,
      imageUrl: '/pastEvents/2/img8.JPG',
      description: "Architecture Example 8",
    },
    {
      index: 9,
      imageUrl: '/pastEvents/2/img9.JPG',
      description: "Architecture Example 9",
    },
    {
      index: 10,
      imageUrl: '/pastEvents/2/img10.JPG',
      description: "Architecture Example 10",
    },
    {
      index: 11,
      imageUrl: '/pastEvents/2/img11.jpg',
      description: "Architecture Example 11",
    },
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
          <Carousel items={carouselItems3} />
        </section>
        <section className="gli-slide">
          <div className="gli-heading">D-Dazzlers x Tarang</div>
          <Carousel items={carouselItems5} />
        </section>
        <section className="gli-slide">
          <div className="gli-heading">Speaker Session</div>
          <Carousel items={carouselItems1} />
        </section>
        <section className="gli-slide">
          <div className="gli-heading">Tech Tonic Tussle | Millet Mela</div>
          <Carousel items={carouselItems2} />
        </section>
        <section className="gli-slide">
          <div className="gli-heading">IPL Auction | Tech Quiz</div>
          <Carousel items={carouselItems4} />
        </section>
      </div>
    </div>
  );
};

export default Gallery;
