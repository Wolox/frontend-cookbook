# Frontend Cookbook

## Cookbooks

* [React](/cookbook-react)
* [React Native](/cookbook-react-native)
* [Web](/cookbook-web)

## Getting started

Add a `.env.development` file under `/app` with the following content:

```
REACT_APP_RECIPES_BRANCH=XXXX
REACT_APP_GITHUB_TOKEN=XXXX
```

Where `REACT_APP_RECIPES_BRANCH` is the name of a remote branch, you can try with `master`, and `REACT_APP_GITHUB_TOKEN` is a [github personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).

Install dependencies:

`npm install`

To start the server by default (development) move to `/app` and run:

`npm run start`

### New Cookbook

To add a new cookbok create a `cookbook-XXX` folder where `XXX` would be the TECH name. And add a `recipes` folder inside. You can crete a base project inside to help our collaborators to test future recipes.

### New recipe

To add a new recipe, you need to define the recipe category first. For example, `button-1` category would be `buttons`.

Under you cookbook folder, if doesn't exist already, create yor category folder, and inside your category folder create your recipe folder. Remember to check for existing categories names before to avoid having several categories with similars names!

Now that you have your own recipe, you can add inside a `cookbook.json` file with the following content:

```
{
  "thumbnail": {
    "type": "img" | "iframe",
    "url": URL
  },
  "detail": {
    "type": "img" | "iframe",
    "url": URL
  }
}
```

That url and type would be used to render and iframe with a web component or an illustrtive image (jpg, png or gif).

If there isn't a `cookbook.json` with that content in your recipe, it would show a fragment of you recipe `readme.md`. Be sure to always add one!

So, if we add a `button-1` recipe to `cookbook-react`, the project tree jerarchy should look like this:

```
frontend-cookbook/
|_ cookbook-react/
  |_ recipes/
    |_ buttons/
      |_ button-1/
        |_ cookbook.json
        |_ readme.md
```

Thanks for your time!
