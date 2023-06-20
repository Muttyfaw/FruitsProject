// Importing MongoClient from mongodb driver
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB")
// console.log("Running")
// const {Schema, model} = mongoose


const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit"
})

const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model("Person", PersonSchema)

const person = new Person ({
    name: "John",
    age: 34
})

console.log(person)

people


   
       
    
   
