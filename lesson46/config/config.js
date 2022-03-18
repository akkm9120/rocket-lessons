module.exports = {
  // development settings, other settings include staging and production settings which we have not included here
  development: {
    username: 'postgres',
    password: null,
    // "grocery" is our example app name, which we also use as our DB name.
    // Use "_development" suffix to indicate DB is for development purposes (naming convention)
    database: 'grocery_development',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
