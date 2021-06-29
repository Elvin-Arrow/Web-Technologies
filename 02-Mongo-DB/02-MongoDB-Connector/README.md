# Mongo DB connector for NodeJS

## Setup

Create a new NodeJS project and install the module

```powershell
npm install mongodb
```

## Using Mongo DB connector for NodeJS

### Create database

```js
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const url = "mongodb://localhost:27017/presidents"; // <-- presidents is the name of the DB

MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  dbHander
);

function dbHander(err, db) {
    if (err) throw err;  
    
    console.log("Database created!");  
    db.close();
}

```
