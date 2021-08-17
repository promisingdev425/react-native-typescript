# snapshot-ui

[![CircleCI](https://circleci.com/gh/Apartment-Snapshot/snapshot-ui/tree/main.svg?style=svg)](https://circleci.com/gh/Apartment-Snapshot/snapshot-ui/tree/main)

This repo contains the Mobile and Web Snapshot UI. It is built with
Expo for mobile and web deployment and with Storybook for component
documentation. See the `app/` folder for more detailed information
about the project.

## Setup

    > yarn install
    > cd app/
    > yarn start

## Available Commands

- `yarn start` Start the app with live APIs.
- `yarn start:mock` Start the app with mock APIs.
- `yarn storybook` Start the full Storybook with web components and documentation.
- `yarn storybook:native` Start the simplified Storybook that runs on native devices and simulators.
- `yarn test` Run the tests.
- `yarn lint` Lint the code.
- `yarn validate` Validate the project on a CI environment (ie. run tests and builds).

> When switching between native builds (ex. `yarn start` and `yarn storybook`), you
> may find the simulator fails to refresh. You can use `Cmd + Shift + z` to open
> the Expo menu on the simulator and then click "Reload" to force a refresh of the app.

## Project Structure

This project uses a non-standard folder layout in order to support
building separate Storybook environments for web and native. During
development, you can work directly within the `app/` folder as if it were
a standard React Native project.

### Tell me more...

This project utilizes Yarn workspaces with subpackages located in the
`app/` and `storybook/` folders. The `app/` directory is the main source
directory for the application. During development, you can run the main
development yarn commands from either the project root or from within
the `app/` directory.

The `storybook/` subpackage is used to build an on device version of our
storybook. This separate package is required because `@storybook/react-native`
depends on an older version of `@storybook/core` than our primary storybook
environment. Utilizing Yarn workspaces allows us to install both versions
of `@storybook` dependencies. You should never need to work within the
`storybook/` folder as the `yarn storybook:native` commands are available
within the project root and `app/` subpackage.

For further documentation on the individual subpackages, see those packages directly.

