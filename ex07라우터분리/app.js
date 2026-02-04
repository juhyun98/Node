const express = require("express");
const app = express();
const mainrouter = require("./routes/mainrouter");
const subrouter = require("./routes/subrouter");

app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));

app.use("/", mainrouter);
app.use("/esports", subrouter);


app.listen(3000);
