import _omit from 'lodash/omit';

const foo = _omit({
  a: 1,
  b: 2,
  c: 3
}, ['a']);

export default foo;