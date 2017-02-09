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
    return DB.query('SELECT * FROM characters WHERE id = $(lId)', {lId: pId })
    .then((result) =>
    {
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  newCharacter(pName,pUser_id,pClass,pPosition)
  {
    DB.query('INSERT INTO characters(name,user_id,class) VALUES ( $(name), $(user_id), $(class) )', //,position , $(position )
    {name: pName, user_id: pUser_id, class: pClass, position: pPosition});
    return DB.query('SELECT * FROM characters WHERE name = $(lName) AND user_id = $(lUser_id) AND class = $(lClass)', // AND position = $(lPosition)
    { lName: pName, lUser_id: pUser_id, lClass: pClass, lPosition: pPosition })
    .then((result) =>
    {
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  delCharacter(pId)
  {
    return DB.query('SELECT * FROM characters WHERE id = $(lId)', {lId: pId})
    .then((result) =>
    {
      DB.query('DELETE FROM characters WHERE id = $(lId)',{lId: pId})
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  putCharacter(pId,pName)
  {
    DB.query('UPDATE characters SET name=$(lName) WHERE id=$(lId)',{lId: pId,lName: pName})
    return DB.query('SELECT * FROM characters WHERE id=$(lId)',{lId: pId})
    .then((result) =>
    {
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  }/*,
  getClass(pClass)
  {
    return DB.query('SELECT * FROM characters WHERE class=$(lClass)', {lClass: pClass})
    .then((result) =>
    {
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  }*/
}
