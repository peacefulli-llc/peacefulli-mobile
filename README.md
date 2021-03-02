# Peacefulli

## Prerequisites

- Contact your manager to create a peacefulli email address
- Install [VS Code](https://code.visualstudio.com/download)
- Install [git](https://git-scm.com/)
- From your copy of the repository, set up your config name and email
  - `$ git config user.name "First Last"`
  - `$ git config user.email "first.last@peacefulli.com"`
- Install [credential helper](https://www.atlassian.com/git/tutorials/install-git)
- Install [node.js](https://nodejs.org/en/)
- Install [homebrew](https://brew.sh/)
- Install watchman `$ brew install watchman`
- Install Expo `$ npm install --global expo-cli`
- Install Yarn `$ brew install yarn`
- Bookmark the [Jira Kanban](https://peacefulli.atlassian.net/wiki/spaces/PM/overview) board

## Development Cycle

In order to keep the code organized please develop on a new branch. The branch name should summarize the name of the feature you're introducing.

Please refer to the [Code Review](#code-review) section to know how to get your changes into the `development` branch. The `development` branch is the main branch used for testing all of our code. After thorough testing, the changes in development will be promoted to the mainline branch. Mainline is the production branch, this branch should always be kept as clean as possible as not to introduce any bugs to the users!

## Local Development

Here is how get started developing locally

- Checkout the peaceful-mobile repository
- Install all required packages `$ yarn install`
- Run `$ npm start` or `$ yarn start`
- On the left hand nav, run the app on your desired simulator
- To develop on a physical device install the expo app and scan the QR code from the terminal or left hand nav of your expo developer

## Unit Tests

Run `$ npm test` or `$ yarn test` to run local unit tests. To update the snapshots run `yarn test -u`.

## Code Review

- Submit your code to a new branch
- Submit a pull request into development branch
- Above the list of files, click Pull request.
- Obtain at least 1 ship it
- Merge code into development
