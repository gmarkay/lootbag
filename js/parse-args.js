const { addItem }  = require('./bagItems');

module.exports = (args) =>{
  if(args[0] === 'add'){
    args.shift();
    console.log(args);
    const argObj = {child: args[1], toy:args[0], deliverd: 0}
    addItem(argObj);
  }
};