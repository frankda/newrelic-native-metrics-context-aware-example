const {Worker} = require('worker_threads');

var worker1 = new Worker('./child-thread.js'); 
var worker2 = new Worker('./child-thread.js');
