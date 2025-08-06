import React, { useEffect, useState } from "react";
import { getAllOrders } from "../Services/adminDashboard"; // your API call
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderPage = () => {
  const [orders, setOrders] = useState([]); // ✅ initialize as array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getAllOrders();
        setOrders(response || []); // ✅ fallback to empty array
      } catch (error) {
        console.error("Failed to fetch orders", error);
        toast.error("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="container py-4">
      <h3 className="mb-4 fw-bold">All Orders</h3>

      {Array.isArray(orders) && orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover shadow-sm">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => (
                <tr key={order?.id || index}>
                  <td>{index + 1}</td>
                  <td>{order?.user?.name || "N/A"}</td>
                  <td>{new Date(order?.date).toLocaleDateString()}</td>
                  <td>
                    <span
                      className={`badge ${
                        order?.status === "Completed"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {order?.status || "Unknown"}
                    </span>
                  </td>
                  <td>₹{order?.totalAmount?.toFixed(2) || "0.00"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
