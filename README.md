# AZA Mobile App

## Setup

- Make sure you have Node.js installed
- Install expo cli with `npm install -g expo-cli`, you can check the documentation [here](https://docs.expo.dev/workflow/expo-cli/)
- Add your ssh public key to your azure account, don't add any passpharse when generating your ssh key!
- Clone this repository using the ssh option
- Go to project's root directory and run `expo start`
- Download the Expo Go app from App Store or Playstore link [here](https://expo.dev/client)
- Scan the QR code and you're good to go

## Dependecies

- [React Native](https://expo.dev)
- [Expo](https://expo.dev)

## Build and Test

TODO: Describe and show how to build your code and run the tests.

### Test

#### Frameworks

- Unit testing
  - [Jest](https://jestjs.io/)
- End to End testing
  - [Detox](https://github.com/wix/Detox#readme)
  - [Getting started with Detox](https://wix.github.io/Detox/docs/introduction/getting-started/)

#### Runnnig

`yarn e2e:ios` for IOS debug

`yarn e2e:android` for Android debug

`yarn e2e:android-release` use release to run app in release mode

## Important!

- Project uses yarn as package manager!
- Push new code only to feature branches!
- Install the recommended extensions by vs code in extension.json
- Regularly run Type checking task in vscode by double clicking shift key and typing ">" then select Run task "Type Checking"
- Don't stage non compiling code e.g code editor configs...
