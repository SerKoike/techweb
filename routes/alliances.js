var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
  alliancedao.getAll()
    .then((alliances) =>
    {
      res.status(200);
      res.send(alliances);
    })
});

router.get('/:id', function(req,res,next)
{
  var id = req.params.id;
  alliancedao.getById(id)
  .then((alliance) =>
  {
    res.status(200);
    res.send(alliance);
  })
});

router.post('/', function(req,req,next)
{
  var lName = req.body.alliance.name;
  alliancedao.newAlliance(lName)
  .then((alliance) =>
  {
    res.status(200);
    res.send(alliance);
  })
});

router.delete('/:id', function(req,res,next)
{
  var lId = req.params.id;
  alliancedao.delAlliance(lId)
  .then((alliance) =>
  {
    res.status(200);
    res.send(alliance);
  })
});

router.put('/:id', function(req,res,next)
{
  var lId = req.params.id;
  var lName = req.body.alliance.name;
  alliancedao.putAlliance(lId,lName)
  .then((alliance) =>
  {
    res.status(200);
    res.send(alliance);
  })
});

module.exports = router;
