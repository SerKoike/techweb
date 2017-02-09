const DB = require('../models/database');

module.exports =
{
  getAll()
  {
    return DB.accessor.query('SELECT * FROM characters')
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
    return DB.accessor.query('SELECT * FROM characters WHERE id = $(lId)', {lId: pId})
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
    DB.accessor.query('INSERT INTO characters(name,user_id,class,position) VALUES ( $(name), $(user_id), $(class), $(position ) )',
    {name: pName, user_id: pUser_id, class: pClass, position: pPosition});
    return DB.accessor.query('SELECT * FROM characters WHERE name = $(lName) AND user_id = $(lUser_id) AND class = $(lClass)',
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
    return DB.accessor.query('DELETE FROM characters WHERE id = $(lId)',{lId: pId})//DB.accessor.query('SELECT * FROM characters WHERE id = $(lId)', {lId: pId})
    .then((result) =>
    {
      //DB.accessor.query('DELETE FROM characters WHERE id = $(lId)',{lId: pId});
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  putCharacter(pId,pName,pClass,pPosition)
  {
    DB.accessor.query('UPDATE characters SET name=$(lName),class=$(lClass),position=$(lPosition) WHERE id=$(lId) ',{lId: pId, lName: pName, lClass: pClass, lPosition: pPosition})
    return DB.accessor.query('SELECT * FROM characters WHERE id=$(lId)',{lId: pId})
    .then((result) =>
    {
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  getClass(pClass)
  {
    return DB.accessor.query('SELECT * FROM characters WHERE class=$(lClass)', {lClass: pClass})
    .then((result) =>
    {
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  getAllyRadius(pId,pRadius)
  {
      
  }
}
