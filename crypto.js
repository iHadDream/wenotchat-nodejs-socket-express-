/**
 * Created by kevin on 2017/6/20.
 */
'use strict'
const crypto = require('crypto');
const hash = crypto.createHash('md5');
hash.update('hello,world');
hash.update('hello ,kevin');
console.log(hash.digest('hex'));