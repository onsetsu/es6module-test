'use strict';

import { inc, counter } from 'dep';

console.log('0', counter); // 0
inc();
console.log('1', counter); // 1