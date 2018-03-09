const { addItem, deleteItem } = require('./bagItems');

module.exports = (args) => {
  if (args[0] === 'add') {
    let argObj = { child: args[2], toy: args[1], delivered: 0 }
    addItem(argObj);
  } else if (args[0] === 'remove') {
    let argObj = { child: args[1], toy: args[2] }
    deleteItem(argObj);
  }
};