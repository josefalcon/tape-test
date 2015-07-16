var test = require('tape');
var library = require('../library');

test('zero area', function (t) {
  t.plan(1);
  t.equal(library.area(0), 0);
});
