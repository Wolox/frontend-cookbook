# nodeJS-utils

## Usage

By doing a simple POST to {API_URL}/api/v1/users (or the model that you defined) with the params as follows:

``` js
{
  address:"1279 Ohri Loop"
  birthDate:"2072-10-19T17:21:03.947Z"
  city:"Miozun"
  country:"PS"
  email:"kowi@wolox.com.ar"
  emailSubscription:true
  id:1
  name:"Helen"
  numberOfLanguages:8
  password:"somePassword"
  state:"NM"
  type:"regular"
}
```
You'll receive as a response the following:

```js
{
  address:"1279 Ohri Loop"
  birthDate:"2072-10-19T17:21:03.947Z"
  city:"Miozun"
  country:"PS"
  createdAt:"2020-06-29T13:15:51.533Z"
  email:"kowi@wolox.com.ar"
  emailSubscription:true
  id:1
  name:"Helen"
  numberOfLanguages:8
  password:"$2b$10$1XP1EjS35e7wr29Mz1Bx0.tPF9Me6L30.5MQcgEp5NrzcCxwLETfe"
  state:"NM"
  type:"regular"
  updatedAt:"2020-06-29T13:15:51.533Z"
}
```
With status code: 201 (created)

## Model Creation Endpoint

We'll be using a User model  as an example to show the code's functionality.

### Migrations

We'll start by creating a simple migration to create our model as follows:

``` js
/* eslint-disable new-cap */

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      type: {
        type: Sequelize.ENUM('regular', 'admin'),
        defaultValue: 'regular'
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birth_date: {
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      email_subscription: {
        type: Sequelize.BOOLEAN
      },
      number_of_languages: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),

  down: queryInterface => queryInterface.dropTable('users')
};
```

### Model

Having our model created in the DB, We'll define it in our App:

``` js
/* eslint-disable new-cap */
const userTypes = ['regular', 'admin'];

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: 'The email provided has an incorrect format'
          }
        },
        unique: {
          msg: 'The email provided is already in use'
        }
      },
      type: {
        type: DataTypes.ENUM(userTypes),
        defaultValue: 'regular'
      },
      birthDate: {
        type: DataTypes.DATE
      },
      country: { type: DataTypes.STRING },
      state: { type: DataTypes.STRING },
      city: { type: DataTypes.STRING },
      address: { type: DataTypes.STRING },
      emailSubscription: { type: DataTypes.BOOLEAN },
      numberOfLanguages: { type: DataTypes.INTEGER }
    },
    {
      underscored: true
    }
  );
  return User;
};
```

### Endpoint

To declare the endpoint we'll define it as follows:

``` js
const URL = '/api/v1';

exports.init = app => {
  app.post(
    `${URL}/users`,
    paramsValidator.validateSchemaAndFail(schemas.users.create),
    usersController.createUser
  );
};

```

The first parameter contains the route
The second parameter contains all middlewares that will run before we reach the controller. In this case we are going to validate the parameters we'll be receiving.
The third parameter contains the logic that will be run from the controller.

The complete route will be a POST on /api/v1/users

### Controller

The controller's only function is to call the services that will run to create our model.
Here we are using 3. Bcrypt for crypting hashes, a params mapper and the user service to create the model.

``` js
const usersService = require('../services/users');
const userMapper = require('../mappers/user');
const bcrypt = require('../services/bcrypt');

exports.createUser = (req, res, next) =>
  bcrypt
    .crypt(req.body.password)
    .then(hash => userMapper.create(req.body, hash))
    .then(mapped_body => usersService.createUser(mapped_body))
    .then(user => res.status(201).send(user))
    .catch(error => next(error));

```

### Mappers

This mapper will only translate the params received to a format that our API can understand:

``` js
exports.create = (params, hash) => ({
  name: params.name,
  birthDate: params.birth_date,
  password: hash,
  email: params.email,
  type: params.type,
  country: params.country,
  state: params.state,
  city: params.city,
  address: params.address,
  emailSubscription: params.email_subscription,
  numberOfLanguages: params.number_of_languages
});
```

### Service

And finally, creating the model:

``` js
const errors = require('../errors');
const logger = require('../logger');
const { User } = require('../models');

exports.createUser = data => {
  logger.info('Create User: ', data);

  return User.create(data).catch(error => {
    logger.error(error);
    throw errors.invalidParams(error.message);
  });
};

```

### Params

Here we have a small definition and example of the params that the endpoint will receive:

``` js
name: {
  type: 'string',
  example: 'Tom Engels'
},
email: {
  type: 'string',
  example: 'tom.engels@wolox.com.ar'
},
birthDate: {
  type: 'date',
  example: '1996-05-04'
},
password: {
  type: 'string',
  example: 'dvr6ergv1dgv56s4f65sd1sfdfvs6ds65d5s65vs6d5s6dfvs6d5fv6s5dfv6s56df5s6dbtsy5s5yns6ynns32nys3'
},
type: {
  type: 'enum',
  example: 'regular'
},
country: {
  type: 'string',
  example: 'Argentina'
},
state: {
  type: 'string',
  example: 'Buenos Aires'
},
city: {
  type: 'string',
  example: 'Lomas de Zamora'
},
address: {
  type: 'string',
  example: 'Calle Falsa 1234'
},
emailSubscription: {
  type: 'boolean',
  example: true
},
numberOfLanguages: {
  type: 'integer',
  example: 5
}
```

## Responses

If we use the following params: 

``` js
{
  address:"1279 Ohri Loop"
  birthDate:"2072-10-19T17:21:03.947Z"
  city:"Miozun"
  country:"PS"
  email:"kowi@wolox.com.ar"
  emailSubscription:true
  id:1
  name:"Helen"
  numberOfLanguages:8
  password:"somePassword"
  state:"NM"
  type:"regular"
}
```

When we have a successful scenario, we'll receive:

HTTP Status Code: 201 (created)
Body: 

```js
{
  address:"1279 Ohri Loop"
  birthDate:"2072-10-19T17:21:03.947Z"
  city:"Miozun"
  country:"PS"
  createdAt:"2020-06-29T13:15:51.533Z"
  email:"kowi@wolox.com.ar"
  emailSubscription:true
  id:1
  name:"Helen"
  numberOfLanguages:8
  password:"$2b$10$1XP1EjS35e7wr29Mz1Bx0.tPF9Me6L30.5MQcgEp5NrzcCxwLETfe"
  state:"NM"
  type:"regular"
  updatedAt:"2020-06-29T13:15:51.533Z"
}
```

If anything should go wrong, we'll receive an error code indicating the situation along with the message indicating the error. For example:

``` js
{
  code: 400
  internal_code: 'Invalid parameters',
  message: 'The email provided is already in use'
}
```
