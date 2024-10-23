import './Merch.css';

const Merch = () => {
  return (
    <div className='hiii1'>
    <div className='merch-body'>
      <header className="merch-header">
        {/* <a href="#home" className="merch-logo">IIITG <span>Entropy</span></a> */}

        <i className="bx bx-menu" id="merch-menu-icon"></i>
      </header>

      <section className="merch-home" id="home">
        <div className="merch-home-img">
          <img src="https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/merchandise-designs-for-every-day-branding/T-shirt-Design-by-Risallah.png" alt="Techniche Merch" />
        </div>
        <div className="merch-home-content">
          <h1> 2024 Collection</h1>
          <h3 className="merch-text-animation">Elevate your Style with Techniche Merch! <span></span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus voluptatum itaque assumenda quas aspernatur sit non consequuntur libero earum hic vitae, quos ab fuga ut nesciunt eos, at deserunt.</p>

          <div className="merch-btn-group">
            <a href="#contact" className="merch-btn">Buy Now</a>
          </div>
        </div>

      </section>
    </div>
    </div>
  );
}

export default Merch;
