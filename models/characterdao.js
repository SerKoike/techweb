const DB = require('../models/database');

module.exports =
{
  getAll()
  {
    return DB.query('SELECT * FROM characters')
    .then((result) =>
    {
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  getById(pId)
  {
    return DB.query('SELECT * FROM characters WHERE id = $(lID)'), { lId: pID })
    .then((result) =>
    {
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  newCharacter(pName,pUser_id,pClass,pPoint)
  {
    DB.query('INSERT INTO characters(name, user_id, class, position) VALUES ($(lName), $(lUser_id), $(lClass), $(lPoint))',
    {lName: pName, lUser_id: pUser_id, lClass: pClass, lPoint: pPoint});
    return DB.query('SELECT * FROM characters WHERE name = $(lName) AND user_id = $(lUser_id) AND class = $(lClass) AND position = $(lPoint)',
    {lName: pName, lUser_id: pUser_id, lClass: pClass, lPoint: pPoint})
    .then((result) =>
    {
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  }
  delCharacter(pId)
  {
    return DB.query('SELECT * characters WHERE id = $(lId)', {lId: pId})
    .then((result) =>
    {
      DB.query('DELETE FROM characters WHERE id = $(lID)',{lID: pId})
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  putCharacter(pId,pName)
  {
    DB.query('UPDATE characters SET name=$(lName) WHERE id = $(lID)',{lID: pId})
    return DB.query('SELECT * characters WHERE id = $(lId)', {lId: pId})
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
