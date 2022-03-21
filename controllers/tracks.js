const { tracksModel } = require("../models");

/**
 * Create item
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await tracksModel.create(body);
  res.send({ data });
};

/**
 * Get item
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};

/**
 * Get items
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  const data = await tracksModel.find({});
  // const data = ["hehehe"];
  res.send({ data });
};

/**
 * Update item
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {};

/**
 * Delete item
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {};

module.exports = { createItem, getItem, getItems, updateItem, deleteItem };
