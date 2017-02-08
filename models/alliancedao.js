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
  delAlliance(pId)
  {
    return DB.query('SELECT * FROM alliances WHERE id = $(allianceID)',{allianceID: pId})
    .then((result) =>
    {
      DB.query('DELETE FROM alliances WHERE id = $(allianceID)',{allianceID: pId})
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
    return DB.query('SELECT * FROM alliances WHERE id=$(lId)',{lId: pId})
    .then((result) =>
    {
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  //BONUS
  listUser(pAlliance_id)
  {
    //TODO: query can be simpler, but lazy
    return DB.query('SELECT users.id AS UserID,users.name AS Username,users.email,alliances.name AS AllianceID FROM users FULL JOIN alliances ON users.alliance_id = alliances.id WHERE alliances.id = $(lAlliance_id)',
    {lAlliance_id: pAlliance_id})
    .then((result) =>
    {
      return result;
    })
    .catch ((error) =>
    {
      throw error;
    })
  },
  listCharacter(pAlliance_id)
  {
    return DB.query('SELECT * FROM characters WHERE user_id IN (SELECT id FROM users WHERE alliance_id=$(lAlliance_id))',{lAlliance_id: pAlliance_id})
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
