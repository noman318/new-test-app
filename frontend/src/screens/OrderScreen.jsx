import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
  useGetOrderByIdQuery,
  usePayOrderMutation,
} from "../slices/orderApiSlice";

const OrderScreen = () => {
  const { id: orderId } = useParams();
  const { data: order, isLoading, error } = useGetOrderByIdQuery(orderId);
  console.log("order", order);
  // eslint-disable-next-line no-unused-vars
  const [payOrder, { isLoading: payLoading }] = usePayOrderMutation();

  // console.log("paypal", paypal);

  //   console.log("order", order);
  // TESTING ONLY! REMOVE BEFORE PRODUCTION
  // async function onApproveTest() {
  //   await payOrder({ orderId, details: { payer: {} } });
  //   refetch();

  //   toast.success("Order is paid");
  // }

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant={"danger"} />
  ) : (
    <>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Booking</h2>
              <p>
                <strong>Name: </strong> {order?.user?.name}
              </p>
              <p>
                <strong>Email: </strong>{" "}
                <a href={`mailto:${order?.user?.email}`}>
                  {order?.user?.email}
                </a>
              </p>

              <div className="row g-4 mb-5">
                <div className="col-md-3">
                  <div className="info-card">
                    <i className="bi bi-geo-alt"></i>
                    <div>
                      <small>Pickup</small>
                      <h6>{order?.package_id?.pickup}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="info-card">
                    <i className="bi bi-calendar"></i>
                    <div>
                      <small>Duration</small>
                      <h6>{order?.package_id?.duration}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="info-card">
                    <i className="bi bi-pin-map"></i>
                    <div>
                      <small>Drop</small>
                      <h6>{order?.package_id?.drop}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order?.paymentMethod ?? "COD"}
              </p>
              {order?.isPaid ? (
                <Message variant="success">Paid on {order?.paidAt}</Message>
              ) : (
                <Message variant="danger">Not Paid</Message>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Booking Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>Rs. {order?.package_id?.price}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>Rs. {order?.package_id?.price}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
