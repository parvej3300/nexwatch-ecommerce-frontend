import { Link } from 'react-router-dom';

function AboutUs () {
  return (
    <section className="about_us_sec p_80">
      <div className="container">
        <div className="row flex-row-reverse">

          <div className="col-md-6">
            <img
              src="/images/about-img.png"
              srcSet="/images/about-img@2x.png 2x, /images/about-img@3x.png 3x"
              className="d-block w-100"
              alt="About NexWatch"
            />
          </div>

          <div className="col-md-6 text-center text-md-start">
            <h2 className="com_title">About Us</h2>
            <p>
              At Nex Watch, we believe a watch is more than just a timekeeper—it's a statement. 
              We offer a curated selection of premium watches that blend craftsmanship, innovation, 
              and timeless style.
            </p>
            <p>
              Whether you're dressing for success or embracing the everyday, we have the perfect 
              piece for your wrist.
            </p>
            <Link to="/">Learn More</Link>

            <ul>
              <li>
                <h3>150+</h3>
                <h4>Team Members</h4>
              </li>
              <li>
                <h3>2000+</h3>
                <h4>Happy Clients</h4>
              </li>
              <li>
                <h3>2000+</h3>
                <h4>Client Satisfaction</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;