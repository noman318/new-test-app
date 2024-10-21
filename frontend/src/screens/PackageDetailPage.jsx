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
              <InclusionsExclusions
                inclusions={data?.inclusions}
                exclusions={data?.exclusions}
              />
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

export default PackageDetailPage;
