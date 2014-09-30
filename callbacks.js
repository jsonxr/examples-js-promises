function step1(cb) {
  setTimeout(function () {
    console.log('step1');
    cb();
  }, 1000);
}

function step2(cb) {
  setTimeout(function () {
    console.log('step2');
    cb();
  }, 1000);
}

function step3(cb) {
  setTimeout(function () {
    console.log('step3');
    cb();
  }, 1000);
}

step1(function () {
  step2(function () {
    step3(function () {
      console.log('done!');
    })
  });
});
