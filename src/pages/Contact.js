import PageBanner from "../components/PageBanner";

const Contact = () => {
  return (
    <>
    <PageBanner title="Contact Us" />
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-7">
            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Subject" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5" placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="common-btn bg-primary text-light">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-5 mt-4 mt-md-0">
            <div className="bg-white p-4 shadow-sm rounded">
              <h5 className="mb-3">Contact Information</h5>
              <p className="mb-2"><strong>Address:</strong></p>
              <p className="mb-2">123 Street, City, State, ZIP</p>
              <p className="mb-2"><strong>Email:</strong></p>
              <p className="mb-2">support@example.com</p>
              <p className="mb-2"><strong>Phone:</strong></p>
              <p>+91 9088612140</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;