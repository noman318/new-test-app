import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import PaginateComponent from "../../components/Paginate";
import {
  useGetAllPackagesQuery,
  useDeletePackageByIdMutation,
} from "../../slices/packageApiSlice";

const ProductListScreen = () => {
  const {
    data: packages,
    isLoading,
    error,
    refetch,
  } = useGetAllPackagesQuery();

  console.log("packages", packages);
  const navigate = useNavigate();

  const [deletePackage, { isLoading: loadingDeletePackage }] =
    useDeletePackageByIdMutation();

  const handleCreateProduct = async () => {
    try {
      navigate("/admin/package/add");
    } catch (error) {
      console.log("error", error);
      toast.error(error?.data?.message || error.error);
    }
  };
  const handleDeletePackage = async (id) => {
    try {
      if (window.confirm("You want to delete product")) {
        await deletePackage(id).unwrap();
        toast.success("Product deleted");
        refetch();
        return;
      } else {
        return;
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error?.data?.message || error.error);
    }
  };
  return (
    <>
      <Row className="align-items-center mt-4rem">
        <Col>
          <h1>Packages</h1>
        </Col>
        <Col className="text-end">
          <Button className="btn-sm m-3" onClick={handleCreateProduct}>
            <FaPlus /> Create Package
          </Button>
        </Col>
      </Row>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Table striped hover responsive className="table-sm">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>PICK</th>
                <th>DROP</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {packages?.map((data, index) => (
                <tr key={data?._id}>
                  <td>{index + 1}</td>
                  <td>{data?.title}</td>
                  <td>Rs. {data?.price}</td>
                  <td>{data?.category}</td>
                  <td>{data?.pickup}</td>
                  <td>{data?.drop}</td>
                  <td>
                    <LinkContainer to={`/admin/package/${data?._id}/edit`}>
                      <Button className="btn-sm mx-2">
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => handleDeletePackage(data?._id)}
                      disabled={loadingDeletePackage}
                    >
                      <FaTrash color="white" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <PaginateComponent
            page={packages.page}
            pages={packages.pages}
            isAdmin={true}
          />
        </>
      )}
    </>
  );
};

export default ProductListScreen;
