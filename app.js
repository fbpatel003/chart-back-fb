const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoURL =
  "mongodb+srv://FbPatel:Fenil1998@cluster0.i4p5593.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to mongo DB");
  })
  .catch((e) => console.log(e));

app.listen(5000, () => {
  console.log("server started");
});

require("./UserDetails");

const user = mongoose.model("user Info");

app.post("/login", async (req, res) => {
  const curUser = await user.findOne(req.body);

  if (!curUser) {
    return res.json({ status: "user not found" });
  } else if (req.body.ps == user.ps) {
    return res.json({ status: "success Login" });
  } else {
    return res.json({ status: "success" });
  }
});

require("./ChartsInFocus");

const addToFocus = mongoose.model("focus charts");

app.post("/addToFocus", async (req, res) => {
  try {
    await addToFocus.create({
        chartPair: req.body.chartPair,
    });
    res.send({ status: 'chartAdded' });
  } catch (error) {
    res.send({ status: "chartAdding to focus error",error });
  }
});

app.post("/getFromFocus", async (req, res) => {
    try {
      const result = await addToFocus.find();
      res.send({ data: result });
    } catch (error) {
      res.send({ status: "chart getting error",error });
    }
  });

  app.post("/removeFromFocus", async (req, res) => {
    try {
       await addToFocus.deleteOne({ chartPair: req.body.chartPair});
      res.send({ data: 'deleted from focus' });
    } catch (error) {
      res.send({ status: "chart deleting error",error });
    }
  });

  require('./DivergenceChart')

  const divergenceChart = mongoose.model('divergence charts');

  app.post("/addToDivergence", async (req, res) => {
    try {
      await divergenceChart.create({
          chartPair: req.body.chartPair,
      });
      res.send({ status: 'chartDivergenceAdded' });
    } catch (error) {
      res.send({ status: "chartAdding to divergence error",error });
    }
  });

  app.post("/getFromDivergence", async (req, res) => {
    try {
      const result = await divergenceChart.find();
      res.send({ data: result });
    } catch (error) {
      res.send({ status: "chart getting error",error });
    }
  });

  app.post("/removeFromDivergence", async (req, res) => {
    try {
       await divergenceChart.deleteOne({ chartPair: req.body.chartPair});
      res.send({ data: 'deleted from divergence' });
    } catch (error) {
      res.send({ status: "chart deleting error",error });
    }
  });