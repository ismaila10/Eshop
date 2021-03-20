const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs');
import userValidationSchema from "../middlewares/validators/user.validation";

exports.register = (req, res) => {

  let hashedPassword = bcrypt.hashSync(req.body.password, 10);

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
    age: req.body.age,
    password: hashedPassword,
    address: {
      postalCode: req.body.postalCode,
      streetName: req.body.streetName,
      city: req.body.city,
      country: req.body.country
    }
  });

  const validation = userValidationSchema.validate(req.body);

  console.log(validation);
  if (validation.error) {
      return res.status(400).send(validation.error);
  }
  user
    .save()
    .then((data) => {
      let userToken = jwt.sign(
        {
          id: data._id,
          admin: data.isAdmin,
        },
        config.jwt.secret,
        {
          expiresIn: 86400,
        }
      );
      res.send({
        auth: true,
        token: userToken,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occured',
      });
    });
};

exports.login = (req, res) => {
  console.log(req.body);
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          auth: false,
          token: null,
          message: `no user finf with email ${req.body.email}`
        });
      }
      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          auth: false,
          token: null,
          message:"password invalid"
        });
      }
      let userToken = jwt.sign(
        {
          id: user._id,
          admin: user.isAdmin,
        },
        config.jwt.secret,
        {
          expiresIn: 86400,
        }
      );

      res.status(200).send({
        auth: true,
        token: userToken,
      });
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

exports.logout = (req, res) => {
  res.status(200).send({
    auth: false,
    token: null,
  });
};

exports.getMe = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: `user not found with id ${req.params.id}`,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      return res.status(404).send({
        message: err.message,
      });
    });
};
