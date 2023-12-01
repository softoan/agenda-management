const { Router } = require("express");
const quotesC = require("../controller/quotesC");
const router = Router();

router.get("/quotes/:day", async function (req, res) {

  switch (req.params.day) {
    case "lunes":
      res.send({
        status: 'Exitoso!!',
        message: `La cantidad de espacio disponible para el ${req.params.day} es ${quotesC(req.params.day)}`,
        spacesAvailable: quotesC(req.params.day),
      });
      break;
    case "martes":
      res.send({
        status: 'Exitoso!!',
        message: `La cantidad de espacio disponible para el ${req.params.day} es ${quotesC(req.params.day)}`,
        spacesAvailable: quotesC(req.params.day),
      });
      break;
    case "miércoles":
      res.send({
        status: 'Exitoso!!',
        message: `La cantidad de espacio disponible para el ${req.params.day} es ${quotesC(req.params.day)}`,
        spacesAvailable: quotesC(req.params.day),
      });
      break;
    case "jueves":
      res.send({
        status: 'Exitoso!!',
        message: `La cantidad de espacio disponible para el ${req.params.day} es ${quotesC(req.params.day)}`,
        spacesAvailable: quotesC(req.params.day),
      });
      break;
    case "viernes":
      res.send({
        status: 'Exitoso!!',
        message: `La cantidad de espacio disponible para el ${req.params.day} es ${quotesC(req.params.day)}`,
        spacesAvailable: quotesC(req.params.day),
      });
      break;
    default:
      res.send({
        status: 'Error!!',
        message: 'El dia de la semana ingresado no es valido.'
      });
      break;
  }

});


module.exports = router;