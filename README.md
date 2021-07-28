# snapshot-ui

This repo contains the Mobile and Web Snapshot UI.

## Structure

This package utilizes yarn workspaces with subpackages located in the `/packages`
folder. The root of this project is configured to render React Native
Storybook with "on device" component stories.

For documentation on the subpackages, see those packages directly.

### Why Yarn Workspaces?

The workspaces setup allows us to document and test our components for both
React Native and React Web. It is required because Storybook for React Native
needs to work with a different version of the `@storybook` package than
Storybook for Web. In order to facilitate this, the root of this package
installs the necessary packages to run React Native Storybook. The subpackages
can then install different versions of `@storybook`, enabling the Storybook
for Web UI. Unfortunately, the React Native Storybook is not able to compile
files above it's `package.json` file which is why it cannot be placed as a
subpackage next to (or inside) `snapshot-ui`.

## Setup

    > yarn install
    > cd packages/snapshot-ui
    > yarn start

## Available Commands

- `yarn storybook` Start the React Native on device Storybook.
- `yarn validate` Validate the project on a CI environment (ie. run tests and builds).

