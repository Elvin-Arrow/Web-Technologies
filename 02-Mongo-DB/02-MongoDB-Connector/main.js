const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const url = "mongodb://localhost:27017/";

MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  dbHander
);

// Create a new DB
/*function dbHander(err, db) {
    if (err) throw err;  
    
    console.log("Database created!");  
    db.close();
}*/

// Create a new collection
/* function dbHander(err, db) {
  if (err) throw err;

  let dbo = db.db("cars");

  dbo.createCollection("manufacturers", (err, res) => {
    if (err) throw err;

    console.log("Collection created");

    db.close();
  });
} */

// Insert into collection
function dbHander(err, db) {
  if (err) throw err;

  let dbo = db.db("cars");

  let manufacturer = {
    name: "Honda",
    dateEstablished: "1959",
  };

  dbo.collection("manufacturers").insertOne(manufacturer, (err, res) => {
    if (err) throw err;

    console.log("Document inserted");

    db.close();
  });
}
