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
