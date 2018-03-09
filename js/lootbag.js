#!/usr/bin/env node
'use strict';

process.title = 'Loot Bag';

const {argv: [,,...args ]} = process;
const getArgs = require('./parse-args')(args);

// console.log(getArgs);