# Components

This branch contains all the components the Cookbook App will be rendering and displaying.

## How to contribute

### Instalation

1. Clone or fork the repo
2. Change your branch to `components` with `git checkout components`
3. Install the dependencies with `npm i` or `npm install`. We use `npm` and not `yarn` as a standard, so please if you use the latter, delete the `lock` file it creates

### Develop your component

Under the `components` folder you'll find all the categories we currently have. If you think your component doesn't belong to any of those, feel free to create a new one. Keep in mind that each category is directly referenced in the navigation of the Cookbook.

Run the project with `npm run start` and go to `localhost:3000`. As in the Cookbook App, you'll need to pass down the query params `category` and `component` which they need to match with the component you want to see, for example:

`localhost:3000?category=buttons&component=button-1`

This URL will take the component `button-1` under the `buttons` category.

As in the Cookbook, the styles of the component are scoped under the component itself so you won't be able to use any global style or class.

### Important

Before your commit is made, the husky hook will create a `styles.css` file that will be the one used in the app to show your component.
