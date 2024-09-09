
const axios = require('axios');
const History = require('../models/History');

exports.getGeoInfo = async (req, res) => {
  const ip = req.params.ip;
  try {
    const geoInfo = await axios.get(`https://ipinfo.io/${ip}/geo`);
    await History.create({ ipAddress: ip, locationData: geoInfo.data });
    res.json(geoInfo.data);
  } catch (error) {
    res.status(400).json({ message: 'Invalid IP address' });
  }
};

exports.getHistory = async (req, res) => {
  const histories = await History.findAll();
  res.json(histories);
};

exports.deleteHistory = async (req, res) => {
  const { ids } = req.body;
  await History.destroy({ where: { id: ids } });
  res.json({ message: 'History deleted' });
};

// Fetch current IP geo information
exports.getCurrentUserGeoInfo = async (req, res) => {
    try {
      const geoInfo = await axios.get('https://ipinfo.io/geo');
      res.json(geoInfo.data); // Respond with the geo data
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch geo information.' });
    }
  };
