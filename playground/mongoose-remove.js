const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove

//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5b3fcf85c0797e5e98b6800e').then((todo) => {
    console.log(todo);
});