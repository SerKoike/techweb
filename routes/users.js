var express = require('express');
var router = express.Router();
const userdao = require('../models/userdao');

/* GET users listing. */
router.get('/', function(req, res, next)
{
  userdao.getAll()
    .then((users) =>
    {
      res.status(200)
        .json({
          status: 'success',
          users: users
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
  userdao.getById(id)
  .then((user) =>
  {
    res.status(200)
      .json({
        status: 'success',
        user: user
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
  var lName = req.body.user.name;
  var lEmail = req.body.user.email;
  var lAlliance = req.body.user.alliance_id;
  userdao.postUser(lName,lEmail,lAlliance)
  .then((users) =>
  {
    res.status(200)
      .json({
        status: 'success',
        user: users,
        message: 'Inserted one user'
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
  var id = req.params.id;
  userdao.delUser(id)
  .then((users) =>
  {
    res.status(200)
      .json({
        status: 'success',
        message: users
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
  ///Without postman test
  //:id/:name/:email/:alliance
  /*var id = req.params.id;
  var name = req.params.name;
  var email = req.params.email;
  var alliance = req.params.alliance;*/
  var id = req.params.id;
  var name = req.body.user.name;
  var email = req.body.user.email;
  var alliance = req.body.user.alliance_id;
  userdao.putUser(id,name,email,alliance)
  .then((users) =>
  {
    res.status(200)
      .json({
        message: 'modified a user',
        status: 'success',
        user: users
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
//3.get all characters of user X
router.get('/:id/characters', function(req,res,next)
{
  var id = req.params.id;
  userdao.getCharacter(id)
  .then((users) =>
  {
    res.status(200)
      .json({
        status: 'success',
        characters: users
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
