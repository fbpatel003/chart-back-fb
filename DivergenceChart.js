const mongoose = require("mongoose");

const DivergenceChart = new mongoose.Schema(
    {
        chartPair: { type: String, required: true, unique: true },
    },{
        collection: "divergence charts"
    }
);
mongoose.model("divergence charts", DivergenceChart);