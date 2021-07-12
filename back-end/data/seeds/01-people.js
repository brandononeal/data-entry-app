exports.seed = function (knex) {
  return knex("people")
    .truncate()
    .then(function () {
      return knex("people").insert([
        {
          id: 1,
          first_name: "John",
          last_name: "Smith",
          email: "john@gmail.com",
          phone: "(678) 456-7890",
        },
        {
          id: 2,
          first_name: "Jane",
          last_name: "Doe",
          email: "jane@gmail.com",
          phone: "(360) 456-7890",
        },
      ]);
    });
};
