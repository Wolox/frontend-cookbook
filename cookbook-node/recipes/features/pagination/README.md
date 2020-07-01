# nodeJS-utils

## Usage

By doing a simple GET on {API_URL}/api/v1/users with no query params, you'll get the default limit from pagination node and the first page of the model based on the limit. If we have 5 users created the response we'll get would look as follows:

```js
  count:5
  current_page:1
  next_page:null
  next_page_url:null
  page:[{id: 1, name: "Bernice", password: "DMSKxvNq", …}, {id: 2, name: "Logan", password: "pYnqEjSQ", …}, …]
  length:5
  previous_page:null
  previous_page_url:null
  total_count:5
  total_pages:1
}
```

We can also set the page and limit as follows: {API_URL}/api/v1/users?limit=40&page=2

## Model Indexing Endpoint

We'll be using a User model  as an example to show the code's functionality.

### Endpoint

To declare the endpoint we'll define it as follows:

``` js
const URL = '/api/v1';

exports.init = app => {
  app.get(`${URL}/users`, usersController.getUsers);
};

```

The first parameter contains the route
The second parameter contains the logic that will be run from the controller.

The complete route will be a GET on /api/v1/users

### Controller

The controller's only function is to call the services that will run to list our model.
Here we are using just one, the model's service.

``` js
const usersService = require('../services/users');

exports.getUsers = (req, res, next) =>
  usersService
    .getUsers(req.headers.page, req.headers.limit, req)
    .then(users => res.send(users))
    .catch(error => next(error));

```

### Service

In the user's service we'll be using one of wolox's own tools of pagination: pagination-node

``` js
const nodePagination = require('@wolox/pagination-node');
const errors = require('../errors');
const { User } = require('../models');

exports.getUsers = (page, limit, request) =>
  User.findAll({ where: request.query || {} })
    .then(users =>
      nodePagination.paginate(users, request, {
        page,
        limit
      })
    )
    .catch(err => {
      throw errors.databaseError(err);
    });

```

Pagination-Node will take care of all the logic behind paginating the result of the query, we will only find them.

### Params

Headers: 

- page: The page of results we want to receive
- limit: The amount of results we want to see in one page.

Query: 

We can send any column corresponding to our model to filter the results.

### Responses

The scheme of a successful response is defined as follows:


HTTP Status Code: 200 (Ok)

    - `page: Array` (The resulting paginated objects)
    - `count: Number` (The total ammount of objects in the current page)
    - `total_pages: Number` (Describes the total ammount of pages calculated, based in the total of objects sent to the paginator, and the requested limit)
    - `total_count: Number` (The total amount of objects that the paginator received)
    - `previous_page: Number` (The number of the previous page. Will be null if there's nothing to show)
    - `current_page: Number` (The number of the current page that is being shown)
    - `next_page: Number` (The number of the next page. Will be null if there's nothing to show)
    - `previous_page_url: String url` (A string url that leads to the previous page. Will be null if there's nothing to show)
    - `next_page_url: String url` (A string url that leads to the next page. Will be null if there's nothing to show)
   

### Example


By doing a simple GET on {API_URL}/api/v1/users with no query params, you'll get the default limit from pagination node and the first page of the model based on the limit. If we have 5 users created the response we'll get would look as follows:

```json
{
      page: [
        {
          id: 1,
          name: 'Manuel',
          password: 'qvzYZCYH',
          email: 'darivnu@wolox.com.ar',
          type: 'regular',
          birthDate: '2072-04-06T05:31:39.556Z',
          country: 'TH',
          state: 'WV',
          city: 'Gaweva',
          address: '1718 Jahu Center',
          emailSubscription: false,
          numberOfLanguages: 7,
          createdAt: '2020-06-23T15:48:14.118Z',
          updatedAt: '2020-06-23T15:48:14.118Z'
        },
        {
          id: 2,
          name: 'Susie',
          password: 'qvkSGkLy',
          email: 'muusaki@wolox.com.ar',
          type: 'regular',
          birthDate: '2030-12-30T05:38:47.947Z',
          country: 'FM',
          state: 'NY',
          city: 'Fuwlobci',
          address: '1656 Oghup Lane',
          emailSubscription: true,
          numberOfLanguages: 10,
          createdAt: '2020-06-23T15:48:14.118Z',
          updatedAt: '2020-06-23T15:48:14.118Z'
        },
        {
          id: 3,
          name: 'Ernest',
          password: 'OhQvSLLr',
          email: 'zu@wolox.com.ar',
          type: 'regular',
          birthDate: '2118-07-05T01:31:38.516Z',
          country: 'AE',
          state: 'OK',
          city: 'Tirasaz',
          address: '618 Ihebuw Street',
          emailSubscription: true,
          numberOfLanguages: 5,
          createdAt: '2020-06-23T15:48:14.118Z',
          updatedAt: '2020-06-23T15:48:14.118Z'
        },
        {
          id: 4,
          name: 'Ina',
          password: 'oVBASjDO',
          email: 'nifun@wolox.com.ar',
          type: 'regular',
          birthDate: '2113-01-21T01:50:00.130Z',
          country: 'CI',
          state: 'AL',
          city: 'Joiresij',
          address: '1945 Sehem Boulevard',
          emailSubscription: false,
          numberOfLanguages: 4,
          createdAt: '2020-06-23T15:48:14.118Z',
          updatedAt: '2020-06-23T15:48:14.118Z'
        },
        {
          id: 5,
          name: 'Dale',
          password: 'GdEyDBAD',
          email: 'pinobva@wolox.com.ar',
          type: 'regular',
          birthDate: '2109-06-04T22:09:59.981Z',
          country: 'ES',
          state: 'VT',
          city: 'Setufba',
          address: '1073 Ezorud Extension',
          emailSubscription: true,
          numberOfLanguages: 8,
          createdAt: '2020-06-23T15:48:14.118Z',
          updatedAt: '2020-06-23T15:48:14.118Z'
        }
      ],
      count: 5,
      total_pages: 1,
      total_count: 5,
      previous_page: null,
      current_page: 1,
      next_page: null,
      previous_page_url: null,
      next_page_url: null
}
```

If anything should go wrong, we'll receive an error code indicating the situation along with the message indicating the error. For example:

```json
{
  code: 400
  internal_code: 'database_error',
}
```

More information about the use of Pagination-Node can be found in: https://github.com/Wolox/pagination-node
