const Mascota = require('../models/Mascota')

function crearMascota(req, res) {
  var mascota = new Mascota(req.body)
  res.status(201).send(mascota)
}

function obtenerMascota(req, res) {
  var mascota1 = new Mascota(1, 'el', 'charolas', '001')
  var mascota2 = new Mascota(2, 'la', 'coco', '002')
  res.send([mascota1, mascota2])
}

function modificarMascota(req, res) {
  var mascota1 = new Mascota(req.params.id, 'el', 'charolas', '001')
  var modificaciones = req.body
  mascota1 = { ...mascota1, ...modificaciones }
  res.send(mascota1)
}

function eliminarMascota(req, res) {
  res.status(200).send(`Mascota ${req.params.id} eliminado`);
}

module.exports = {
  crearMascota,
  obtenerMascota,
  modificarMascota,
  eliminarMascota
}