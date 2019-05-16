module.exports = function(sequelize, DataTypes) {
    var Promoter = sequelize.define("Promoter", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,30]
      },
      last_name: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,30]
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      handle: {
        type: DataTypes.TEXT,
        len: [1,50]
      },
      descriptions: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      city: {
        type: DataTypes.TEXT,
        allowNull: true,
        len: [1,50]
      },
      languages: {
        type: DataTypes.TEXT,
        allowNull: true,
        len: [1,30]
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
      instagram: {
        type: DataTypes.TEXT,
        len: [1,50]
      },
      profile_pic: {
        type: DataTypes.TEXT,
        defaultValue: '/assets/images/profile.png',
        len: [1,200]
      },
      created:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
    },{
      timestamps: false,
    });
    Promoter.associate = function(models) {
        Promoter.hasMany(models.Message);
      };
    return Promoter;
  };
  