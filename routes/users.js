var express = require('express');
var router = express.Router();
const userdao = require('../models/userdao');

/* GET users listing. */
router.get('/', function(req, res, next)
{
  userdao.getAll()
    .then((users) =>
    {
      res.status(200);
      res.send(users);
    })
});
router.get('/:id', function(req, res, next)
{
  var id = req.params.id;
  userdao.getById(id)
  .then((users) =>
  {
    res.status(200);
    res.send(users);
  })
});
router.post('/', function(req,res)
{
  ///without postman test
  //:name/:email/:alliance
  /*var lName = req.params.name;
  var lEmail = req.params.email;
  var lAlliance = req.params.alliance;*/
  var lName = req.body.user.name;
  var lEmail = req.body.user.email;
  var lAlliance = req.body.user.alliance;
  userdao.newUser(lName,lEmail,lAlliance)
  .then((users) =>
  {
    res.status(200);
    res.send(users);
  })
});
router.delete('/:id', function(req,res)
{
  var id = req.params.id;
  userdao.delUser(id)
  .then((users) =>
  {
    res.status(200);
    res.
    res.send(users);
  })
});
router.put('/:id', function(req,res)
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
  var alliance = req.body.user.alliance;
  userdao.putUser(id,name,email,alliance)
  .then((users) =>
  {
    res.status(200);
    res.send(users);
  })
});

module.exports = router;
