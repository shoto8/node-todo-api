const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5b3a9914fa26513a8dea7b5f11';
//
// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }
//
// // Todo.find({
// //     _id: id
// // }).then((todos) => {
// //     console.log('Todos', todos);
// // });
// //
// // Todo.findOne({
// //     _id: id
// // }).then((todo) => {
// //     console.log('Todo', todo);
// // });
//
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var idTwo = '5b36a8387d5efb0f3561f7be';

User.findById(idTwo).then((user) => {
    if (!user) {
        return console.log('Unable to find user!');
    }


    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});


