// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b33cb0210868f07c1e90192')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });
    //
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b33c6f610868f07c1e90107')
    // }, {
    //     $set: {
    //         completed: true,
    //         text: 'Walk the cat'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });
    //
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b33cb0210868f07c1e90192')
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //    console.log(result);
    // });


    //Update name property of one user in users database
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b33e12f10868f07c1e9051f')
    }, {
        $inc: {
            age: 17
        },
        $set: {
            name: 'Donnietello'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    client.close();
});

