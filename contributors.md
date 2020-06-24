# Contributing to Wolox Cookbook

🎉 Thanks for taking the time to contribute! 🎉

## How Can I Contribute?

### New Cookbook

To add a new cookbook create a `cookbook-xxx` folder where `xxx` would be the TECH name, then add a `recipes` folder inside.

You can create a base project inside to help our collaborators to develop future recipes, as long as it has a `recipes` folder.

And don't forget to link the new tech to this [readme](./readme.md)!

### New recipe

To add a new recipe, you need to define the recipe category first. For example, `button-1` category would be `buttons`.

Under you cookbook folder, if doesn't exist already, create your category folder, and inside your category folder create your recipe folder. Remember to check for existing categories names before to avoid having several categories with similars names!

Now that you have your own recipe, you can add a `cookbook.json` file with the following content:

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

That url and type would be used to render an iframe with a web component or an illustrative image (jpg, png or gif).

If there isn't a `cookbook.json` with that content in your recipe, it would show a fragment of your recipe `readme.md`. Be sure to always add one!

So, if we add a `button-1` recipe to `cookbook-react`, the project tree hierarchy should look like this:

```
wolox-cookbook/
|_ cookbook-react/
  |_ recipes/
    |_ buttons/
      |_ button-1/
        |_ cookbook.json
        |_ readme.md
```
