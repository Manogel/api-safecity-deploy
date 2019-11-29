"use strict";module.exports = {
  dialect: 'mysql', // or 'postgres' and yarn add pg-hstore or https://sequelize.org/master/manual/dialects.html
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_SCHEMA,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
