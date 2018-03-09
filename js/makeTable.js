const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag.contents');
const { bagItems } = require('../data/loot-bag');



module.exports.createBag = () => {
  return new Promise((resolve, reject) => {
    db.run('DROP TABLE IF EXISTS bagItems')
      .run(
        `CREATE TABLE IF NOT EXISTS bagItems(item_id INTEGER PRIMARY KEY AUTOINCREMENT, 
      child TEXT, toy TEXT, delivered INTEGER)
      `, (err) => {
          if (err) return reject(err);
          resolve(putInBag());
        });
  });
};

const putInBag = () => {
  return Promise.all(bagItems.map(({ child, toy, delivered }) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO bagItems VALUES(null, "${child}", "${toy}", "${delivered}")`
        , function (err) {
          if (err) return reject(err);
          resolve(this.lastID);
        });
    });

  }))

}