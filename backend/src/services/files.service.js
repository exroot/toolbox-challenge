const fetch = require("node-fetch");
const utils = require("../utils/csvParsing");

const BASE_URL = "https://echo-serv.tbxnet.com";

const getList = async () => {
  try {
    const getFiles = await fetch(`${BASE_URL}/v1/secret/files`, {
      headers: {
        authorization: `Bearer ${process.env.SECRET_API_KEY}`,
      },
    });

    const filePaths = await getFiles.json();

    return filePaths;
  } catch (error) {
    console.error("LOG-- ERROR at getList: ", err);
    throw new CustomError(
      "Service error when retrieving file list - getList",
      500
    );
  }
};

const getFile = async (filename) => {
  try {
    const getfile = await fetch(`${BASE_URL}/v1/secret/file/${filename}`, {
      headers: {
        authorization: `Bearer ${process.env.SECRET_API_KEY}`,
      },
    });
    const fileBuffer = await getfile.arrayBuffer();

    return utils.csvToJSON(utils.toString(fileBuffer));
  } catch (e) {
    console.error("LOG-- ERROR at getFile: ", err);
    throw new CustomError(
      "Service error when retrieving a file - getFile",
      500
    );
  }
};

const getData = async () => {
  try {
    const paths = await getList();
    const files = [];

    for (let file of paths.files) {
      const fileData = await getFile(file);

      if (fileData === undefined) continue;

      files.push(fileData);
    }

    return files;
  } catch (e) {
    console.error("LOG-- ERROR at getData: ", err);
    throw new CustomError("Service error in requets to API - getData", 500);
  }
};

module.exports = {
  getData,
  getList,
  getFile,
};
