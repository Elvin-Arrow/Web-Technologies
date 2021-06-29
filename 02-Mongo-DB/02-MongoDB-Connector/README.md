# Mongo DB connector for NodeJS

## Setup

Create a new NodeJS project and install the module

```powershell
npm install mongodb
```

## Using Mongo DB connector for NodeJS
All the code snippet below uses the following basic structure
```js
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const url = "mongodb://localhost:27017/presidents"; // <-- presidents is the name of the DB

MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  dbHander // <-- This is the callback
);
```

Based on what is being done, after the connection with the DB succeeds, a callback is triggered, in this case the `dbHandler()` is a callback

### Create database

```js
function dbHander(err, db) {
    if (err) throw err;  
    
    console.log("Database created!");  
    db.close();
}

```

### Create a collection
```js
function dbHander(err, db) {
  if (err) throw err;
  let dbo = db.db("cars");
  dbo.createCollection("manufacturers", (err, res) => {
    if (err) throw err;
    console.log("Collection created");
    db.close();
  });
}
```
---

### CRUD operations

#### Insert a document in the collection

```js
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
```

#### Insert multiple documents to a collection

```js
function dbHander(err, db) {
  if (err) throw err;
  const dbo = db.db("mydb");
  const myobj = [
    { name: 'John', address: 'Highway 71' },
    { name: 'Michael', address: 'Valley 345' },
    { name: 'William', address: 'Central st 954' },
    { name: 'Chuck', address: 'Main Road 989' },
    { name: 'Viola', address: 'Sideway 1633' }
  ];

  dbo.collection("customers").insertMany(myobj, (err, res) => {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
}
```

#### Find one item in the collection
The following code snippet will return the very first item in the collection
```js
function dbHander(err, db) {
  if (err) throw err;
  const dbo = db.db("mydb");

  dbo.collection("customers").findOne(
  {}, // <-- provide the required search term here 
  (err, result) => {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
}
```

To find a particular item, provide a search term as follows:
```js
const query = {
  name: "Anthony"
};
```

#### Find all items in a collection

To get all items in a collection use:
```js
function dbHander(err, db) {
  if (err) throw err;
  const dbo = db.db("mydb");

  dbo.collection("customers").find({}).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}
```

Notice here the `{}` tells us that find all

To filter out the search result to include only specific items, use:
```js
function dbHander(err, db) {
  if (err) throw err;
  const dbo = db.db("mydb");

  dbo.collection("customers").find(
    {}, // <-- Find all items
    { projection: { _id: 0, name: 1, address: 1 } })
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
}
```

Notice how the `find` function takes the second parameter as project, which essentially tells what to keep in the search result

**Sort search result**
To sort search result in ascending order use:
```js
function dbHander(err, db) {
  if (err) throw err;
  const dbo = db.db("mydb");

  const mysort = { name: 1 };
  dbo.collection("customers").find().sort(mysort)
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
    });
}
```

To change the order to descending order, use `-1` instead of `1` in the `mysort` variable
