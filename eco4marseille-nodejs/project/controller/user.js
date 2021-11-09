const model = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const { uuid } = require("uuidv4");

//const checkuser = require("../../middleware/auth");

exports.create = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  if (data.email && data.password) {
    data.password = bcrypt.hashSync(data.password, 10);
    console.log(data.password);
    const existuser = await this.findOneByEmail(data);
    if (existuser != null) {
      throw "L'utilisateur existe déja, veuillez vous connecter !";
    } else {
      try {
        const user = await model.user.create(req.body);
        res.send(user);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  } else {
    res.status(400).send();
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const users = await model.user.findAll({
      include: { all: true, nested: true },
    });
    res.status(200).send(users);
  } catch (e) {
    throw "fail get all users";
  }
};

exports.findOneByEmail = async (data) => {
  try {
    const email = data.email;
    const user = await model.user.findOne({ where: { email: email } });
    console.log(user);
    return user;
  } catch (e) {
    throw "User not found";
  }
};
exports.findOneById = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);

    const user = await model.user.findOne({
      where: { id: id },
      include: { all: true, nested: true },
    });
    res.send(user);
  } catch (e) {
    console.log(e);
    throw "User not find";
  }
};

exports.login = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const user = await this.findOneByEmail(data);
    console.log(user);

    console.log(user.password);
    console.log(data.password);

    const result = bcrypt.compareSync(data.password, user.password);
    console.log(result);

    if (result) {
      console.log(user.password);

      const jwtCreate = jwt.sign(
        { userId: user.id, username: user.username, isAdmin: user.admin },
        "RANDOM_TOKEN_SECRET",
        {
          expiresIn: "24h",
        }
      );

      console.log(jwtCreate);
      res.status(200).json({
        token: jwtCreate,
      });
    } else {
      res.status(401).send({ error: "Email et/ou mot de passe incorrect" });
      console.log(error);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Email et/ou mot de passe incorrect" });
  }
};

exports.deleteUser = async (req, res, next) => {
  const data = req.params.id;
  console.log(data);
  try {
    const user = await model.user.findOne({ where: { id: data } });
    //console.log(user);
    user.destroy();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
