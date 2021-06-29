# Basics

This section covers some of the basic commands for mongo db as used in the terminal

## Commands

### Launching mongo DB

Check mongo db version
```bash
mongod --version
```

Launch mongo DB terminal client using:
```bash
mongo
```
---

### Basic commands

To check current DB, use 
```bash
db
```

To list all available commands: 
```bash
db.help()
```


To view the database statistics use: 
```bash
db.stats()
```

To view all databases use: 
```bash
show dbs
```

To use a particular DB, use: 
```bash
use [name of the database]
```

To list all collections in a DB, use:
```bash
show collections
```


Collections can be created using:
```bash
db.createCollection(name,options)
```
---

### CRUD options

#### Create record

To add a record to the DB, you need pass in a JSON object like so:
```bash
db.people.insert({name: "Bill Clinton"})
```

#### Search record(s)

To list all items in a collection:
```bash
db.people.find()
```

To find a specfic record against a particular field:
```bash
db.people.find({name: 'Bill Clinton’})
```

To find a specfic record against a particular field using regular expressions:
```bash
db.people.find({name: {$regex: '^Bill’}})
```

To find a specfic record against a particular field using regular expressions and get only one result:
```bash
db.people.findOne({name: {$regex: '^George’}})
```

To get the first two entires of a collection:
```bash
db.people.find().limit(2);
```

#### Updating record(s)

To change a value in the record use:
```bash
db.people.update({name: 'Bill Clinton'}, {$set: {name: 'William Clinton', terms: 2}})
```
This is a two stepped process, first find the required enter, and then update the required value

One can also use the `save` method to completely replace the document with a new value
```bash
db.COLLECTION_NAME.save({_id:ObjectId(),NEW_DATA})
```

#### Deleting record / collection/ database

To delete a particular record in a collection:
```bash
db.people.remove({name: {$regex: 'Bush$'}}, {justOne: true})
```

This will delete the first instance as found using the term or regex

To delete a collection:
```bash
db.people.drop() // <-- Here people is the name of the collection
```

To delete database(s)
```bash
db.dropDatabase()
```

To drop a specific database, switch to that databse using the `use [db_name]` command
