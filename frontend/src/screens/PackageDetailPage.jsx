import React from "react";
import { useParams } from "react-router-dom";
import InclusionsExclusions from "../components/InclusionExclusion";
import { ItineraryDisplay } from "../components/ItineraryAccordion";
import { useGetPackageByIdQuery } from "../slices/packageApiSlice";
import EnquiryForm from "../components/EnquiryForm";

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
            <div>
              <ItineraryDisplay itinerary={data?.itinerary} />
              {data?.inclusions && data?.exclusions && (
                <InclusionsExclusions
                  inclusions={data?.inclusions}
                  exclusions={data?.exclusions}
                />
              )}
            </div>
          </div>
          <div className="col-md-4">
            <EnquiryForm dataPrice={data?.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

<style>{`
    .inclusions-container {
      padding: 1rem;
      max-width: 64rem;
      margin: 0 auto;
    }

    .main-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .custom-card {
      border: none !important;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
    }

    .card-body-custom {
      padding: 0 !important;
    }

    .row-custom {
      margin: 0;
    }

    .left-column {
      border-right: 1px solid #dee2e6;
    }

    .content-section {
      padding: 1rem;
    }

    .section-title {
      font-size: 1.125rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .custom-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .list-item {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
      transition: transform 0.2s ease;
    }

    .list-item:hover {
      transform: translateX(4px);
    }

    .icon {
      flex-shrink: 0;
      margin-top: 0.25rem;
    }

    .item-text {
      color: #000;
    }

    /* Responsive styles */
    @media (max-width: 768px) {
      .left-column {
        border-right: none;
        border-bottom: 1px solid #dee2e6;
      }

      .content-section {
        padding: 1rem;
      }
    }

    /* Override Bootstrap default styles */
    .row {
      --bs-gutter-x: 0;
    }

    .card {
      border-radius: 0.5rem;
    }

    .enquiry-form-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }

    .form-field {
      margin-bottom: 20px;
    }

    .form-field label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #333;
    }

    .required {
      color: #dc3545;
      margin-left: 2px;
    }

    /* Common input styles */
    .custom-input,
    .custom-month-input,
    .custom-textarea {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #ced4da;
      border-radius: 4px;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      font-size: 16px;
    }

    .custom-input:focus,
    .custom-month-input:focus,
    .custom-textarea:focus {
      border-color: #80bdff;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    /* Month input specific styles */
    .custom-month-input {
      appearance: none;
      background-color: #fff;
      cursor: pointer;
    }

    .custom-month-input::-webkit-calendar-picker-indicator {
      cursor: pointer;
      padding: 4px;
      margin-right: -4px;
    }

    /* Slider styles */
    .slider-container {
      padding: 10px 0;
    }

    .custom-range {
      width: 100%;
      height: 8px;
      padding: 0;
      background-color: #e9ecef;
      border-radius: 4px;
      appearance: none;
    }

    .custom-range::-webkit-slider-thumb {
      appearance: none;
      width: 16px;
      height: 16px;
      background-color: #007bff;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.15s ease-in-out;
    }

    .custom-range::-webkit-slider-thumb:hover {
      background-color: #0056b3;
    }

    .selected-value {
      margin-top: 8px;
      font-size: 14px;
      color: #666;
    }

    /* Textarea styles */
    .custom-textarea {
      resize: vertical;
      min-height: 100px;
    }

    /* Submit button styles */
    .submit-button {
      display: block;
      width: 100%;
      padding: 12px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.15s ease-in-out;
    }

    .submit-button:hover {
      background-color: #0056b3;
    }

    .submit-button:focus {
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    /* Responsive styles */
    @media (max-width: 576px) {
      .enquiry-form-container {
        padding: 15px;
      }

      .form-field {
        margin-bottom: 15px;
      }

      .custom-input,
      .custom-month-input,
      .custom-textarea {
        font-size: 14px;
      }
    }

  `}</style>;

export default PackageDetailPage;
