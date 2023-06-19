const  MongoClient  = require("mongodb").MongoClient;
const assert = require("assert")

// Replace the uri string with your connection string.
const url = "mongodb://127.0.0.1:27017";

// Database name
const dbName = "fruitsDB"

//New mongo client
const client = new MongoClient(url, { useNewUrlParser: true });

//Use connct method to connect to the server
client.connect(function(err){
    assert.equal(null, err)
    console.log("Connected successfully to server")

    const db = client.db(dbName)

    client.close()
})

// async function run() {
//     try {
//         const database = client.db('sample_mflix');
//         const movies = database.collection('movies');

//         // Query for a movie that has the title 'Back to the Future'
//         const query = { title: 'Back to the Future' };
//         const movie = await movies.findOne(query);

//         console.log(movie);
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);