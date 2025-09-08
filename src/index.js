#!/usr/bin/env node

/**
 * Main entry point for the JavaScript Template project
 * Demonstrates ESM module usage and clean code practices
 */

import {hello} from './lib/greeter.js';

/**
 * Main function that demonstrates the template functionality
 * @returns {void}
 */
function main() {
  const message = hello('World');
  console.log(message);
}

// Run the main function if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {hello, main};
export default {hello, main};
