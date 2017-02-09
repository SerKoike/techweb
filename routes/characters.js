var express = require('express');
var router = express.Router();
const characterdao = require('../models/characterdao');

/* GET home page. */
router.get('/', function(req, res, next)
{
  characterdao.getAll()
    .then((characters) =>
    {
      res.status(200);
      res.send(characters);
    })
});

router.get('/:id', function(req,res,next)
{
  var id = req.params.id;
  characterdao.getById(id)
  .then((characters) =>
  {
    res.status(200);
    res.send(characters);
  })
});

router.post('/', function(req,res,next)
{
  var lName = req.body.character.name;
  var lUser_id = req.body.character.user_id;
  var lClass = req.body.character.class;
  var lPosition = req.body.character.position;
  characterdao.newCharacter(lName,lUser_id,lClass,lPosition)
  .then((characters) =>
  {
    res.status(200);
    res.send(characters);
  })
});

router.delete('/:id', function(req,res,next)
{
  var lId = req.params.id;
  characterdao.delCharacter(lId)
  .then((characters) =>
  {
    res.status(200);
    res.send(characters);
  })
});

router.put('/:id', function(req,res,next)
{
  var lId = req.params.id;
  var lName = req.body.character.name;
  characterdao.putCharacter(lId,lName)
  .then((characters) =>
  {
    res.status(200);
    res.send(characters);
  })
});

module.exports = router;
