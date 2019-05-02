module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: { 
        type: DataTypes.STRING,
        allowNull: false,
        len: [1,30]
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1,30]

      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      created:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },{
      timestamps: false,
    });

    User.associate = function(models) {
      User.hasMany(models.AuthToken);
    };

    return User;
  };
  