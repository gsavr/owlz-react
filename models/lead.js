module.exports = function(sequelize, DataTypes) {
    var Lead = sequelize.define("Lead", {
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
        allowNull: false, 
      },
      message:{
        type: DataTypes.TEXT,
        allowNull: false,  
      },
      email_client:{
        type: DataTypes.TEXT,
        allowNull: false,  
      },
    });
    return Lead;
  };
  