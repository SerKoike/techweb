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
    var lPosition = "(" + pPosition.x + "," + pPosition.y + ")";
    return DB.accessor.query('INSERT INTO characters(name,user_id,class,position) VALUES ( $(name), $(user_id), $(class), $(position) ) RETURNING *',
    {name: pName, user_id: pUser_id, class: pClass, position: lPosition})
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
    var position = "(" + pPosition.x + "," + pPosition.y + ")";
    return DB.accessor.query('UPDATE characters SET name=$(lName),class=$(lClass),position=$(lPosition) WHERE id=$(lId) RETURNING *',
    {lId: pId, lName: pName, lClass: pClass, lPosition: position})
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
  //6.Renvoie tous les autres personnages de la même alliance (personnage actuel exclu) dans un radius en mètres
  //(on considère que character.point.x = lat et character.point.y = long) + code 200
  getAllyRadius(pId,pDistance)
  {
      
  }
}
