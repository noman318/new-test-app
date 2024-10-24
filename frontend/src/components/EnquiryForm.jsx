import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateOrderMutation } from "../slices/orderApiSlice";
import { toast } from "react-toastify";

const EnquiryForm = ({ dataPrice, package_id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+91-",
    people_qty: 1,
    travelDate: "",
    query: "",
  });
  const [price, setPrice] = useState(dataPrice);
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const totalPrice = dataPrice * formData.people_qty;
    setPrice(totalPrice);
  }, [dataPrice, formData.people_qty]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      let res = await createOrder({ ...formData, package_id });
      console.log("res", res);
      toast.success("Order Placed");
      setFormData({
        name: "",
        email: "",
        phone: "+91-",
        people_qty: 1,
        travelDate: "",
        query: "",
      });
      //  navigate(`/order/${res?.data?._id}`);
    } catch (error) {
      toast.error(error?.msg);
    }
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
        <Form.Group className="form-field mt-2">
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

        <Form.Group className="form-field mt-2">
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

        <Form.Group className="form-field mt-2">
          <Form.Label>
            Phone No. <span className="required">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="phone"
            maxLength={13}
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="custom-input"
          />
        </Form.Group>

        <Form.Group className="form-field mt-4">
          <Form.Label>Number of People</Form.Label>
          <div className="slider-container">
            <Form.Range
              name="people_qty"
              value={formData.people_qty}
              onChange={handleInputChange}
              min="1"
              max="20"
              className="custom-range"
            />
            <div className="price-info my-4">
              <span className="selected-value">
                Selected: {formData.people_qty}{" "}
                {formData.people_qty === 1 ? "person " : "people "}
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
        <div className="mt-3">
          <Button className="text-white mx-2" variant="success">
            Enquiry
          </Button>
          <Button
            className="text-white"
            variant="warning"
            type="submit"
            disabled={isLoading}
          >
            Book Now
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EnquiryForm;
