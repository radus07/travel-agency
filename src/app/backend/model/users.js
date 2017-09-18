module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    username: {
      type: DataTypes.STRING(30)
    },
    password: {
      type: DataTypes.STRING(50)
    },
    isEnabled: {
      type: DataTypes.INTEGER(1)
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  }, {
    tableName: 'users'
  });
};
