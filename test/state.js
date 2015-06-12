'use strict';
var stampit = require('../stampit'),
  test = require('tape');

// .state alias

test('stampit().fixed.state is same as refs', function (t) {
  var stamp = stampit({ refs: { s: 1 } });

  t.equal(stamp.fixed.refs, stamp.fixed.state, 'stamp.fixed.refs === stamp.fixed.state');

  t.end();
});

test('stampit().state().fixed.state is same as refs().fixed.refs', function (t) {
  var stamp = stampit({ refs: { s: 1 } }).state({ refs: { s2: 2 } });

  t.equal(stamp.fixed.refs, stamp.fixed.state, 'stamp.fixed.refs === stamp.fixed.state');
  t.equal(stamp.fixed.refs.s, stamp.fixed.state.s, 'stamp.fixed.refs.nested === stamp.fixed.refs.nested');
  t.equal(stamp.fixed.refs.s2, stamp.fixed.state.s2, 'stamp.fixed.refs.nested2 === stamp.fixed.state.nested2');

  t.end();
});

test('stampit.compose().fixed.state is same as refs', function (t) {
  var stamp = stampit({ refs: { s: 1 } }).compose(stampit({ refs: { s2: 2 } }));

  t.equal(stamp.fixed.refs, stamp.fixed.state, 'stamp.fixed.refs === stamp.fixed.state');

  t.end();
});

test('stampit.convertConstructor().fixed.state is same as refs', function (t) {
  function F(){}
  var stamp = stampit.convertConstructor(F);

  t.equal(stamp.fixed.refs, stamp.fixed.state, 'stamp.fixed.refs === stamp.fixed.state');

  t.end();
});
