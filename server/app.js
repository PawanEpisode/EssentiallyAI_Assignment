// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(function (req, res, next) {
  const allowedOrigins = ["http://localhost:5000"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.enable("trust proxy");

app.post("/api/fetchStockData", async (req, res) => {
  // Handle the incoming POST data here (req.body contains the data sent by the client)
  const requestData = req.body;
  const { stockTickerSymbol, date } = requestData;
  const apiURL = `https://api.polygon.io/v1/open-close/${stockTickerSymbol}/${date}?adjusted=true&apiKey=imnf9VP0x_Qu0PHZFKzFse9RZHD77IAF`;
  try {
    // Make a GET request to the Polygon API
    const polygonApiResponse = await axios.get(apiURL);

    // Extract the relevant data from the response (assuming the data you need is in polygonApiResponse.data)
    const responseData = {
      message: `Received data: ${JSON.stringify(requestData)}`,
      polygonData: polygonApiResponse.data, // Include the Polygon API data in the response
    };
    // Respond back to the client
    res.json(responseData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
