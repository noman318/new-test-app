import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const InclusionsExclusions = ({ inclusions, exclusions }) => {
  return (
    <div className="inclusions-container">
      <h2 className="main-title">Inclusions & Exclusions</h2>

      <Card className="custom-card">
        <Card.Body className="card-body-custom">
          <Row className="row-custom">
            <Col md={6} className="left-column">
              <div className="content-section">
                <h3 className="section-title">Inclusions</h3>
                <ul className="custom-list">
                  {inclusions?.map((item, index) => (
                    <li key={index} className="list-item">
                      <FiCheckCircle
                        className="icon"
                        size={20}
                        color="#10B981"
                      />
                      <span className="item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col md={6}>
              <div className="content-section">
                <h3 className="section-title">Exclusions</h3>
                <ul className="custom-list">
                  {exclusions?.map((item, index) => (
                    <li key={index} className="list-item">
                      <FiXCircle className="icon" size={20} color="#EF4444" />
                      <span className="item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InclusionsExclusions;
