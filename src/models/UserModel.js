import knex from "../database/index.js";

export async function createUser(user) {
  return await knex("users").insert(user).returning("*");
}

export async function readUserByName(name, lastname) {
  if (!lastname) {
    return await knex.from("users").select().where({ name });
  } else {
    return await knex.from("users").select().where({ name, lastname });
  }
}

export async function readUserByNickName(nickname) {
  return await knex.from("users").select().where("nickname", nickname);
}

export async function updateLastnameAndAddressById(id, lastname, address) {
  return await knex
    .from("users")
    .where({ id })
    .update({ lastname, address })
    .returning("*");
}

export async function updateNicknameById(id, nickname) {
  return await knex
    .from("users")
    .where({ id })
    .update({ nickname })
    .returning("*");
}

export async function deleteByid(id) {
  return await knex.from("users").where({ id }).del();
}
