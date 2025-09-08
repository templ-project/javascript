/**
 * Greeter module - demonstrates clean function design and JSDoc documentation
 * Following Google JavaScript Style Guide conventions
 */

/**
 * Creates a greeting message for the specified name
 *
 * @param {string} name - The name to greet
 * @returns {string} A formatted greeting message
 * @throws {Error} When name is not provided or is not a string
 *
 * @example
 * const message = hello('World');
 * console.log(message); // "Hello, World!"
 *
 * @example
 * const message = hello('JavaScript');
 * console.log(message); // "Hello, JavaScript!"
 */
export function hello(name) {
  if (!name || typeof name !== 'string') {
    throw new Error('Name must be a non-empty string');
  }

  return `Hello, ${name.trim()}!`;
}

/**
 * Creates a farewell message for the specified name
 *
 * @param {string} name - The name to bid farewell
 * @returns {string} A formatted farewell message
 * @throws {Error} When name is not provided or is not a string
 *
 * @example
 * const message = goodbye('World');
 * console.log(message); // "Goodbye, World!"
 */
export function goodbye(name) {
  if (!name || typeof name !== 'string') {
    throw new Error('Name must be a non-empty string');
  }

  return `Goodbye, ${name.trim()}!`;
}

export default {hello, goodbye};
