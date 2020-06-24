# Wolox Cookbook

## Cookbooks

* [React](/cookbook-react)
* [React Native](/cookbook-react-native)
* [Web](/cookbook-web)

## Getting started

### Running locally

Add a `.env.development` file under `/app` with the following content:

```
REACT_APP_RECIPES_BRANCH=XXXX
REACT_APP_GITHUB_TOKEN=XXXX
```

Where `REACT_APP_RECIPES_BRANCH` is the name of a remote branch (e.g. `master`) and `REACT_APP_GITHUB_TOKEN` is a [Github personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).

Then move to `/app` and install dependencies running:

`npm install`

To start the server by default (development) run:

`npm run start`

Is important to remember that you would run `REACT_APP_RECIPES_BRANCH` remote branch. So remember to push your changes and update your `env` file.

## Contributing

Check our [contributors](./contributors.md) file and thanks for your time! 💙💚
