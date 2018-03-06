console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');


// console.log(_.isString(true));
// console.log(_.isString('vlad'));

var filteredArray = _.uniq(["Vlad", 1, "Vlad", 1, 2, 3, 4]);
console.log(filteredArray);

// let res = notes.add(7,7);
// console.log('Result: ', res);


// var user = os.userInfo();

// fs.appendFile('greetings.txt', `hello ${user.username} You are
//   ${notes.age}`, (err) => {
//   if (err) {
//     console.log('unable to write to file');
//   }
// });

