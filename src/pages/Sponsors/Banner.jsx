const Banner = ({ images, speed = 5000 }) => {
    return (
      <div className="ban-inner">
        <div className="ban-wrapper">
          <div className="ban-section" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="ban-image" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </div>
          <div className="ban-section" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="ban-image" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </div>
          <div className="ban-section" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="ban-image" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export { Banner };
  