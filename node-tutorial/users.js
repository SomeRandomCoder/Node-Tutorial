// a empty user list
var users = [];

//create 3 users in the users array
//using code like this: users.push({ first_name : 'Andy', last_name : 'Bradshaw' });

//Create 3 users : Jack, Callum and Neil - they all should have the name Bradshaw
//var user = ["Jack","Callum","Neil"];
var person = ["Jack","Callum","Neil"];
//now loop through the users array and write the following data to the console below each other for each user
//you can use the forEach method
person.forEach(function(x){
  var obj = {
    first_name: x,
    last_name: 'Bradshaw'
  };
users.push(obj);
});

users.forEach(function(user) {
  console.log("Hi, " + user.first_name + " " + user.last_name + "!");
});

// for (var i = 0; i<users.length; i++) {
//   console.log("Hi " + users[i].first_name + " " + users[i].last_name + "!");
// }
//Hi, first_name last_name!
