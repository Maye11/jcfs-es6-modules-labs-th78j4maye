import { isFunction, containsProperty } from "./src/lib/validation.js";

import { sort, customSort, log } from "./src/lib/utils.js";

log(isFunction(sort));

const array = [5, 8, 9, 2, 1];
log(customSort(array));
log(sort(array));
