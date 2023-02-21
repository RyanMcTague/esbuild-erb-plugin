import { Greeter } from "../index";
import { test, expect } from '@jest/globals';

test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});