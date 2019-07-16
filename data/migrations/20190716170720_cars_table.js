//make changes to db schema (structure)
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments("id"); //<<<<<< primary key: id
    tbl
      .text("VIN", 300)
      .unique()
      .notNullable();
    tbl.string("make", 128).notNullable();
    tbl.string("model").notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("transmission type", 300);
    tbl.string("title status", 128);
  });
};

//undo changes from db schema (structure)
exports.down = function(knex) {
  return knex.schema.dropTableIfExist("cars");
};
