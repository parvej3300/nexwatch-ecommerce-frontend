import { Link } from 'react-router-dom';

function HeroSlider (){
    return (
        <section id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">

                {/* Slide 1 */}
                <div className="carousel-item active">
                    <img
                        src="/images/banner-1.png"
                        srcSet="/images/banner-1@2x.png 2x, /images/banner-1@3x.png 3x"
                        className="d-block w-100"
                        alt="banner-1"
                    />
                    <div className='container'>
                        <div className="carousel-caption">
                            <h2>Time Reimagined. Style Redefined.</h2>
                            <h1>FLAT 35% OFF</h1>
                            <h3>Make a Rich Life</h3>
                            <Link to="/shop" className="common-btn">Explore</Link>
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item">
                    <img
                        src="/images/banner-1.png"
                        srcSet="/images/banner-1@2x.png 2x, /images/banner-1@3x.png 3x"
                        className="d-block w-100"
                        alt="banner-2"
                    />
                    <div className='container'>
                        <div className="carousel-caption">
                            <h2>Time Reimagined. Style Redefined.</h2>
                            <h1>FLAT 50% OFF</h1>
                            <h3>Make a Rich Life</h3>
                            <Link to="/shop" className="common-btn">Explore</Link>
                        </div>
                    </div>
                </div>

            </div>

            {/* Controls */}
            <div className="slider_controller">
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};

export default HeroSlider;