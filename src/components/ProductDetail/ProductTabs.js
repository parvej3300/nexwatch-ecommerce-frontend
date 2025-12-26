import { useState } from "react";

const ProductTabs = ({ description, specs = [], qa = [] }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="product_details_sec">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "description" ? "active" : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "specs" ? "active" : ""}`}
            onClick={() => setActiveTab("specs")}
          >
            Specification
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "qa" ? "active" : ""}`}
            onClick={() => setActiveTab("qa")}
          >
            Q & A
          </button>
        </li>
      </ul>

      <div className="tab-content">
        {activeTab === "description" && (
          <p>{description || "No description available."}</p>
        )}

        {activeTab === "specs" && (
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <tbody>
                <tr>
                  <th scope="row" className="w-25">
                    Display
                  </th>
                  <td>1.69" Full Touch HD Color Display</td>
                </tr>
                <tr>
                  <th scope="row">Resolution</th>
                  <td>240 × 280 pixels</td>
                </tr>
                <tr>
                  <th scope="row">Battery Life</th>
                  <td>Up to 10 days on a single charge</td>
                </tr>
                <tr>
                  <th scope="row">Connectivity</th>
                  <td>Bluetooth 5.1</td>
                </tr>
                <tr>
                  <th scope="row">Compatible With</th>
                  <td>Android 6.0 & iOS 10.0 or above</td>
                </tr>
                <tr>
                  <th scope="row">Sensors</th>
                  <td>Heart Rate, SpO2, Sleep Monitor, Accelerometer</td>
                </tr>
                <tr>
                  <th scope="row">Water Resistance</th>
                  <td>IP68 Dust & Water Resistant</td>
                </tr>
                <tr>
                  <th scope="row">Strap Material</th>
                  <td>Silicone (interchangeable)</td>
                </tr>
                <tr>
                  <th scope="row">Included in Box</th>
                  <td>Smart Watch, Magnetic Charger, User Manual</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "qa" && (
          <div>
            <div className="accordion" id="smartwatchFAQ">
    <div className="accordion-item">
      <h2 className="accordion-header" id="faqOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
          Does the smartwatch work with iPhones?
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#smartwatchFAQ">
        <div className="accordion-body">
          Yes, the smartwatch is compatible with iOS 10.0 and above, including all recent iPhones.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="faqTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
          Can I make and receive calls from the watch?
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#smartwatchFAQ">
        <div className="accordion-body">
          You can receive call notifications and reject calls, but calling directly from the watch depends on the model. Check product details for this feature.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="faqThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
          Is the watch waterproof?
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#smartwatchFAQ">
        <div className="accordion-body">
          Yes, it has an IP68 rating, making it dust and water resistant — suitable for hand washing and rain, but not recommended for swimming.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="faqFour">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
          How long does the battery last?
        </button>
      </h2>
      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#smartwatchFAQ">
        <div className="accordion-body">
          The battery lasts up to 10 days with typical use and up to 25 days in standby mode.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="faqFive">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
          Does it support WhatsApp or SMS notifications?
        </button>
      </h2>
      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#smartwatchFAQ">
        <div className="accordion-body">
          Yes, it supports notifications from WhatsApp, SMS, and other social apps once connected via the app.
        </div>
      </div>
    </div>
  </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
