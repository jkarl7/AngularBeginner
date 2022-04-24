// Use Express
let express = require("express");
// Use body-parser
let bodyParser = require("body-parser");

// Create new instance of the express server
let app = express();

// Define the JSON parser as a default way
// to consume and produce data through the
// exposed APIs
app.use(bodyParser.json());

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
let distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Init the server
let server = app.listen(process.env.PORT || 8080, function () {
  let port = server.address().port;
  console.log("App now running on port", port);
});

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.get("/api/status", function (req, res) {
  if (req.headers['origin'] !== 'https://warlords-leek2.ondigitalocean.app') {
    res.sendStatus(403);
  } else {
    console.log("Base url: " + req.baseUrl);
    console.log("URL : " + req.url);
    res.status(200).json({ status: "UP" });
  }
 // console.log("Base url: " + req.baseUrl);
 // console.log("URL : " + req.url);
//  res.status(200).json({ status: "UP" });
});
