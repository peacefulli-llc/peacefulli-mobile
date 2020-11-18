# Peacefulli


## Prerequisites

* Contact Aleyah Ewing or Daeton Den to create a peacefulli email address
* Install [VS Code](https://code.visualstudio.com/download)
* Install [git](https://git-scm.com/)
  * Setup your config name and email `$ git config --global user.name "First Last" $ git config --global user.email "firstlast@peacefulli.com"`
* Install [credential helper](https://www.atlassian.com/git/tutorials/install-git)
* Install [node.js](https://nodejs.org/en/)
* Install watchman `brew install watchman`
* Install Expo `$ npm install --global expo-cli`
* Install Yarn `$ brew install yarn`
* Bookmark the [Jira Kanban](https://peacefulli.atlassian.net/wiki/spaces/PM/overview) board

## Development Cycle

In order to keep the code organized please develop on a new branch. The branch name should summarize the name of the feature you're introducing. 
Please refer to the "Code Review" section to know how to get your changes into the development branch. The development branch is the main branch
used for testing all of our code. After thorough testing, the changes in development will be promoted to the mainline branch. Mainline is the 
production branch, this branch should always be kept as clean as possible as not to introduce any bugs to the users!

## Local Development

Here is how get started developing locally
* Checkout the peaceful-mobile repository
* Install all required packages `$ yarn install`
* Run `$ expo start` or `$ npm start`
* On the left hand nav, run the app on your desired simulator
* To develop on a physical device install the expo app and scan the QR code from the terminal or left hand nav of your expo developer

## Code Review

* Submit your code to a new branch
* Submit a pull request into development branch
* Above the list of files, click  Pull request.
* Obtain at least 1 ship it 
* Merge code into development
