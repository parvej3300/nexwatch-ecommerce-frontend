const ServiceHighlights = () => {
  return (
    <section className="service_highlights p_80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="d-flex list-unstyled p-0 m-0">
              <li className="d-flex align-items-center gap-3">
                <img src="/images/icon-1.svg" alt="icon-1" />
                <div className="content">
                  <h2>200+</h2>
                  <p>Luxury Brands</p>
                </div>
              </li>
              <li className="d-flex align-items-center gap-3">
                <img src="/images/icon-2.svg" alt="icon-2" />
                <div className="content">
                  <h2>20k+</h2>
                  <p>Original Product</p>
                </div>
              </li>
              <li className="d-flex align-items-center gap-3">
                <img src="/images/icon-3.svg" alt="icon-3" />
                <div className="content">
                  <h2>200+</h2>
                  <p>Free Return</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;