var express = require('express');
var router = express.Router();
const characterdao = require('../models/characterdao');

/* GET home page. */
router.get('/', function(req, res, next)
{
  characterdao.getAll()
    .then((characters) =>
    {
      res.status(200)
        .json({
          status: 'success',
          characters: characters
        });
    })
    .catch((error) =>
    {
      res.status(500)
        .json(
        {
          status: 'Error',
          message: error
        })
    })
});

router.get('/:id', function(req,res,next)
{
  var id = req.params.id;
  characterdao.getById(id)
  .then((character) =>
  {
    res.status(200)
      .json({
        status: 'success',
        character: character
      });
  })
  .catch((error) =>
  {
    res.status(500)
      .json(
      {
        status: 'Error',
        message: error
      })
  })
});

router.post('/', function(req,res,next)
{
  var lName = req.body.character.name;
  var lUser_id = req.body.character.user_id;
  var lClass = req.body.character.class;
  var lPosition = req.body.character.position;
  characterdao.newCharacter(lName,lUser_id,lClass,lPosition)
  .then((character) =>
  {
    res.status(200)
      .json({
        status: 'success',
        message: 'Inserted one character',
        character: character
      });
  })
  .catch((error) =>
  {
    res.status(416)
      .json(
      {
        status: 'Error',
        message: error
      })
  })
});

router.delete('/:id', function(req,res,next)
{
  var lId = req.params.id;
  characterdao.delCharacter(lId)
  .then((characters) =>
  {
    res.status(200)
      .json({
        status: 'success',
        message: characters
      });
  })
  .catch((error) =>
  {
    res.status(500)
      .json(
      {
        status: 'Error',
        message: error
      })
  })
});

router.put('/:id', function(req,res,next)
{
  var lId = req.params.id;
  var lName = req.body.character.name;
  var lClass = req.body.character.class;
  var lPosition = req.body.character.position;
  characterdao.putCharacter(lId,lName,lClass,lPosition)
  .then((characters) =>
  {
    res.status(200)
      .json({
        status: 'success',
        character: characters
      });
  })
  .catch((error) =>
  {
    res.status(500)
      .json(
      {
        status: 'Error',
        message: error
      })
  })
});
//4.Renvoie tous les personnages avec la classe correspondante + code 200
router.get('/all/:class', function(req,res,next)
{
  var lClass = req.params.class;
  characterdao.getClass(lClass)
  .then((characters) =>
  {
    res.status(200)
      .json({
        status: 'success',
        characters: characters
      });
  })
  .catch((error) =>
  {
    res.status(500)
      .json(
      {
        status: 'Error',
        message: error
      })
  })
});

module.exports = router;
