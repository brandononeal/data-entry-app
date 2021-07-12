exports.up = function (knex) {
  return knex.schema.createTable("people", (tbl) => {
    tbl.increments();
    tbl.string("first_name", 128).notNullable();
    tbl.string("last_name", 128).notNullable();
    tbl.string("email", 128).notNullable().unique();
    tbl.string("phone", 128).notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema, dropTableIfExists("people");
};
