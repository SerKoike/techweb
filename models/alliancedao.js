const DB = require('../models/database');

module.exports =
{
  getAll()
  {
    return DB.query('SELECT * FROM alliances')
      .then((result) =>
      {
        return result;
      })
      .catch((error) =>
      {
        throw error;
      })
  },
  getById(id)
  {
    return DB.query('SELECT * FROM alliances WHERE id = $(allianceID)',{allianceID: id})
      .then((result) =>
      {
        return result;
      })
      .catch((error) =>
      {
        throw error;
      })
  },
  newAlliance(pName)
  {
    DB.query('INSERT INTO alliances(name) VALUES ($(lName))',{lname: pName});
    return DB.query('SELECT * FROM alliances WHERE name=$(lName)',{lName: pName})
    .then((result) =>
    {
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  delAlliance(id)
  {
    return DB.query('SELECT * FROM alliances WHERE id = $(allianceID)',{allianceID: id})
    .then((result) =>
    {
      DB.query('DELETE FROM alliances WHERE id = $(allianceID)',{allianceID: id})
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  putAlliance(pId,pName)
  {
    DB.query('UPDATE alliances SET name=$(lName) WHERE id=$(lId)',{lId: pId, lName: pName})
    return DB.query('SELECT * FROM alliances')
    .then((result) =>
    {
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  }
}
