import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";

const ManageAllOrders = () => {
  const [manageOrders, setManageOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://next-car-server.onrender.com/orders/manage")
      .then((res) => setManageOrders(res.data));
  }, []);

  // handle status
  const handleStatus = (id) => {
    const clickedOrder = manageOrders.find((order) => order._id === id);
    clickedOrder.status = "Shipped";
    axios
      .put(`https://next-car-server.onrender.com/orders?id=${id}`, clickedOrder)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          const allOrders = [...manageOrders];
          setManageOrders(allOrders);
        }
      });
  };

  // handle delete order
  const handleDeleteOrder = (id) => {
    const confirmation = window.confirm("Do you want to delete order?");
    if (confirmation) {
      axios
        .delete(`https://next-car-server.onrender.com/orders/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const remainingOrder = manageOrders.filter(
              (order) => order._id !== id
            );
            setManageOrders(remainingOrder);
          }
        });
    }
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Container>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 500 }}>
          Manage All Orders
        </Typography>
        {!manageOrders.length ? (
          <Typography variant="h6">No Order History</Typography>
        ) : (
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 6, md: 12 }}
          >
            {manageOrders.map((manageOrder, index) => (
              <ManageAllOrder
                key={index}
                manageOrder={manageOrder}
                handleStatus={handleStatus}
                handleDeleteOrder={handleDeleteOrder}
              />
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default ManageAllOrders;
