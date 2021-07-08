# snapshot-ui

The Mobile and Web Snapshot UI

## Tools and Frameworks

This UI is built using React Native with Expo in order to support cross
browser development and deployment to iOS, Android and web. It includes
the following tools and frameworks:

- Yarn for package management
- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.io/) for cross device development environment and libraries
- [Auth0](https://auth0.com/) for authentication
- [Firebase](https://firebase.google.com/) for data integration
- [React Navigation](https://reactnavigation.org/) navigation/routing library
- [Emotion](https://emotion.sh/docs/introduction) CSS in JS tooling

## Install

    git clone git@github.com:Apartment-Snapshot/snapshot-ui.git
    cd snapshot-ui
    yarn install
    yarn global install expo-cli

If you do not want to install the expo-cli globally, you can always install
it locally and the prefix any expo commads with `npx`.

    npx expo start

## Expo Setup

Some features of this project (specifically authentication during development)
require you to have an Expo account and to be
logged in. To do this, simply create an Expo account for yourself at (https://expo.io/).

You can then login from the commandline using:

    expo login

## Available Commands

The following commands are available through yarn:

- `yarn start` Start the Expo development environment

## Debugging the Simulator

You can open Chrome DevTools to debug the code running in the iOS or Android simulators
by opening the Expo menu (ctrl + command + Z in the iOS simulator) and the clicking the
"Debug JS Remotely" menu item.

More debugging information can be found here (https://docs.expo.io/workflow/debugging/)

