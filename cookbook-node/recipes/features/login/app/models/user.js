module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: true,
      underscored: true
    }
  );
  return User;
};
