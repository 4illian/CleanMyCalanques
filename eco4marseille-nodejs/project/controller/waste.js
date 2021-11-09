const model = require("../models");
const uploadFile = require("../middleware/upload");

exports.create = async (req, res, next) => {
  console.log(req.user);
  console.log(req.file);
  req.body.userIdCreated = req.user.dataValues.id;
  console.log(req.user.dataValues.id);
  //await uploadFile(req, res);

  const data = req.body;
  if (req.file != undefined) {
    data.pictureBefore = "/public/images/" + req.file.originalname;
  }
  if (
    data.place &&
    data.userIdCreated &&
    data.pictureBefore &&
    data.longitude &&
    data.latitude
  ) {
    try {
      const waste = await model.waste.create(req.body);
      res.send(waste);
    } catch (e) {
      res.send({ error: e });
    }
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const wastes = await model.waste.findAll({
      include: { all: true, nested: true },
    });
    res.status(200).send(wastes);
  } catch (e) {
    throw "fail get all wastes";
  }
};

exports.findOneById = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);

    const waste = await model.waste.findOne({
      where: { id: id },
      include: { all: true, nested: true },
    });
    res.send(waste);
  } catch (e) {
    console.log(e);
    throw "Waste not find";
  }
};

exports.deleteWaste = async (req, res, next) => {
  const data = req.params.id;
  console.log(data);
  try {
    const waste = await model.waste.findOne({ where: { id: data } });
    //console.log(user);
    waste.destroy();
    res.status(200).send(waste);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.updateWaste = async (req, res) => {
  console.log(req.body);
  const data = req.body;
  console.log(data);
  if (data.id) {
    id = data.id;
  }
  id = req.params.id;
  try {
    const waste = await model.waste.update(data, { where: { id: id } });

    res.status(200).send(waste);
  } catch (e) {
    res.status(500).send({ error: e });
  }
};

exports.wastesByUser = async (req, res) => {
  const id = req.user.dataValues.id;
  const waste = await model.waste.findAndCountAll({
    where: { userIdCreated: id },
  });
  res.send(waste);
};

exports.nbOfWastes = async (req, res) => {
  const waste = await model.waste.findAndCountAll();
  res.send(waste);
};

exports.cleanedByUser = async (req, res) => {
  const id = req.user.dataValues.id;
  const waste = await model.waste.findAndCountAll({
    where: { userIdCleaned: id },
  });
  res.send(waste);
};

exports.nbOfCleans = async (req, res) => {
  const waste = await model.waste.findAndCountAll({ where: { cleaned: true } });
  res.send(waste);
};
