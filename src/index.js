import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const sendToAnalytics = (metric) => {
  // Replace with your analytics endpoint
  // const url = "https://your-analytics-endpoint.com/performance";

  // axios
  //   .post(url, metric)
  //   .then((response) => {
  //     console.log("Performance data sent successfully:", response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Error sending performance data:", error);
  //   });

  console.log("Performance data sent successfully:", metric);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(sendToAnalytics);
