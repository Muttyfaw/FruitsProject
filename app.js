// Importing MongoClient from mongodb driver
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB")
// console.log("Running")
// const {Schema, model} = mongoose


const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const apple = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit"
})

const kiwi = new Fruit({
    name: "kiwi",
    rating: 10,
    review: "The best fruit"
})

const orange = new Fruit({
    name: "orange",
    rating: 4,
    review: "Too sour for me"
})

const banana = new Fruit({
    name: "banana",
    rating: 3,
    review: "Wierd texture"
})
// Fruit.insertMany([apple, kiwi, orange, banana])

const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model("Person", PersonSchema)

const person = new Person ({
    name: "John",
    age: 34
})
// person.save()

Fruit.find()
    .then((fruits) => {
        fruits.forEach((fruit) => {
            console.log(fruit.name)
        });
       mongoose.connection.close()
    })  
        
    .catch((err) => {
        console.error(err)
    })
        



console.log("Successfully created!")



   
       
    
   
