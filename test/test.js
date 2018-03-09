// const { } = require('../js/lootbag.js');
const { createBag } = require('../js/makeTable');
const {child, toy } = require('../js/parse-args');
const { addItem } = require('../js/bagItems');
const { assert: { equal, isFunction, isObject, isArray, lengthOf, oneOf } } = require('chai');

beforeEach((done) => {
  createBag()
    .then(() => {
      done();
    })
})

// describe('parse input module', () =>{
//   describe('converting arg array', ()=>{
//     it('should return an object')
//     isObject()
//   });
// });

describe('bag items module', () => {
  describe('adding item to the bag', () => {
    let newItem = {
      child: 'Damon',
      toy: 'Baloon',
      delivered: 1
    };
    it('should return an object', ()=>{
      return addItem(newItem)
      .then((item) =>{
        isObject(item);
      });
    });
    it('should add a new item to the db', ()=>{
      return addItem(newItem)
      .then((item)=>{
        equal(6, item.id);
      })
    })
  });

})