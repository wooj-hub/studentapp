const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

//포트번호가 없으면 3000에 넣어줘
const port = process.env.PORT || 3000;
app.listen(port);
app.get("/api/lunch", (req, res) =>
  res.json({ menu: "감자", store: "신전떡볶이", price: 15000 })
);

app.get("/api/dinner", (req, res) =>
  res.json({ menu: "수원왕갈비", store: "집앞", price: 11900 })
);
