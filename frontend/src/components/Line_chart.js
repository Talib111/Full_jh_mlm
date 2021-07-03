import React from "react";
import { Line } from "react-chartjs-2";
import "../Styles/chart.css";

function Line_chart() {
  const data = {
    labels: ["jan", "feb", "mar", "apr", "may"],
    datasets: [
      {
        label: "sales for 2020 (M)",
        data: [3, 2, 2, 1, 5],
        borderColor: "yellow",
        backgroundColor: "blue",
        pointBackgroundColor: "black",
        pointBorderColor: "green",
      },
      {
        label: "sales for 2019 (M)",
        data: [1, 3, 2, 2, 3],
        borderColor: "red",
        backgroundColor: "blue",
        pointBackgroundColor: "black",
        pointBorderColor: "green",
      }
    ]
  }

  const options = {
    title: { display: true, text: "LIne Chart" },
    scales: { yAxes: [{ ticks: { min: 0, max: 6, stepSize: 1 } }] },
  };
  return (
    <React.Fragment>
      <div className="line_chart">
        {" "}
        <Line data={data} options={options} />
      </div>
    </React.Fragment>
  );
}

export default Line_chart;
