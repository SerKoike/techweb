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
        return result[0];
      })
      .catch((error) =>
      {
        throw error;
      })
  },
  newAlliance(pName)
  {
    return DB.accessor.query('INSERT INTO alliances(name) VALUES ($(lName)) RETURNING *',{lName: pName})
    //return DB.accessor.query('SELECT * FROM alliances WHERE name=$(lName)',{lName: pName})
    .then((result) =>
    {
      return result[0];
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
    return DB.accessor.query('UPDATE alliances SET name=$(lName) WHERE id=$(lId) RETURNING *',{lId: pId, lName: pName})
    //return DB.accessor.query('SELECT * FROM alliances WHERE id=$(lId)',{lId: pId})
    .then((result) =>
    {
      return result[0];
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  //BONUS
  //1.Renvoie tous les users de l’alliance avec l’id
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
  //2.Renvoie tous les personnages appartenant aux joueurs de l’alliance
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
  //5.Renvoie tous les personnages de l’alliance avec la classe correspondante
  getClassesOfId(pId,pClass)
  {
    return DB.accessor.query('SELECT characters.id,characters.name,user_id,class,position FROM characters FULL JOIN users ON characters.user_id = users.id WHERE alliance_id=$(lId) AND class=$(lClass)',
    {lId: pId, lClass: pClass})
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
