const DB = require('../models/database');

module.exports =
{
  getAll()
  {
    return DB.accessor.query('SELECT * FROM alliances')
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
    return DB.accessor.query('SELECT * FROM alliances WHERE id = $(allianceID)',{allianceID: id})
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
    DB.accessor.query('INSERT INTO alliances(name) VALUES ($(lName))',{lName: pName});
    return DB.accessor.query('SELECT * FROM alliances WHERE name=$(lName)',{lName: pName})
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
    return DB.accessor.query('DELETE FROM alliances WHERE id = $(allianceID)',{allianceID: pId}) // DB.accessor.query('SELECT * FROM alliances WHERE id = $(allianceID)',{allianceID: pId})
    .then((result) =>
    {
      //DB.accessor.query('DELETE FROM alliances WHERE id = $(allianceID)',{allianceID: pId});
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  putAlliance(pId,pName)
  {
    DB.accessor.query('UPDATE alliances SET name=$(lName) WHERE id=$(lId)',{lId: pId, lName: pName})
    return DB.accessor.query('SELECT * FROM alliances WHERE id=$(lId)',{lId: pId})
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
    return DB.accessor.query('SELECT * FROM users WHERE alliance_id=$(lAlliance_id)',
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
    return DB.accessor.query('SELECT * FROM characters WHERE user_id IN (SELECT id FROM users WHERE alliance_id=$(lAlliance_id))',{lAlliance_id: pAlliance_id})
    .then((result) =>
    {
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  getClassesOfId(pId,pClass)
  {
    return DB.accessor.query('SELECT characters.id,characters.name,user_id,class,position FROM characters FULL JOIN users ON characters.user_id = users.id WHERE alliance_id=$(lId) AND class=$(lClass)',
    {lId: pId, lClass: pClass})
    .then((result) =>
    {
      reurn result;
    })
    .catch((error) =>
    {
      throw error;
    })
  }
}
