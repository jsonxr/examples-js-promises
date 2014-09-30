var q = require('q');

function step1() {
  var deferred = q.defer();
  setTimeout(function () {
    console.log('step1');
    deferred.resolve();
  }, 1000);
  return deferred.promise;
}

function step2() {
  var deferred = q.defer();
  setTimeout(function () {
    console.log('step2');
    deferred.resolve();
  }, 1000);
  return deferred.promise;
}

function step3() {
  var deferred = q.defer();
  setTimeout(function () {
    console.log('step3');
    deferred.resolve();
  }, 1000);
  return deferred.promise;
}

step1()
  .then(step2)
  .then(step3)
  .then(function () {
    console.log('Done!');
  })