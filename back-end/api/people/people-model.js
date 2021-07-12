const db = require("../dbConfig");

async function add(data) {
  const [id] = await db("people").insert(data, "id");
  return findById(id);
}

function edit(id, changes) {
  return db("people").where({ id }).update(changes);
}

function remove(id) {
  return db("people").where({ id }).del();
}

function getAll() {
  return db("people");
}

function findById(id) {
  return db("people").where({ id }).first();
}

module.exports = {
  add,
  edit,
  remove,
  getAll,
  findById,
};
