const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (Req, res) => {
    res.send("chal raha hai");
});

app.listen(3000, () => {
    console.log("running");
})