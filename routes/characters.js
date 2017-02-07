var express = require('express');
var router = express.Router();

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

router.post('/', function(req,req,next)
{
  var lName = req.body.character.name;
  var lClass = req.body.character.class;
  var lUser_id = req.body.character.user_id;
  var lPoint = req.body.character.position;
  characterdao.newCharacter(lName,lClass,lUser_id,lPoint)
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
  var lName = req.body.alliance.name;
  characterdao.putCharacter(lId,lName)
  .then((characters) =>
  {
    res.status(200);
    res.send(characters);
  })
});

module.exports = router;
