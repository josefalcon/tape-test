var test = require('tape');
var library = require('../library');
var request = require('request');
var fs = require('fs');

test('zero area', function (t) {
  t.plan(1);
  t.equal(library.area(0), 0);
});

test('prevent a network call', function (t) {
  request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      t.fail('successfully made a network call');
    } else {
      t.pass('prevented a network call');
    }
    t.end();
  });
});

test('/project/package.zip exists', function (t) {
  t.plan(1);

  fs.exists('/project/package.zip', function(exists) {
    t.ok(exists);
  });
})
