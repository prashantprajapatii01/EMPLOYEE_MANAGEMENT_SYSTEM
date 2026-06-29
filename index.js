const express = require("express")
const hbs = require("hbs")
const Router = require("./routes/Router")
require("./db-connect")

hbs.registerPartials("./views/partials")
const app = express()
app.set("view engine","hbs")  // optional if file extension is provided during template rendering in controller


app.use("",Router)

app.listen(8000,() => console.log(`server is running at http://localhost:8000`));
