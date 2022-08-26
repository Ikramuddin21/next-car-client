import { Box } from "@mui/material";
import React from "react";
import CanvasJSReact from "../../../assets/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DashboardCommon = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Monthly Sales - 2021",
    },
    axisX: {
      valueFormatString: "MMM",
    },
    axisY: {
      prefix: "$",
      includeZero: false,
    },
    data: [
      {
        yValueFormatString: "$#,###",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [
          { x: new Date(2021, 0), y: 25060 },
          { x: new Date(2021, 1), y: 27980 },
          { x: new Date(2021, 2), y: 42800 },
          { x: new Date(2021, 3), y: 32400 },
          { x: new Date(2021, 4), y: 35260 },
          { x: new Date(2021, 5), y: 33900 },
          { x: new Date(2021, 6), y: 40000 },
          { x: new Date(2021, 7), y: 52500 },
          { x: new Date(2021, 8), y: 32300 },
          { x: new Date(2021, 9), y: 42000 },
          { x: new Date(2021, 10), y: 37160 },
          { x: new Date(2021, 11), y: 38400 },
        ],
      },
    ],
  };
  return (
    <Box sx={{ mb: 5, width: "75%" }}>
      <CanvasJSChart options={options} />
    </Box>
  );
};

export default DashboardCommon;
