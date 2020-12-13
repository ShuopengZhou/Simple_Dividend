let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');

app.use(bodyParser.urlencoded({ 
    extended: true 
}));
app.use(bodyParser.json())

async function testDb(){

    const uri = 'mongodb+srv://tjxia-access:6lNYXRRHXVaWkDhR@cluster0.rl6y7.mongodb.net/test?retryWrites=true&w=majority'
 
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

app.get('/test', function (req, res) {
    testDb().catch(console.error);
    res.writeHeader(200, {'Content-Type':'application/json;charset=UTF-8'});
    var json = JSON.stringify({status: "success"})
    res.end(json)
})

var server = app.listen(8088, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Server runs at localhost:", port)
})