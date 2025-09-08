/**
 * @fileoverview Integration tests for the main module
 * Tests the overall functionality and module exports
 */

import {describe, it, expect, vi} from 'vitest';
import {hello, main} from './index.js';

describe('main module', () => {
  describe('hello export', () => {
    it('should export the hello function', () => {
      expect(typeof hello).toBe('function');
      expect(hello('Test')).toBe('Hello, Test!');
    });
  });

  describe('main function', () => {
    it('should execute without errors', () => {
      // Mock console.log to capture output
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      expect(() => main()).not.toThrow();

      // Verify console.log was called with expected message
      expect(consoleSpy).toHaveBeenCalledWith('Hello, World!');

      // Restore console.log
      consoleSpy.mockRestore();
    });
  });
});
