// Update with your config settings.

export default {
  development: {
    client: "postgresql",
    connection: {
      host: "ec2-3-218-71-191.compute-1.amazonaws.com",
      database: "d61qqsmgnf2orm",
      user: "axmofoxyhnspll",
      password:
      "725a52e4ea5993f2ef353af107648b2a82b1482a41e0fe3298e73cd56e32604b",
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection:
    "postgres://axmofoxyhnspll:725a52e4ea5993f2ef353af107648b2a82b1482a41e0fe3298e73cd56e32604b@ec2-3-218-71-191.compute-1.amazonaws.com:5432/d61qqsmgnf2orm",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
