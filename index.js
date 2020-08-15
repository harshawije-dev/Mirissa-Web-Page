const express = require("express");
const store = express();
const Database = require("nedb");

store.listen(3300, () => {
  console.log("Connected to the Server: 3300");
});
//Create a db
const db = new Database({ filename: "./public/database/sample.db" });
//Db for images
const dbImg = new Database({ filename: "./public/database/images.db" });
db.loadDatabase();
dbImg.loadDatabase();

//List the directory
store.use(express.static("public"));
store.use(express.json({ user: "client" }));

// Post the data to the server
store.post("/client", (request, response) => {
  console.log("Got a Request");
  let received = request.body;

  //inserting data to the database
  db.insert(received);

  //Notify the client received data
  response.json({
    status: "success",
    data: request.body,
  });
});

//Get the data from client
store.get("/client", (request, response) => {
  // const $env = "Harshana";

  db.count({}, function (err, data) {
    if (err) {
      console.log("Error occurred" + err);
    } else if (data === 1) {
      response.json({
        res: data,
      });
    } else {
      return 0;
    }
  });
});
