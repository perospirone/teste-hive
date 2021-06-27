export const up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.string("lastname").notNullable();
    table.string("nickname", 30).unique().notNullable();
    table.string("address").notNullable();
    table.string("bio", 100);
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    // table.timestamps([useTimestamps], [defaultToNow])
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("users");
};
