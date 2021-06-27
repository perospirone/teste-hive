import {
  createUser,
  readUserByName,
  readUserByNickName,
  updateLastnameAndAddressById,
  updateNicknameById,
  deleteByid,
} from "../models/UserModel.js";

export async function Create(req, res) {
  try {
    const user = await createUser(req.body);

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function listByName(req, res) {
  try {
    const { name, lastname } = req.query;

    const users = await readUserByName(name, lastname);

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function listByNickname(req, res) {
  try {
    const user = await readUserByNickName(req.params.nickname);

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function modifyLastnameAndAddress(req, res) {
  try {
    const user = await updateLastnameAndAddressById(
      req.params.id,
      req.body.lastname,
      req.body.address
    );

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function modifyNickname(req, res) {
  try {
    const user = await updateNicknameById(req.params.id, req.body.nickname);

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function delByid(req, res) {
  try {
    await deleteByid(req.params.id);

    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
}
