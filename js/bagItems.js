'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag.contents');


module.exports.addItem = ({ child, toy, delivered }) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO bagItems VALUES(
      null,
      "${child}",
      "${toy}",
      "${delivered}"
    )`, function () {
        resolve({ id: this.lastID });
      });
  });
};

module.exports.deleteItem = ({ child, toy }) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM bagItems WHERE child="${child}" AND toy="${toy}"`, function (err) {
      resolve(this.changes)
    });
  });
}

module.exports.getItems = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM bagItems`, function (err, rows) {
      resolve(rows);
    });
  });
};