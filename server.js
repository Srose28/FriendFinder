var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"/app/public")));
app.use(express.static(path.join(__dirname,"/app/data")))

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT,function(){
    console.log("App listening on PORT: ",PORT);
})