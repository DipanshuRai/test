import { useState, useEffect } from 'react';
import $ from 'jquery';
import './sponsors.scss';
import indianOil from './logo/indian-oil.jpg';
import sbi from './logo/sbi.jpg';
import indianBank from './logo/indian-bank.jpg';
import kuberTechnoCraft from './logo/kuber-techno-craft.jpg';
import { Banner } from './Banner';
import './Banner.css'
import bg from './bg.jpg';  
import Navbar from '../Navbar/Navbar';

const CardComponent = ({ title, logoUrl}) => (
  <div className="card">
    <div className='card__img-space'>
      <div className='card__img-person'>
        <img src={logoUrl} alt="logo" />
      </div>
    </div>
    <div className='card__content'>
      <h4 className='card__title'>{title}</h4>
    </div>
  </div>
);

const images = [
  "/public/sponsors/TS.jpg",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
].map((image) => ({
  id: crypto.randomUUID(),
  image
}));
//background can be changed by toggling the comment...
const bgimg = bg;
// const bgimg = 'https://static.vecteezy.com/system/resources/previews/012/742/301/original/abstract-finance-currency-money-exchange-moving-or-playing-lucky-draw-games-digital-finance-gold-coin-concept-currency-on-a-modern-background-golden-glow-vector.jpg';
// const bgimg = 'https://media.licdn.com/dms/image/D5612AQH6FDa8gkBiuA/article-cover_image-shrink_600_2000/0/1674026548040?e=2147483647&v=beta&t=K807wpc-Y4cAgVXj01FHV49BV0xmFZqYTx0LBUD6sU4'

const Slideshow = () => {
  const slides = [
    {
      id: 1,
      title: 'Title Sponsor',
      // subtitle: 'See how',
      imageUrl:"/public/sponsors/TS.jpg",
      cards: [
        { title: 'Indian Oil', logoUrl: indianOil},
        { title: 'SBI', logoUrl: sbi},
        { title: 'Indian Bank', logoUrl: indianBank},
        { title: 'Kuber Techno Craft', logoUrl: kuberTechnoCraft}
      ],
    },
    {
      id: 2,
      title: 'Associate Sponsors',
      // subtitle: 'Learn more about',
      imageUrl:"/public/sponsors/AS.jpg",
      cards: [
        { title: 'Indian Oil', logoUrl: indianOil},
        { title: 'SBI', logoUrl: sbi},
        { title: 'Indian Bank', logoUrl: indianBank},
        { title: 'Kuber Techno Craft', logoUrl: kuberTechnoCraft}
      ],
    },
    {
      id: 3,
      title: 'Gold Sponsors',
      // subtitle: 'Learn more about',
      imageUrl:"/public/sponsors/GS.jpg",
      cards: [
        { title: 'Indian Oil', logoUrl: indianOil},
        { title: 'SBI', logoUrl: sbi},
        { title: 'Indian Bank', logoUrl: indianBank},
        { title: 'Kuber Techno Craft', logoUrl: kuberTechnoCraft}
      ],
    },
    {
      id: 4,
      title: 'Silver Sponsors',
      // subtitle: 'Learn more about',
      imageUrl: "/public/sponsors/SS.jpg",
      cards: [
        { title: 'Indian Oil', logoUrl: indianOil},
        { title: 'SBI', logoUrl: sbi},
        { title: 'Indian Bank', logoUrl: indianBank},
        { title: 'Kuber Techno Craft', logoUrl: kuberTechnoCraft}
      ],
    },
    {
      id: 5,
      title: 'Bronze Sponsors',
      // subtitle: 'Learn more about',
      imageUrl: "/public/sponsors/BS.jpg",
      cards: [
        { title: 'Indian Oil', logoUrl: indianOil},
        { title: 'SBI', logoUrl: sbi},
        { title: 'Indian Bank', logoUrl: indianBank},
        { title: 'Kuber Techno Craft', logoUrl: kuberTechnoCraft}
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const $window = $(window);
    const $body = $('body');
    let slideShow; // Declare slideShow in accessible scope

    class Slideshow {
      constructor(userOptions = {}) {
        const defaultOptions = {
          $el: $('.slideshow'),
          showArrows: false,
          showPagination: true,
          duration: 50000,
          autoplay: true,
        };

        let options = Object.assign({}, defaultOptions, userOptions);

        this.$el = options.$el;
        this.maxSlide = this.$el.find($('.js-slider-home-slide')).length;
        this.showArrows = this.maxSlide > 1 ? options.showArrows : false;
        this.showPagination = options.showPagination;
        this.currentSlide = 1;
        this.isAnimating = false;
        this.animationDuration = 1200;
        this.autoplaySpeed = options.duration;
        this.interval;
        this.$controls = this.$el.find('.js-slider-home-button');
        this.autoplay = this.maxSlide > 1 ? options.autoplay : false;

        this.$el.on('click', '.js-slider-home-next', (event) => this.nextSlide());
        this.$el.on('click', '.js-slider-home-prev', (event) => this.prevSlide());
        this.$el.on('click', '.js-pagination-item', (event) => {
          if (!this.isAnimating) {
            this.preventClick();
            this.goToSlide(event.target.dataset.slide);
          }
        });

        this.init();
      }

      init() {
        this.goToSlide(1);
        if (this.autoplay) {
          this.startAutoplay();
        }

        if (this.showPagination) {
          let paginationNumber = this.maxSlide;
          let pagination = '<div class="pagination"><div class="container">';

          for (let i = 0; i < this.maxSlide; i++) {
            let item = `<span class="pagination__item js-pagination-item ${
              i === 0 ? 'is-current' : ''
            }" data-slide=${i + 1}>${i + 1}</span>`;
            pagination = pagination + item;
          }

          pagination = pagination + '</div></div>';

          this.$el.append(pagination);
        }
      }

      preventClick() {
        this.isAnimating = true;
        this.$controls.prop('disabled', true);
        clearInterval(this.interval);

        setTimeout(() => {
          this.isAnimating = false;
          this.$controls.prop('disabled', false);
          if (this.autoplay) {
            this.startAutoplay();
          }
        }, this.animationDuration);
      }

      goToSlide(index) {
        this.currentSlide = parseInt(index);

        if (this.currentSlide > this.maxSlide) {
          this.currentSlide = 1;
        }

        if (this.currentSlide === 0) {
          this.currentSlide = this.maxSlide;
        }

        const newCurrent = this.$el.find(
          '.js-slider-home-slide[data-slide="' + this.currentSlide + '"]'
        );
        const newPrev =
          this.currentSlide === 1
            ? this.$el.find('.js-slider-home-slide').last()
            : newCurrent.prev('.js-slider-home-slide');
        const newNext =
          this.currentSlide === this.maxSlide
            ? this.$el.find('.js-slider-home-slide').first()
            : newCurrent.next('.js-slider-home-slide');

        this.$el.find('.js-slider-home-slide').removeClass('is-prev is-next is-current');
        this.$el.find('.js-pagination-item').removeClass('is-current');

        if (this.maxSlide > 1) {
          newPrev.addClass('is-prev');
          newNext.addClass('is-next');
        }

        newCurrent.addClass('is-current');
        this.$el
          .find('.js-pagination-item[data-slide="' + this.currentSlide + '"]')
          .addClass('is-current');
      }

      nextSlide() {
        this.preventClick();
        this.goToSlide(this.currentSlide + 1);
      }

      prevSlide() {
        this.preventClick();
        this.goToSlide(this.currentSlide - 1);
      }

      startAutoplay() {
        this.interval = setInterval(() => {
          if (!this.isAnimating) {
            this.nextSlide();
          }
        }, this.autoplaySpeed);
      }

      destroy() {
        this.$el.off();
      }
    }

    let loaded = false;
    let maxLoad = 3000;

    function load() {
      const options = {
        showPagination: true,
      };

      slideShow = new Slideshow(options); // Assign to outer scope variable
    }

    function addLoadClass() {
      $body.addClass('is-loaded');

      setTimeout(function () {
        $body.addClass('is-animated');
      }, 600);
    }

    $window.on('load', function () {
      if (!loaded) {
        loaded = true;
        load();
      }
    });

    setTimeout(function () {
      if (!loaded) {
        loaded = true;
        load();
      }
    }, maxLoad);

    addLoadClass();

    return () => {
      // Cleanup function on unmount if needed
      if (slideShow) {
        slideShow.destroy(); // Ensure to call destroy method if slideShow is defined
      }
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
  <>
    <Navbar/>
    <div id="wrapper">
      <section className="slideshow" id="js-header">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slideshow__slide js-slider-home-slide ${
              index === currentSlide ? 'is-current' : ''
            }`}
            data-slide={slide.id}
          >
            <div className="slideshow__slide-background-parallax background-absolute js-parallax" data-speed="-1" data-position="top" data-target="#js-header">
              <div className="slideshow__slide-background-load-wrap background-absolute">
                <div className="slideshow__slide-background-load background-absolute">
                  <div className="slideshow__slide-background-wrap background-absolute">
                    <div className="slideshow__slide-background background-absolute">
                      <div className="slideshow__slide-image-wrap background-absolute">
                        <div className="slideshow__slide-image background-absolute" style={{ backgroundImage: `url(${slide.imageUrl})` }}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slideshow__slide-caption">
              <div className="slideshow__slide-caption-text">
                <div className="container js-parallax" data-speed="2" data-position="top" data-target="#js-header">
                  <h1 className="slideshow__slide-caption-title">{slide.title}</h1>
                  {/* <a className="slideshow__slide-caption-subtitle -load o-hsub -link" href="#">
                    <span className="slideshow__slide-caption-subtitle-label">{slide.subtitle}</span>
                  </a> */}
                </div>
              </div>
              <div className="slideshow__slide-sponsor-content">
                <div className="slideshow__slide-caption-text2">
                  <div className="slideshow__box">
                    <div className="slideshow__slide-background sponsor-content">
                      {slide.cards.map((card, cardIndex) => (
                        <CardComponent
                          key={cardIndex}
                          title={card.title}
                          logoUrl={card.logoUrl}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="c-header-home_footer">
          <div className="o-container">
            <div className="c-header-home_controls -nomobile o-button-group">
              <div className="js-parallax is-inview" data-speed="1" data-position="top" data-target="#js-header">
                <button className="o-button -white -square -left js-slider-home-button js-slider-home-prev" type="button">
                  <span className="o-button_label">
                    <svg className="o-button_icon" role="img">
                      <use xlinkHref="#arrow-prev"></use>
                    </svg>
                  </span>
                </button>
                <button className="o-button -white -square js-slider-home-button js-slider-home-next" type="button">
                  <span className="o-button_label">
                    <svg className="o-button_icon" role="img">
                      <use xlinkHref="#arrow-next"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg">
        <symbol viewBox="0 0 18 18" id="arrow-next">
          <path id="arrow-next-arrow.svg" d="M12.6,9L4,17.3L4.7,18l8.5-8.3l0,0L14,9l0,0l-0.7-0.7l0,0L4.7,0L4,0.7L12.6,9z"/>
        </symbol>
        <symbol viewBox="0 0 18 18" id="arrow-prev">
          <path id="arrow-prev-arrow.svg" d="M14,0.7L13.3,0L4.7,8.3l0,0L4,9l0,0l0.7,0.7l0,0l8.5,8.3l0.7-0.7L5.4,9L14,0.7z"/>
        </symbol>
      </svg>
      </section>
      <Banner images= {images} speed={5000} />
      
    </div>
    </>
  );
};

export default Slideshow;
