import { describe, test, expect } from '@jest/globals';
import { getVersion } from './index';

describe('HootSim', () => {
  describe('getVersion', () => {
    test('should return the correct version', () => {
      const version = getVersion();
      expect(version).toBe('1.0.0');
      expect(typeof version).toBe('string');
    });
  });
});
