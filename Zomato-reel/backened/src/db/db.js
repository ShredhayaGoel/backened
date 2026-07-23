const mongoose = require("mongoose");

function connectdb() {
    mongoose.connect("mongodb://localhost:27017/food-view")
        .then(() => {
            console.log("mongodb conneccted");

        })
        .catch((err) => {
            console.log("mongodb not connected", err);

        })
}
module.exports = connectdb;