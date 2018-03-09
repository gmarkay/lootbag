'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag.contents');


module.exports.addItem = ({child, toy, delivered})=>{
  return new Promise((resolve, reject)=>{
    db.run(`INSERT INTO bagItems VALUES(
      null,
      "${child}",
      "${toy}",
      "${delivered}"
    )`, function(){
      resolve({ id: this.lastID });
    });
  });
};