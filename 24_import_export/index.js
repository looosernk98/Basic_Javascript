// https://javascript.info/import-export

/*

1. default
2. named


*/

import { countriesList, sum as sumOfTwo } from "./util";
import sayHi from './util';

// import * as all from './util'

console.log('sayHi: ', sayHi);

console.log('countriesList: ', countriesList);
let res = sum(3, 9);
console.log('res: ', res);

