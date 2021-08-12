# snapshot-ui

[![CircleCI](https://circleci.com/gh/Apartment-Snapshot/snapshot-ui/tree/main.svg?style=svg)](https://circleci.com/gh/Apartment-Snapshot/snapshot-ui/tree/main)

The Mobile and Web Snapshot UI

## Tools and Frameworks

This UI is built using React Native with Expo in order to support cross
browser development and deployment to iOS, Android and web. It includes
the following tools and frameworks:

- Yarn for package management
- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.io/) for cross device development environment and libraries (web, iOS, Android)
- [Storybook](https://storybook.js.org/) for component development and documentation
- [Auth0](https://auth0.com/) for authentication
- [Firebase](https://firebase.google.com/) for data integration
- [React Navigation](https://reactnavigation.org/) navigation/routing library
- [Polp](https://plopjs.com/) For scaffolding/generating components

## Install

    git clone git@github.com:Apartment-Snapshot/snapshot-ui.git
    cd snapshot-ui/app
    yarn install
    yarn global install expo-cli

If you do not want to install the expo-cli globally, you can always install
it locally and the prefix any expo commads with `npx`.

    npx expo start

## Expo Setup

Some features of this project (specifically authentication during development)
require you to have an Expo account and to be
logged in. To do this, simply create an Expo account for yourself at https://expo.io/.

You can then login from the commandline using:

    expo login

## Available Commands

The following commands are available through yarn:

### Run

- `yarn start` Start the Expo development environment pointed at live APIs.
- `yarn start:mock` Start the Expo development environment configured to use mock data.
- `yarn web` Start Expo and launch the web version.
- `yarn web:mock` Start Expo and launch the web version in mock mode.
- `yarn ios` Start Expo and launch the ios version.
- `yarn ios:mock` Start Expo and launch the ios version in mock mode.
- `yarn android` Start Expo and launch the android version.
- `yarn android:mock` Start Expo and launch the android version in mock mode.

### Storybook

- `yarn storybook` Run the web storybook with full component documentation.
- `yarn storybook:native` Run the on device storybook without docs. Note that the
  "Web" option in the Expo UI will not work in this mode.

### Util

- `yarn generate` Generate a new component or page. Follow the instructions or read the
   Plop.js docs for more info.
- `yarn lint` Lint the code. This is also run during `yarn validate`.

### Build

- `yarn build:web` Build the production web version of the application
- `yarn build:ios` Build the production ios version of the application
- `yarn build:android` Build the production android version of the application
- `yarn clean` Remove all build artifacts.

### CI

- `yarn validate` Validate the build on a CI environment. This is also useful
  to run before opening a PR or merging to master.

## Debugging the Simulator

You can use Chrome DevTools to debug the code running in the iOS or Android simulators
by opening the Expo menu (ctrl + command + Z in the iOS simulator) and the clicking the
"Debug JS Remotely" menu item.

More debugging information can be found here https://docs.expo.io/workflow/debugging/

## Environment Files

This project uses [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv)
to provide `.env` files for environment variable definitions. You'll notice that the
env files are named slightly differently than the standard `dotenv-flow` naming. This
is done in order to support more environment names than just "development", "test" and
"production".

Here are the supported environments:

- `dev` Build the application to connect to local APIs.
  Equivalent to the standard "development" environment.
- `test` Equivalent to the standard test
- `mock` Build the application with mock data. This prevents the app from making
  any API requests.
- `state` Build the application to connect to the staging APIs.
- `prod` Build the application to connect to production APIs.
  Equivalent to the standard "production" environmnet.

