var express = require('express');
var router = express.Router();
const alliancedao = require('../models/alliancedao');

/* GET home page. */
router.get('/', function(req, res, next)
{
  alliancedao.getAll()
    .then((alliances) =>
    {
      res.status(200)
        .json({
          status: 'success',
          alliances: alliances
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

router.get('/:id', function(req, res, next)
{
  var id = req.params.id;
  alliancedao.getById(id)
  .then((alliance) =>
  {
    res.status(200)
      .json({
        status: 'success',
        alliance: alliance
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

router.post('/', function(req, res, next)
{
  var lName = req.body.alliance.name;
  alliancedao.newAlliance(lName)
  .then((alliance) =>
  {
    res.status(200)
      .json({
        status: 'success',
        message: 'Inserted one alliance',
        alliance: alliance
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

router.delete('/:id', function(req,res,next)
{
  var lId = req.params.id;
  alliancedao.delAlliance(lId)
  .then((alliances) =>
  {
    res.status(200)
      .json({
        status: 'success',
        message: alliances
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
  var lName = req.body.alliance.name;
  alliancedao.putAlliance(lId,lName)
  .then((alliance) =>
  {
    res.status(200)
      .json({
        status: 'success',
        message: 'modified a alliance',
        alliance: alliance
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
//BONUS
//1.Get all users in alliance X
router.get('/:id/users', function(req,res,next)
{
  var lId = req.params.id;
  alliancedao.listUser(lId)
  .then((alliances) =>
  {
    res.status(200)
      .json({
        status: 'success',
        users: alliances
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
//2.Get all characters in alliance X
router.get('/:id/characters', function(req,res,next)
{
  var lId = req.params.id;
  alliancedao.listCharacter(lId)
  .then((alliances) =>
  {
    res.status(200)
      .json({
        status: 'success',
        characters: alliances
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
//5.Get all characters in alliance with class X
router.get('/:id/characters/:class', function(req,res,next)
{
  var lId = req.params.id;
  var lClass = req.params.class;
  alliancedao.getClassesOfId(lId,lClass)
  .then((alliances) =>
  {
    res.status(200)
      .json({
        status: 'success',
        characters: alliances
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
