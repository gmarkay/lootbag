// const { } = require('../js/lootbag.js');
const { createBag, } = require('../js/makeTable');
const { child, toy } = require('../js/parse-args');
const { addItem, deleteItem, getItems } = require('../js/bagItems');
const { assert: { equal, isFunction, isObject, isArray, lengthOf, oneOf } } = require('chai');

beforeEach((done) => {
  createBag()
    .then(() => {
      done();
    })
})


describe('bag items module', () => {

  describe('adding item to the bag', () => {
    let newItem = {
      child: 'Damon',
      toy: 'Baloon',
      delivered: 1
    };
    it('should return an object', () => {
      return addItem(newItem)
        .then((item) => {
          isObject(item);
        });
    });
    it('should add a new item to the db', () => {
      return addItem(newItem)
        .then((item) => {
          equal(6, item.id);
        })
    })
  });

  describe('deleting items from the bag', () => {
    let itemDelete = {
      child: 'Nico',
      toy: 'Yoyo',
    };
    it('should return one change occurred', () => {
      return deleteItem(itemDelete)
        .then((changeNum) => {
          equal(1, changeNum);
        });
    });
    it('should delete one item from the db', () => {
      return deleteItem(itemDelete)
        .then(() => {
          return getItems()
            .then((data) => {
              lengthOf(data, 4);
            });
        });
    });
  });

})