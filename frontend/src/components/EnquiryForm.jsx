import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const EnquiryForm = ({ dataPrice }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+91-",
    people: 1,
    travelDate: "",
    query: "",
  });
  const [price, setPrice] = useState(dataPrice);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //   console.log("formData", formData);
  useEffect(() => {
    const totalPrice = dataPrice * formData.people;
    setPrice(totalPrice);
  }, [dataPrice, formData.people]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const formatPrice = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  };

  return (
    <div className="enquiry-form-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="form-field">
          <Form.Label>
            Name <span className="required">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="custom-input"
          />
        </Form.Group>

        <Form.Group className="form-field">
          <Form.Label>
            Email <span className="required">*</span>
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="custom-input"
          />
        </Form.Group>

        <Form.Group className="form-field">
          <Form.Label>
            Phone No. <span className="required">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="custom-input"
          />
        </Form.Group>

        <Form.Group className="form-field">
          <Form.Label>Number of People</Form.Label>
          <div className="slider-container">
            <Form.Range
              name="people"
              value={formData.people}
              onChange={handleInputChange}
              min="1"
              max="10"
              className="custom-range"
            />
            <div className="price-info">
              <span className="selected-value">
                Selected: {formData.people}{" "}
                {formData.people === 1 ? "person " : "people "}
              </span>
              <b className="price-value text-black">
                Total Price: {formatPrice(price)}
              </b>
            </div>
          </div>
        </Form.Group>

        <Form.Group className="form-field">
          <Form.Label>Month of Travel</Form.Label>
          <Form.Control
            type="month"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleInputChange}
            className="custom-month-input"
          />
        </Form.Group>

        <Form.Group className="form-field">
          <Form.Label>Query</Form.Label>
          <Form.Control
            as="textarea"
            name="query"
            value={formData.query}
            onChange={handleInputChange}
            rows={4}
            className="custom-textarea"
          />
        </Form.Group>

        <Button className="text-white mx-2" variant="success">
          Enquiry
        </Button>
        <Button className="text-white" variant="warning">
          Book Now
        </Button>
      </Form>
    </div>
  );
};

export default EnquiryForm;
