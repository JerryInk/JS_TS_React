// let {E, PI, avg} = require('./lib.js');
// import {pi, e, average} from './lib.mjs'
import {PI, E, avg} from './lib.js'
// import add from 'lodash/add.js'
import _ from 'lodash'

const result = _.add(PI + E);

console.log(result);

//console.log({e, pi});

console.log(avg(3, 4, 3));
console.log(_.mean([3, 4, 3]))