import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useGetOrdersQuery } from "../../slices/orderApiSlice";
const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();
  console.log("orders", orders);
  return (
    <div>
      <h1>Orders</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <>
          <Message variant={"danger"}>
            {error?.data?.message || error.error}
          </Message>
        </>
      ) : (
        <Table striped hover responsive className="table-sm">
          <thead>
            <tr>
              <td>ID</td>
              <td>USER</td>
              <td>DATE</td>
              <td>PAID</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order?._id}</td>
                <td>{order?.user?.name}</td>
                <td>{order?.createdAt.substring(0, 10)}</td>
                <td>
                  {order?.isPaid ? (
                    order?.paidAt?.substring(0, 10)
                  ) : (
                    <FaTimes color="red" />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order?._id}`}>
                    <Button variant="light">Details</Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default OrderListScreen;
