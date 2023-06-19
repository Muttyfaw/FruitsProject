// Importing MongoClient from mongodb driver
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB")


 // Insertion
const insertDocuments = function(db, callback){

const collection = db.collection("fruits")
const cursorInsertion = fruits.insertMany([
    {
        name : "Apple",
        score: 8 ,
        review : 'Great Fruit'
    },
    {
        name : "Orange",
        score : 6 ,
        review : "Kinda sour"
    },
    {
        name: "Banana",
        score: 9 ,
        review: "Great stuff"
    }
]);
console.log(cursorInsertion.insertedCount);
}
   
       
    
   
