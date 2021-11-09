//const { date } = require("faker/locale/zh_TW");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class waste extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /* static associate(models) {} */
    static associate(models) {
      // define association here
      waste.belongsTo(models.user, { foreignKey: "owner", as: "Owner" });
      //waste.hasMany(models.pictures);
      //event.hasMany(models.interest);

      /* waste.hasMany(models.comment);
      waste.hasMany(models.participant, { as: "Participants" });
      waste.belongsTo(models.categorie, {
        foreignKey: "categoryId",
        as: "Category",
      }); */
    }
  }
  waste.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      place: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userIdCreated: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userIdCleaned: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      pictureBefore: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pictureAfter: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      cleaned: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cleanedAt: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
    },
    {
      sequelize,
      modelName: "waste",
    }
  );
  return waste;
};
