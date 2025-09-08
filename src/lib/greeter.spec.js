/**
 * @fileoverview Test suite for the greeter module
 * Demonstrates TDD practices using Vitest testing framework
 */

import {describe, it, expect} from 'vitest';
import {hello, goodbye} from './greeter.js';

describe('greeter module', () => {
  describe('hello function', () => {
    it('should return a greeting message for a valid name', () => {
      const result = hello('World');
      expect(result).toBe('Hello, World!');
    });

    it('should handle names with extra whitespace', () => {
      const result = hello('  JavaScript  ');
      expect(result).toBe('Hello, JavaScript!');
    });

    it('should throw an error for empty string', () => {
      expect(() => hello('')).toThrow('Name must be a non-empty string');
    });

    it('should throw an error for null', () => {
      expect(() => hello(null)).toThrow('Name must be a non-empty string');
    });

    it('should throw an error for undefined', () => {
      expect(() => hello(undefined)).toThrow('Name must be a non-empty string');
    });

    it('should throw an error for non-string types', () => {
      expect(() => hello(123)).toThrow('Name must be a non-empty string');
      expect(() => hello({})).toThrow('Name must be a non-empty string');
      expect(() => hello([])).toThrow('Name must be a non-empty string');
    });
  });

  describe('goodbye function', () => {
    it('should return a farewell message for a valid name', () => {
      const result = goodbye('World');
      expect(result).toBe('Goodbye, World!');
    });

    it('should handle names with extra whitespace', () => {
      const result = goodbye('  JavaScript  ');
      expect(result).toBe('Goodbye, JavaScript!');
    });

    it('should throw an error for empty string', () => {
      expect(() => goodbye('')).toThrow('Name must be a non-empty string');
    });

    it('should throw an error for null', () => {
      expect(() => goodbye(null)).toThrow('Name must be a non-empty string');
    });

    it('should throw an error for undefined', () => {
      expect(() => goodbye(undefined)).toThrow('Name must be a non-empty string');
    });

    it('should throw an error for non-string types', () => {
      expect(() => goodbye(123)).toThrow('Name must be a non-empty string');
      expect(() => goodbye({})).toThrow('Name must be a non-empty string');
      expect(() => goodbye([])).toThrow('Name must be a non-empty string');
    });
  });
});
