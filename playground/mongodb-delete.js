// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //same as above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleeteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Antoine Rahatt'}). then((result) => {
  //   console.log(result);
  // });
  // db.collection('Users').findOneAndDelete({
  //    _id: new ObjectID('59bfecad0dddd631f26052d8')
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});
