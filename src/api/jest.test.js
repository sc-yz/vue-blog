const dabaojian = require('./jest');
const { dabaojian1, dabaojian2 } = dabaojian;

test('大保健1', () => {
  expect(dabaojian1(220)).toBe('至尊享受');
});

test('大保健2', () => {
  expect(dabaojian2(100)).toBe('单飞');
});
