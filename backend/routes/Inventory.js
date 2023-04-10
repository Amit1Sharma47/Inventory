const express = require('express');
const inventory = require('../controller/Inventory');

const router = express.Router();
router.get('/', inventory.fetchInventory);
router.post('/', inventory.postInventory);
router.delete('/:id',inventory.deleteInventory)
router.patch('/:id',inventory.updateInventory)
module.exports = router;