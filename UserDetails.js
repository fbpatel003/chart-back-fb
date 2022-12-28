const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
    {
        uname: String,
        ps : String,
    },{
        collection: "user Info"
    }
);
mongoose.model("user Info", userDetailsSchema);