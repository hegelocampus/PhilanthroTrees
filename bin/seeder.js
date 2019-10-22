process.env.DEBUG = 'mongo-seeding';
const { Seeder } = require('mongo-seeding');
const path = require('path');
const Keys = require('../config/keys');

const config = {
  database: Keys.mongoURI,
  dropDatabase: true,
};

const seeder = new Seeder(config);

const collectionReadingOptions = {
  extensions: ['ts', 'js', 'json'],
  transformers: [
    Seeder.Transformers.replaceDocumentIdWithUnderscoreId,
  ]
}
const collections = seeder.readCollectionsFromPath(
  path.resolve(__dirname + '/db_seeds'),
  collectionReadingOptions
);

seeder
  .import(collections)
  .then(() => {
    console.log("DB was successfully seeded");
  })
  .catch(err => {
    console.log("Errors during DB seed");
    console.log(err);
  });

