const express = require('express');
const inventory = require('../controller/Inventory');
const multer = require('multer');
const upload = multer({ dest: '../public/' })


const router = express.Router();
router.get('/',upload.single('avatar'), inventory.fetchInventory);
router.post('/', inventory.postInventory);
router.delete('/:id',inventory.deleteInventory)
router.patch('/:id',inventory.updateInventory)
router.post('/form',inventory.formReg)
module.exports = router;