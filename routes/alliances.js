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

module.exports = router;
