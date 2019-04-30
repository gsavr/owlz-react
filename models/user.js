module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    first_name: { 
      type: DataTypes.TEXT,
    len: [1,30]
    },
    last_name: {
      type: DataTypes.TEXT
    },
    password: {
        type: DataTypes.TEXT
    }
    
    });

    return User;
  };
  