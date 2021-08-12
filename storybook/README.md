# snapshot-ui-storybook

This subpackage is used to build the Storybook environment for native devices.
It is a simplified version of our component Storybook without full documentation.
This storybook environment can be run on a native device or simulator in order
to test the native versions of our compontents.

## Usage

    yarn storybook

To run the native storybook, you can run `yarn storybook` when inside of this
folder. Additionally, you can run `yarn storybook:native` from within the
root of the project or the `app/` directory.

## Why a dedicated subpackage

React Native Storybook runs on an older version of Storybook than the version
included in the `app/` package. In order to support the ability to run an up-to-date
Storybook with full documentation AND a version that can run on native devices,
it is necessary to install multiple versions of `@storybook/core`. This is acheived
by using Yarn workspaces and installing the older version of Storybook in this
subpackage.
