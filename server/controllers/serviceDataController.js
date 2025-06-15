const serviceData = require("../data/serviceData");

exports.getServices = (req, res) => {
  res.json(serviceData);
};
