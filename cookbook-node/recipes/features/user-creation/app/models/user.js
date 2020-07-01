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
