import React from "react";
import { useParams } from "react-router-dom";
import { useGetPackageByIdQuery } from "../slices/packageApiSlice";

const PackageDetailPage = () => {
  const { id } = useParams();
  const { data } = useGetPackageByIdQuery(id);

  return (
    <div className="trek-package">
      {/* Hero Section */}
      <div className="hero-section">
        <img
          src={"/" + data?.thumbnail_image?.[0]?.replace(/\\/g, "/")}
          alt="Trek"
          className="hero-image"
        />

        <div className="hero-overlay">
          <div className="container">
            <h1 className="hero-title">{data?.title}</h1>
            <p className="hero-subtitle">Ali Bedni Trek Experience</p>
            <div className="price-tag">₹{data?.price} per person</div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        {/* Quick Info Cards */}
        <div className="row g-4 mb-5">
          <div className="col-md-3">
            <div className="info-card">
              <i className="bi bi-geo-alt"></i>
              <div>
                <small>Pickup</small>
                <h6>{data?.pickup}</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info-card">
              <i className="bi bi-calendar"></i>
              <div>
                <small>Duration</small>
                <h6>{data?.duration}</h6>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3">
            <div className="info-card">
              <i className="bi bi-clock"></i>
              <div>
                <small>Start Time</small>
                <h6>06:00 AM</h6>
              </div>
            </div>
          </div> */}
          <div className="col-md-3">
            <div className="info-card">
              <i className="bi bi-pin-map"></i>
              <div>
                <small>Drop</small>
                <h6>{data?.drop}</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Trek Details */}
        <div className="row">
          <div className="col-md-8">
            <div className="trek-details mb-4">
              <h3>Trek Overview</h3>
              <p>{"description"}</p>
            </div>

            <div className="itinerary mb-4">
              <h3>Itinerary</h3>
              <div className="accordion" id="trekItinerary">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#day1"
                    >
                      Day 1: Rishikesh to Lohajung (258 Kms, 8 Hrs Drive)
                    </button>
                  </h2>
                  <div id="day1" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      <ul className="list-unstyled">
                        <li>
                          • The group will assemble at the pickup point at 06:00
                          AM
                        </li>
                        <li>• Introduction and briefing session</li>
                        <li>• Evening check-in and dinner</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Add more accordion items for other days */}
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="trek-sidebar">
              <div className="included-section mb-4">
                <h4>What's Included</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-check-circle text-success"></i>
                    Accommodation: 2 Nights in Homestay & 3 Nights Camping
                  </li>
                  {/* Add more included items */}
                </ul>
              </div>

              <div className="excluded-section">
                <h4>What's Not Included</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-x-circle text-danger"></i>
                    Personal expenses
                  </li>
                  {/* Add more excluded items */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPage;
