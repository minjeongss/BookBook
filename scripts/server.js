// npm i express cors axios dotenv

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/list", async (req, res) => {
  try {
    const { queryType, maxResults, cover, start, searchTarget } = req.query;
    const apiUrl = "https://www.aladin.co.kr/ttb/api/ItemList.aspx";

    const response = await axios.get(apiUrl, {
      params: {
        ttbkey: process.env.TTB_KEY,
        QueryType: queryType || "BestSeller",
        MaxResults: maxResults || 8,
        Cover: "Big",
        start: start || 1,
        SearchTarget: searchTarget || "Book",
        output: "js",
        Version: "20131101",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while fetching data from Aladin API" });
  }
});

app.get("/api/search", async (req, res) => {
  try {
    const { query, queryType, maxResults, start, searchTarget } = req.query;
    const apiUrl = "https://www.aladin.co.kr/ttb/api/ItemSearch.aspx";

    const response = await axios.get(apiUrl, {
      params: {
        ttbkey: process.env.TTB_KEY,
        Query: query || "aladdin",
        QueryType: queryType || "Title",
        MaxResults: maxResults || 8,
        Cover: "Big",
        start: start || 1,
        SearchTarget: searchTarget || "Book",
        output: "js",
        Version: "20131101",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while fetching data from Aladin API" });
  }
});

app.get("/api/favorite", async (req, res) => {
  try {
    const { itemType, itemIsbn } = req.query;
    const apiUrl = "https://www.aladin.co.kr/ttb/api/ItemLookUp.aspx";

    const response = await axios.get(apiUrl, {
      params: {
        ttbkey: process.env.TTB_KEY,
        itemIdType: itemType || "ISBN13",
        ItemId: itemIsbn || "9791187824824",
        Cover: "Big",
        output: "js",
        Version: "20131101",
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while fetching data from Aladin API" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
