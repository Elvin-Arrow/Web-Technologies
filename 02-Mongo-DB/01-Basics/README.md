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

### Basic commands

To check current DB, use `db` command


`db.help()` will show you commands available


To view the database statistics use: `db.stats()`


To view all databases use: `show dbs`


To use a particular DB, use: `use [name of the databse]`


To list all collections in a DB, use:
```bash
show collections
```


Collections can be created using:
```bash
db.createCollection(name,options)
```
