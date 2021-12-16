const HomePageContent: React.FC = () => {
  return (
    <>
      <div className='card'>
        <div className='card-content'>
          <div className='top-bar'>
            <span>$12.95</span>
            <span className='float-right lnr lnr-heart'></span>
          </div>
          <div className='img'>
            <img src='https://tctechcrunch2011.files.wordpress.com/2014/11/solo2-wireless-red-quarter.jpg?w=738' />
          </div>
        </div>
        <div className='card-description'>
          <div className='title'>BEATS HEADPHONE</div>
          <div className='cart'>
            <span className='lnr lnr-cart'></span>
          </div>
        </div>
        <div className='card-footer'>
          <div className='span'>RED</div>
          <div className='span'>BEATS</div>
          <div className='span'>HEADPHONE</div>
        </div>
      </div>
      <div className='card'>
        <div className='card-content'>
          <div className='top-bar'>
            <span>$1200.95</span>
            <span className='float-right lnr lnr-heart'></span>
          </div>
          <div className='img'>
            <img src='https://www.bell.ca/Styles/wireless/all_languages/all_regions/catalog_images/large/iPhoneX_spgry-en_lrg.png' />
          </div>
        </div>
        <div className='card-description'>
          <div className='title'>IPHONE X</div>
          <div className='cart'>
            <span className='lnr lnr-cart'></span>
          </div>
        </div>
        <div className='card-footer'>
          <div className='span'>IPHONE</div>
          <div className='span'>PHONE</div>
          <div className='span'>MOBILE</div>
        </div>
      </div>
      <div className='card'>
        <div className='card-content'>
          <div className='top-bar'>
            <span>$5.95</span>
            <span className='float-right lnr lnr-heart'></span>
          </div>
          <div className='img'>
            <img src='https://i.pinimg.com/736x/05/58/c7/0558c796ee706b5cb289ffb68e3b509c--is-the-best-to-the.jpg' />
          </div>
        </div>
        <div className='card-description'>
          <div className='title'>Black Shoes</div>
          <div className='cart'>
            <span className='lnr lnr-cart'></span>
          </div>
        </div>
        <div className='card-footer'>
          <div className='span'>SHOES</div>
          <div className='span'>FORMAL</div>
          <div className='span'>LEATHER</div>
        </div>
      </div>
      <div className='card'>
        <div className='card-content'>
          <div className='top-bar'>
            <span>$44.55</span>
            <span className='float-right lnr lnr-heart'></span>
          </div>
          <div className='img'>
            <img src='https://www.grootgadgets.com/wp-content/uploads/2017/03/Canon-70-200mm-Lens-mug-White-replica-groot-gadgets-1-400x400.jpg' />
          </div>
        </div>
        <div className='card-description'>
          <div className='title'>Camera Lens</div>
          <div className='cart'>
            <span className='lnr lnr-cart'></span>
          </div>
        </div>
        <div className='card-footer'>
          <div className='span'>CAMERA</div>
          <div className='span'>GADGET</div>
          <div className='span'>LENS</div>
        </div>
      </div>
    </>
  );
};

export default HomePageContent;
