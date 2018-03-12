
// const { } = require('../js/lootbag.js');
const { createBag, } = require('../js/makeTable');
const { child, toy } = require('../js/parse-args');
const { addItem, deleteItem, getItems, getChildren, getChildToys } = require('../js/bagItems');
const { assert: { equal, isFunction, isObject, isArray, lengthOf, oneOf, isString } } = require('chai');

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
  describe('getting all children from the bag', () => {
    it('should be an array', () => {
      return getChildren()
        .then((children) => {
          isArray(children);
        });
    });
    it('children should be strings', () => {
      return getChildren()
        .then((children) => {
          let i = Math.floor(Math.random() * children.length - 1) + 1;
          isString(children[i].child);
        });
    });
  });

  describe('getting one childs toys from the bag', () => {
    let child = 'Nico';

    it('should be a function', () => {
      isFunction(getChildToys);
    });
    it('toys should be an array', () => {
      return getChildToys(child)
        .then((toys) => {
          isArray(toys);
        });
    });
    it('each toy should be a string', () => {
      return getChildToys(child)
        .then((toys) => {
          let i = Math.floor(Math.random() * toys.length - 1) + 1;
          isString(toys[i].toy);
        });
    });
    it('should return the correct toy', () => {
      return getChildToys(child)
        .then((toys) => {
          equal('Yoyo', toys[0].toy);
        });
    });
  });

})