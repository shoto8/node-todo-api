// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Dinner'}).then((result) => {
    //     console.log(result);
    // });


    //deleteOne

    // db.collection('Todos').deleteOne({text: 'Walk trouble'}).then((result) => {
    //    console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //    console.log(result);
    // });

    //Delete replica names

    db.collection('Users').deleteMany({name: 'Daniel'}).then((result) => {
        console.log(result);
    });

    //Find an age and delete

    db.collection('Users').findOneAndDelete({age: 29}).then((result) => {
       console.log(result);
    });


    client.close();
});

