const filesService = require("../services/files.service");

const getFileData = async (req, res) => {
  try {
    let resp = null;
    const filename = req.query.filename;

    if (filename) resp = await filesService.getFile(filename);
    else resp = await filesService.getData();

    if (!resp) {
      res.status(404).json({ error: "File or data Not Found" });
    }

    res.json(resp);
  } catch (error) {
    next(error);
  }
};

const getFileList = async (req, res) => {
  try {
    const filesResp = await filesService.getList();

    if (!filesResp) {
      res.status(404).json({ error: "Data Not Found" });
    }

    res.send(filesResp);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFileData,
  getFileList,
};
