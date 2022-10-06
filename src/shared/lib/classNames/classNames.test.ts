import { classNames } from './classNames';

describe('className', () => {
  test('only first params', () => {
    const expected = 'cls';
    expect(classNames('cls', {}, [])).toBe(expected);
  });

  test('with additional classes', () => {
    const expected = 'cls class1 class2';
    expect(classNames('cls', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'cls class1 class2 hovered focused';
    expect(classNames(
      'cls',
      { hovered: true, focused: true },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'cls class1 class2 hovered';
    expect(classNames(
      'cls',
      { hovered: true, focused: false },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'cls class1 class2 hovered';
    expect(classNames(
      'cls',
      { hovered: true, focused: undefined },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });
});
