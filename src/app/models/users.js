/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    USERNAME: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0',
      unique: true
    },
    IS_ENABLED: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    ROLE_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      references: {
        model: 'roles',
        key: 'ID'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'users'
  });
};
