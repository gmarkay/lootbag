
const sqlite3 = require('sqlite3').verbose();
const { createBag } = require('./makeTable');

(function createDb() {
  new sqlite3.Database('lootbag.sqlite', () => {
    createBag()
      .then((data) => {
        console.log('child ids', data);
      })
      .catch((err) => {
        console.log('oops', err);
      });
  });
}());
