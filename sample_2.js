'use strict';

const fs = require('fs');
const fileToBeRead = __dirname + '/' + (process.env.FILE_NAME || 'sample_1.js');
const options = 'utf8';

function readFileSyncProm(fileName, option) {
  var d = new Promise(function (resolve, reject) {
    var content = fs.readFileSync(fileName, option);
    resolve(content);
  })
  return d;
}

function calledFunc() {
  readFileSyncProm(fileToBeRead, options)
    .then(function(content) {
      console.log('File Contents-> ', content);
    })
    .catch(function(e){
      console.log('Errored', e)
    });
}

calledFunc();
