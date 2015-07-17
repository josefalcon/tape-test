var test = require('tape');
var library = require('../library');
var request = require('request');

test('zero area', function (t) {
  t.plan(1);
  t.equal(library.area(0), 0);
});

test('prevent a network call', function (t) {
  request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      t.fail('successfully made a network call');
    } else {
      t.ok('prevented a network call');
    }
    t.end();
  });
});
