const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "users", deps: []
 * createTable() => "wastes", deps: [users]
 *
 */

const info = {
  revision: 1,
  name: "runmigrations",
  created: "2021-11-08T23:57:02.868Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "users",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        email: {
          type: Sequelize.STRING,
          field: "email",
          unique: true,
          allowNull: false,
        },
        username: {
          type: Sequelize.STRING,
          field: "username",
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          field: "password",
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "wastes",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        place: { type: Sequelize.STRING, field: "place", allowNull: false },
        userIdCreated: {
          type: Sequelize.INTEGER,
          field: "userIdCreated",
          allowNull: false,
        },
        userIdCleaned: {
          type: Sequelize.INTEGER,
          field: "userIdCleaned",
          allowNull: true,
        },
        pictureBefore: {
          type: Sequelize.STRING,
          field: "pictureBefore",
          allowNull: true,
        },
        pictureAfter: {
          type: Sequelize.STRING,
          field: "pictureAfter",
          allowNull: true,
        },
        longitude: {
          type: Sequelize.FLOAT,
          field: "longitude",
          allowNull: true,
        },
        latitude: { type: Sequelize.FLOAT, field: "latitude", allowNull: true },
        cleaned: {
          type: Sequelize.BOOLEAN,
          field: "cleaned",
          defaultValue: false,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        cleanedAt: {
          type: Sequelize.DATE,
          field: "cleanedAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        owner: {
          type: Sequelize.INTEGER,
          field: "owner",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "users", key: "id" },
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["users", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["wastes", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
