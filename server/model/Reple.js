const mongoose = require("mongoose");

const repleSchema = new mongoose.Schema(
    {
        author: String,
        password: String,
        content: String,
        repleNum: Number,
    },
    { collection: "reple", timestamps: true }
);

const Reple = mongoose.model("Reple", repleSchema);

module.exports = { Reple };