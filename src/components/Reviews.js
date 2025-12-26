import Slider from 'react-slick';

const Reviews = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const reviewData = [
    {
      name: 'James Carter',
      img: '/images/test_img_3.png',
      review:
        'Excellent value. Smooth performance, premium look, and reliable health tracking every day.',
    },
    {
      name: 'Emily Parker',
      img: '/images/test_img_1.png',
      review:
        'Impressive features and design. Tracks everything I need without draining the battery quickly.',
    },
    {
      name: 'Logan Mitchell',
      img: '/images/test_img_2.png',
      review:
        'Perfect for work and workouts. Looks classy, functions flawlessly, and battery lasts really long.',
    },
    {
      name: 'Sophie Rivera',
      img: '/images/test_img_3.png',
      review:
        'Great style, excellent app integration, and very responsive touch screen!',
    },
    {
      name: 'Michael Lee',
      img: '/images/test_img_1.png',
      review:
        'Battery life is top-notch. Definitely worth the investment for daily tracking.',
    },
  ];

  return (
    <section className="reciew_sec p_80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="com_title">Testimonial</h2>
            <Slider {...settings} className="review related_products">
              {reviewData.map((item, index) => (
                <div className="review_main_box text-center" key={index}>
                  <div className="img_box">
                    <img
                      className="test_img img-fluid d-block m-auto"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div className="content_box">
                    <p>{item.review}</p>
                    <h3>{item.name}</h3>
                    <img
                      src="/images/5star.svg"
                      className="img-fluid d-block m-auto"
                      alt="5 Star"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;