const express = require('express')

const router = express.Router()

// models
const Pc = require('../models/pc_list')

// routes
router.get('/', (req, res) => {
  const userId = 0
  Pc
    .findAllPcs()
    .then(pcs => res.json(pcs))
})

router.get('/:id', (req, res) => {
  const userId = req.params.id
  console.log(userId)
  Pc
    .findByUserId(userId)
    .then(pcs => res.json(pcs))
    
})

router.post('/', (req, res) => {
  const {cpu, gpu, ram, motherboard, ssd, psu, pcCase, name,id} = req.body
  

  Pc
    .create(id, name, cpu, gpu, ram, motherboard, ssd, psu, pcCase )
    .then(pc => res.json(pc))
})
// insert PUT and EDIT route once database columns confirmed

router.delete('/:id', (req, res) => {
  const pcId = req.params.id

  Pc
    .delete(pcId)
    .then(() => res.json({ message: 'deleted successfully' }))
})

router.put('/:id', (req, res) => {
  const {name, cpu, graphics_card, ram, motherboard, ssd, psu, pc_case} = req.body
  const pcId = req.params.id

  Pc
    .edit(pcId, name, cpu, graphics_card, ram, motherboard, ssd, psu, pc_case)
    .then(pc => res.json(pc))
})

module.exports = router