const { addItem, deleteItem, getChildren, getChildToys, deliverToy } = require('./bagItems');

module.exports = (args) => {
  if (args[0] === 'add') {
    let argObj = { child: args[2], toy: args[1], delivered: 0 }
    addItem(argObj);
  } else if (args[0] === 'remove') {
    let argObj = { child: args[1], toy: args[2] }
    deleteItem(argObj);
  } else if (args[0] === 'ls' && args.length === 1) {
    getChildren();
  } else if (args[0] === 'ls' && args.length === 2) {
    getChildToys(args[1]);
  } else if (args[0] === 'delivered') {
    deliverToy(args[1]);
  }
};