import React from "react";
import { Accordion, Card } from "react-bootstrap";

export const ItineraryDisplay = ({ itinerary }) => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Itinerary</h2>

      <Accordion defaultActiveKey="0">
        {itinerary?.map((day, index) => (
          <Card key={day._id} className="mb-3 border-0 shadow-sm">
            <Accordion.Item eventKey={index.toString()} className="border-0">
              <Accordion.Header>
                <div className="d-flex align-items-center gap-4 w-100">
                  <div className="day-badge">
                    <span className="day-number">{index + 1}</span>
                    <span className="day-text">Day</span>
                  </div>
                  <span className="fw-medium">{day.title}</span>
                </div>
              </Accordion.Header>

              <Accordion.Body className="pt-0">
                <div className="ms-5 ps-4">
                  <ul className="list-unstyled">
                    {day?.list?.map((item, i) => (
                      <li key={i} className="mb-2 position-relative">
                        <span className="bullet-point"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {day?.highlight && (
                    <div className="highlight-section mt-4">
                      <p className="mb-2">
                        <strong>Highlight of the Day:</strong> {day.highlight}
                      </p>
                    </div>
                  )}

                  {day?.note && (
                    <div className="note-section mt-2">
                      <p className="text-muted fst-italic">
                        <strong>Note:</strong> {day.note}
                      </p>
                    </div>
                  )}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Card>
        ))}
      </Accordion>

      <style jsx>{`
        .day-badge {
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 8px 16px;
          text-align: center;
          min-width: 80px;
        }

        .day-number {
          display: block;
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1;
        }

        .day-text {
          display: block;
          font-size: 0.875rem;
          color: #1e1e1e;
        }

        .bullet-point {
          position: absolute;
          left: -20px;
          top: 8px;
          width: 6px;
          height: 6px;
          background-color: #6c757d;
          border-radius: 50%;
        }

        /* Override Bootstrap Accordion styles */
        :global(.accordion-button) {
          background-color: white !important;
          box-shadow: none !important;
          padding: 1rem 1.25rem;
        }

        :global(.accordion-button:not(.collapsed)) {
          color: inherit;
        }

        :global(.accordion-button::after) {
          display: none;
        }

        :global(.accordion-body) {
          padding: 0 1.25rem 1.25rem;
        }
      `}</style>
    </div>
  );
};
