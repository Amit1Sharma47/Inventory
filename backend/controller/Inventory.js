const Inventory = require('../model/Inventory')

exports.fetchInventory = (req, res, next) => {
    Inventory.findAll().then(item => res.json(item)).catch(err => console.log(err))
}
exports.postInventory = (req, res, next) => {
    const name = req?.body?.name
    const quantity = req?.body?.quantity
    Inventory.create({
        name, quantity
    }).then(res => console.log(res)).catch((err) => console.log(err))

    return res.json(req.body)
}
exports.deleteInventory = (req, res, next) => {
    const inventoryId = req.params.id
     Inventory.destroy({ where: {
        id: inventoryId
    }}).then(inventory => res.json("Book deleted")).catch(err => console.log(err))
    return res.json("sucess")
}
exports.updateInventory=(req,res,next)=>{
    const inventoryId = req.params.id
    Inventory.update({    name : req?.body?.name,
         quantity : req?.body?.quantity }, {
        where: {
          id: inventoryId
        }
      }).then(inventory => res.json("Book Updated")).catch(err => console.log(err))
}