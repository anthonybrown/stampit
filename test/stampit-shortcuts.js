'use strict';
var stampit = require('../stampit'),
  test = require('tape');

// stampit.methods, stampit.refs, stampit.init, stampit.props

test('stampit.methods shortcut', function (t) {
  var methods = { method1: function(){} };
  var stamp1 = stampit({ methods: methods });
  var stamp2 = stampit.methods(methods);

  t.deepEqual(stamp1.fixed, stamp2.fixed, 'stampit({ methods: methods }) is equivalent to stampit.methods(methods)');

  t.end();
});

test('stampit.refs shortcut', function (t) {
  var refs = { method1: function(){} };
  var stamp1 = stampit({ refs: refs });
  var stamp2 = stampit.refs(refs);

  t.deepEqual(stamp1.fixed, stamp2.fixed, 'stampit({ refs: refs }) is equivalent to stampit.refs(refs)');

  t.end();
});

test('stampit.init shortcut', function (t) {
  var init = { method1: function(){} };
  var stamp1 = stampit({ init: init });
  var stamp2 = stampit.init(init);

  t.deepEqual(stamp1.fixed, stamp2.fixed, 'stampit({ init: init }) is equivalent to stampit.init(init)');

  t.end();
});

test('stampit.props shortcut', function (t) {
  var props = { method1: function(){} };
  var stamp1 = stampit({ props: props });
  var stamp2 = stampit.props(props);

  t.deepEqual(stamp1.fixed, stamp2.fixed, 'stampit({ props: props }) is equivalent to stampit.props(props)');

  t.end();
});

test('stampit.static shortcut', function (t) {
  var statics = { method1: function(){} };
  var stamp1 = stampit({ static: statics });
  var stamp2 = stampit.static(statics);

  t.deepEqual(stamp1.fixed, stamp2.fixed, 'stampit({ static: static }) is equivalent to stampit.static(static)');

  t.end();
});

test('stampit.static(arg1, arg2) shortcut', function (t) {
  var stamp1 = stampit.static({ foo: 1 }, { bar: '2' });

  t.equal(stamp1.foo, 1, 'static set via arg');
  t.equal(stamp1.bar, '2', 'static set via arg');

  t.end();
});
