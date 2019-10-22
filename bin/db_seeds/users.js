const { getObjectId, getObjectIds } = require('../../helpers/index');
const casual = require('casual');

let names = [];
for (let i = 0; i < 20; i++) {
  names.push({
    username: casual.username,
    email: casual.email,
    password: casual.password,
    creationDate: new Date()
  });
}

names.push({
  username: "test_user",
  email: "test@test.com",
  password: "testpass1",
  creationDate: new Date()
});

names.push({
  username: "example_user",
  email: "example@example.com",
  password: "examplepass1",
  creationDate: new Date()
});

module.exports = names

