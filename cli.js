#!/usr/bin/env node
var md5 = require('md5');
var weekday = require('weekday');
console.log(md5(weekday()));
