import express from 'express'

const app = express()
app.set('view engine', 'ejs')
app.use(express.static("./public"));
/*
app.use(function (req, res, next) {
    console.log("hello from middleware");
    console.log(req.url); 

    next();
});
app.use(function (req, res, next) {
    console.log("hello from middleware 123");
    console.log(req.method, req.url); 

    next();
});
*/
app.use((req, res, next) => {
    console.log("URL:", req.url);
    console.log("Method:", req.method);
    next();
});
/*app.get('/', (req, res) => {
    res.send('Hello World')
})*/
app.get('/about', (req, res) => {
    res.send('About Page')
})
app.get("/", function (req, res) {
    res.render("index", { name: "John Doe", age: 30, hobbies: ["Reading", "Traveling", "Cooking"] });
})
app.get("/error", function (req, res, next) {
    throw new Error("This is a test error");
});

app.get("/profile/:name", function (req, res) {
    res.send("Hello  " + req.params.name);
})
app.use(function (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    } res.status(500)

    res.render("error", { error: err });
}
)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
