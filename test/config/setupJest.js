/**
 * @note The block below contains polyfills for Node.js globals
 * required for MSW to function when running JSDOM tests in Jest.
 * Jest + jsdom acts like a browser, but msw knows that you're
 * operating in a Node environment.
 * These HAVE to be require's and HAVE to be in this exact
 * order, since "undici" depends on the "TextEncoder" global API.
 *
 * https://mswjs.io/docs/migrations/1.x-to-2.x#requestresponsetextencoder-is-not-defined-jest
 * https://github.com/mswjs/msw/issues/1786#issuecomment-1782559851
 */
const { TextDecoder, TextEncoder, ReadableStream } = require("node:util");

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
  ReadableStream: { value: ReadableStream },
});

const { Blob, File } = require("node:buffer");
const { fetch, Headers, FormData, Request, Response } = require("undici");

Object.defineProperties(globalThis, {
  fetch: { value: fetch, writable: true },
  Blob: { value: Blob },
  File: { value: File },
  Headers: { value: Headers },
  FormData: { value: FormData },
  Request: { value: Request },
  Response: { value: Response },
});

export default {};
