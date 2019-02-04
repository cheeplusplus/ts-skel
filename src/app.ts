import "source-map-support/register";

import * as express from "express";
import "express-async-errors";

import * as exphbs from "express-handlebars";

const app = express();


// Configure layout engine
const hb_options = {
    "defaultLayout": "main"
};

app.engine("handlebars", exphbs(hb_options));
app.set("view engine", "handlebars");

// Routes

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
