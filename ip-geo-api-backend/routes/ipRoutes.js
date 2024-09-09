// routes/ipRoutes.js
const express = require('express');
const { getCurrentUserGeoInfo, getGeoInfo, getHistory, deleteHistory } = require('../controllers/ipController');
const router = express.Router();

router.get('/current', getCurrentUserGeoInfo);
router.get('/:ip', getGeoInfo);
router.get('/history', getHistory);
router.delete('/history', deleteHistory);

module.exports = router;
