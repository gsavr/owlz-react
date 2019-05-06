module.exports = function(sequelize, DataTypes) {
    var Promoter = sequelize.define("Promoter", {
      first_name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1,30]
        }
      },
      last_name: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,30]
      },
      handle: {
        type: DataTypes.TEXT,
        len: [1,50]
      },
      descriptions: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,255]
      },
      city: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,50]
      },
      languages: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,30]
      },
      phone_number: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,30]
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1,50]
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
    },{
      timestamps: false,
    });
    Promoter.associate = function(models) {
        Promoter.hasMany(models.Lead, {
          onDelete: "cascade",
        });
      };
    return Promoter;
  };
  