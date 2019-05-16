module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        len: [1,30]
      },
      end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        len: [1,30]
      },
      guests: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      occasion:{
        type: DataTypes.TEXT,
      },
      message:{
        type: DataTypes.TEXT,
        allowNull: false,  
      },
      confirm:{
        type: DataTypes.BOOLEAN,
      },
    });
    return Message;
  };
  