const express = require('express');
const router = express.Router();
const Data = require('../models/Data');


router.post('/', async (req, res) => {
  try {
    const zone = new Data(req.body);
    await zone.save();
    res.status(201).json(zone);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get('/:Id', async function(req, res) {
  try {
    const user = await Data.findById(req.params.Id, 'data').lean();
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});




module.exports = router;