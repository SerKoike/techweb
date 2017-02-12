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
      return result[0];
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  newCharacter(pName,pUser_id,pClass,pPosition)
  {
    return DB.accessor.query('INSERT INTO characters(name,user_id,class) VALUES ($(name), $(user_id), $(class)) RETURNING *',
    {name: pName, user_id: pUser_id, class: pClass, position: pPosition})
    /*return DB.accessor.query('SELECT * FROM characters WHERE name = $(lName) AND user_id = $(lUser_id) AND class = $(lClass)',
    { lName: pName, lUser_id: pUser_id, lClass: pClass, lPosition: pPosition })*/
    .then((result) =>
    {
      return result[0];
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
    return DB.accessor.query('UPDATE characters SET name=$(lName),class=$(lClass) WHERE id=$(lId) RETURNING *',
    {lId: pId, lName: pName, lClass: pClass, lPosition: pPosition})
    //return DB.accessor.query('SELECT * FROM characters WHERE id=$(lId)',{lId: pId})
    .then((result) =>
    {
      return result[0];
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  //Renvoie tous les personnages avec la classe correspondante
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
