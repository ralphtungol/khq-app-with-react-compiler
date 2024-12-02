import "@testing-library/jest-dom";
import React, { ReactNode } from "react";
import { memoryAnalyticsStore } from "../test-utils";
import { server } from "../../src/api-mocks/msw-server";
import { user } from "../../src/__mocks__/user";
import { ClientProvider } from "kubra-ui-lib-auth";

// kubra-ui-lib-auth mock
// Add more functions to the mock as needed for your app
jest.mock("kubra-ui-lib-auth", () => ({
  __esModule: true,
  ...jest.requireActual("kubra-ui-lib-auth"),
  useAuthManager: () => ({
    getRequestHeaders: async () => Promise.resolve({}),
    getAccessTokenSilently: async () => Promise.resolve("accessToken"),
    user,
    getTokens: async () =>
      Promise.resolve({
        accessToken: "accessToken",
        idToken: "idToken",
      }),
  }),
  AuthProvider: ({ children }: { children: ReactNode }) => (
    <ClientProvider>{children}</ClientProvider>
  ),
}));

// This project uses Mock Service Worker (msw) to mock
// network requests.
// https://mswjs.io/docs/getting-started/integrate/node

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  memoryAnalyticsStore.clear();
});

// Clean up after the tests are finished.
afterAll(() => server.close());
