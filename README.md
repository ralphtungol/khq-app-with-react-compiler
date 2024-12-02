# khq-app-with-react-compiler

## Prerequisites

Have your local NPM setup for KUBRA (https://kubra.jira.com/wiki/spaces/FG/pages/49643564/Local+NPM+setup)

Run `npm install` if it's the first time you're running the project.

> You may need to reach out to Platform 2 team to get permissions for local development.

## Commands

`npm start` -- To run the project.

`npm run test` -- To run test suites.

`npm run test:watch` -- To run tests in watch mode.

`npm run test:coverage` -- To run tests with covarage information.

`npm run build` -- To build the project.

`npm run lint` -- To run ESLint for static analysis.

`npm run prettier` -- To run Prettier for all project files.

## Dependencies

- [kubra-ui-lib-auth](https://github.com/iFactor/kubra-ui-lib-auth) to support authentication and authorization
- [kubra-ui-lib-mfe](https://github.com/iFactor/kubra-ui-lib-mfe) for common code and types used by KUBRA MFE projects
- [React Router](https://reactrouter.com/en/main) for client side routing
- [kubra-ux-forge](https://github.com/iFactor/kubra-ux-forge) KUBRA's reusable React components. See [storybook website](http://kubra-ux-forge.kubra.io.s3-website-us-east-1.amazonaws.com/) for demos and more information on the components available. See [the library docs](https://github.com/iFactor/kubra-ux-forge#using-the-library) for details on how to use the library
- [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [Mock Service Worker](https://mswjs.io/) for testing
- [Analytics](https://github.com/iFactor/kubra-ui-lib-mfe/blob/main/docs/hooks/USE_ANALYTICS.md), [React Tracking](https://github.com/iFactor/kubra-ui-lib-mfe/blob/main/docs/hooks/USE_KUBRA_TRACKING.md) for analytics
- [ESLint](https://eslint.org/docs/latest/user-guide/getting-started) for static analysis
- [react-query](https://tanstack.com/query/latest/docs/framework/react/overview) for fetching, caching, synchronizing and updating server state
- [Hey-Api](https://heyapi.vercel.app/) for types and services generation

## Deployment

See [Deploying to KHQ](https://kubra.jira.com/wiki/spaces/FG/pages/150536197/DRAFT+-+Deploying+to+KHQ) for details on how the deployment is configured

## Documentation

[Micro Frontend Documentation](https://kubra.jira.com/wiki/spaces/FG/pages/187367577)

## FAQ

#### How to change the port used when running the project locally

Change the environment variable PORT defined in the `start` script in the `package.json` file.

For example, to run the project using port 3002 you can update `package.json` as follows:

```json
{
  "scripts": {
    "start": "cross-env NODE_ENV=development REACT_APP_ENV=local PORT=3002 webpack serve --open --env webpackEnv=development"
  }
}
```
