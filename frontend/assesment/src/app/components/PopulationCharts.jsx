"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";

// Register the required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const PopulationChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-red-500">No population data available</p>;
  }

  // Chart.js data configuration
  const chartData = {
    labels: data.map((item) => item.year), // X axis (years)
    datasets: [
      {
        label: "Population",
        data: data.map((item) => item.value), // Y axis (population)
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        tension: 0.4, // Smooth the line
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Years",
        },
      },
      y: {
        title: {
          display: true,
          text: "Population",
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Population Over Time</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default PopulationChart;
