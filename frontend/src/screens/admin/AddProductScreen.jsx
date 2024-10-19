import React, { useState } from "react";
import { Button, Form, Alert, Col, Row } from "react-bootstrap";

const AddProductScreen = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    pickup: "",
    drop: "",
    duration: "",
    descriptions: [""],
    inclusions: [""],
    itinerary: [{ title: "", list: "", note: "" }],
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.title) newErrors.title = "Title is required.";
    if (!formData.price) {
      newErrors.price = "Price is required.";
    } else if (isNaN(formData.price) || Number(formData.price) <= 0) {
      newErrors.price = "Price must be a positive number.";
    }
    if (!formData.category) newErrors.category = "Category is required.";
    if (!formData.drop) newErrors.drop = "Drop is required.";
    if (!formData.pickup) newErrors.pickup = "Pickup is required.";
    if (!formData.duration) newErrors.duration = "Duration is required.";

    // Image file validation
    if (!formData.image) {
      newErrors.image = "Image is required.";
    }

    return newErrors;
  };

  const handleChange = (e, index, field, section) => {
    const { name, value, files } = e.target;

    if (section === "descriptions") {
      const updatedDescriptions = [...formData.descriptions];
      updatedDescriptions[index] = value;
      setFormData({ ...formData, descriptions: updatedDescriptions });
    } else if (section === "inclusions") {
      const updatedInclusions = [...formData.inclusions];
      updatedInclusions[index] = value;
      setFormData({ ...formData, inclusions: updatedInclusions });
    } else if (section === "itinerary") {
      const updatedItinerary = [...formData.itinerary];
      updatedItinerary[index][field] = value;
      setFormData({ ...formData, itinerary: updatedItinerary });
    } else {
      setFormData({
        ...formData,
        [name]: files ? files[0] : value,
      });
    }
  };

  const addField = (section) => {
    if (section === "descriptions") {
      setFormData({
        ...formData,
        descriptions: [...formData.descriptions, ""],
      });
    } else if (section === "inclusions") {
      setFormData({ ...formData, inclusions: [...formData.inclusions, ""] });
    } else if (section === "itinerary") {
      setFormData({
        ...formData,
        itinerary: [...formData.itinerary, { title: "", list: "", note: "" }],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
      setShowAlert(false);
    } else {
      setErrors(validationErrors);
      setShowAlert(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4rem">
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          Please correct the highlighted fields.
        </Alert>
      )}

      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          isInvalid={!!errors.title}
        />
        <Form.Control.Feedback type="invalid">
          {errors.title}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter product price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          isInvalid={!!errors.price}
        />
        <Form.Control.Feedback type="invalid">
          {errors.price}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          isInvalid={!!errors.category}
        />
        <Form.Control.Feedback type="invalid">
          {errors.category}
        </Form.Control.Feedback>
      </Form.Group>

      <Row>
        <Col lg={6}>
          <Form.Group controlId="formPickupDrop">
            <Form.Label>Pickup</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pickup location"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              isInvalid={!!errors.pickup}
            />
            <Form.Control.Feedback type="invalid">
              {errors.pickup}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group controlId="formPickupDrop">
            <Form.Label>Drop</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter drop location"
              name="drop"
              value={formData.drop}
              onChange={handleChange}
              isInvalid={!!errors.drop}
            />
            <Form.Control.Feedback type="invalid">
              {errors.drop}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formDuration">
        <Form.Label>Duration</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          isInvalid={!!errors.duration}
        />
        <Form.Control.Feedback type="invalid">
          {errors.duration}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Descriptions */}
      <Form.Group controlId="formDescriptions">
        <Form.Label>Descriptions</Form.Label>
        {formData.descriptions.map((description, index) => (
          <Form.Control
            key={index}
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e) => handleChange(e, index, null, "descriptions")}
            className="mb-2"
          />
        ))}
        <Button variant="secondary" onClick={() => addField("descriptions")}>
          Add Description
        </Button>
      </Form.Group>

      {/* Inclusions */}
      <Form.Group controlId="formInclusions">
        <Form.Label>Inclusions</Form.Label>
        {formData.inclusions.map((inclusion, index) => (
          <Form.Control
            key={index}
            type="text"
            placeholder="Enter inclusion"
            value={inclusion}
            onChange={(e) => handleChange(e, index, null, "inclusions")}
            className="mb-2"
          />
        ))}
        <Button variant="secondary" onClick={() => addField("inclusions")}>
          Add Inclusion
        </Button>
      </Form.Group>

      {/* Itinerary */}
      <Form.Group controlId="formItinerary">
        <Form.Label>Itinerary</Form.Label>
        {formData.itinerary.map((item, index) => (
          <div key={index} className="mb-3">
            <Row>
              <Col lg={6}>
                <Form.Control
                  type="text"
                  placeholder="Enter itinerary title"
                  value={item.title}
                  onChange={(e) => handleChange(e, index, "title", "itinerary")}
                  className="mb-2"
                />
              </Col>
              <Col lg={6}>
                <Form.Control
                  as="textarea"
                  rows={1}
                  placeholder="Enter list"
                  value={item.list}
                  onChange={(e) => handleChange(e, index, "list", "itinerary")}
                  className="mb-2"
                />
              </Col>
              <Col lg={12}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter note"
                  value={item.note}
                  onChange={(e) => handleChange(e, index, "note", "itinerary")}
                  className="mb-2"
                />
              </Col>
            </Row>
          </div>
        ))}
        <Button variant="secondary" onClick={() => addField("itinerary")}>
          Add Itinerary
        </Button>
      </Form.Group>

      <Form.Group controlId="formImage">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          name="image"
          onChange={handleChange}
          isInvalid={!!errors.image}
        />
        <Form.Control.Feedback type="invalid">
          {errors.image}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default AddProductScreen;
