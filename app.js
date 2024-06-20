const _ = require("lodash")
let items = [1, [2, [3, [4]]]];
let newitems = _.flattenDeep(items);

console.log(newitems);