const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(owner) => "wastes"
 * addColumn(circle) => "wastes"
 * addColumn(distance) => "wastes"
 * changeColumn(cleanedAt) => "wastes"
 * changeColumn(cleanedAt) => "wastes"
 * changeColumn(userIdCleaned) => "wastes"
 * changeColumn(userIdCleaned) => "wastes"
 * changeColumn(userIdCreated) => "wastes"
 * changeColumn(userIdCreated) => "wastes"
 *
 */

const info = {
  revision: 2,
  name: "addlinks",
  created: "2021-11-09T08:58:12.878Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["wastes", "owner", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "wastes",
      "circle",
      { type: Sequelize.INTEGER, field: "circle", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "wastes",
      "distance",
      { type: Sequelize.FLOAT, field: "distance", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "wastes",
      "cleanedAt",
      {
        type: Sequelize.STRING,
        field: "cleanedAt",
        defaultValue: "",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "wastes",
      "cleanedAt",
      {
        type: Sequelize.STRING,
        field: "cleanedAt",
        defaultValue: "",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "wastes",
      "userIdCleaned",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "users", key: "id" },
        field: "userIdCleaned",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "wastes",
      "userIdCleaned",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "users", key: "id" },
        field: "userIdCleaned",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "wastes",
      "userIdCreated",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        references: { model: "users", key: "id" },
        field: "userIdCreated",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "wastes",
      "userIdCreated",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        references: { model: "users", key: "id" },
        field: "userIdCreated",
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["wastes", "circle", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["wastes", "distance", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "wastes",
      "owner",
      {
        type: Sequelize.INTEGER,
        field: "owner",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "users", key: "id" },
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "wastes",
      "cleanedAt",
      { type: Sequelize.DATE, field: "cleanedAt", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "wastes",
      "cleanedAt",
      { type: Sequelize.DATE, field: "cleanedAt", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "wastes",
      "userIdCleaned",
      { type: Sequelize.INTEGER, field: "userIdCleaned", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "wastes",
      "userIdCleaned",
      { type: Sequelize.INTEGER, field: "userIdCleaned", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "wastes",
      "userIdCreated",
      { type: Sequelize.INTEGER, field: "userIdCreated", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "wastes",
      "userIdCreated",
      { type: Sequelize.INTEGER, field: "userIdCreated", allowNull: false },
      { transaction },
    ],
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
