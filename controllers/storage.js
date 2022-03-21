const { storageModel } = require("../models");

const PUBLIC_URL = process.env.PUBLIC_URL;
const PORT = process.env.PORT;
/**
 * Upload file
 * @param {*} req
 * @param {*} res
 */
const uploadFile = async (req, res) => {
  const { body, file } = req;
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}:${PORT}/${file.filename}`,
  };
  const data = await storageModel.create(fileData);
  res.send({ data });
};

module.exports = { uploadFile };
