const mongoose = require("mongoose");

const FocusCharts = new mongoose.Schema(
    {
        chartPair: { type: String, required: true, unique: true },
        // unique: true,
    },{
        collection: "focus charts"
    }
);
mongoose.model("focus charts", FocusCharts);