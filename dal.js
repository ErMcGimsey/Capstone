const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://emilyMc:secret321@capstone-susvault.wmbqsc0.mongodb.net/?retryWrites=true&w=majority";



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
let db = null

client.connect(err => {
  console.log('connected to db')
    db = client.db('myproject')
});

//create user account
function create(name, email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0, deposits: 0, withdrawls: 0};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    })
}

//all users
function all() {
    return new Promise((resolve, reject) => {
        db
        .collection('users')
        .find({})
        .toArray(function(err, docs) {
            err ? reject(err) : resolve(docs);
        });
    })
}

function update(balance) {
    return new Promise((resolve, reject) => {
        let upd = { $set: {"balance": Number(balance)}}
        let crit = {email: 'bruce@mit.edu'}

        db.collection('users').updateOne(crit, { $set: {"balance" : Number(balance)}})
resolve()
    })
}



module.exports = {create, all, update};