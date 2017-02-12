const DB = require('../models/database');

module.exports =
{
  getAll()
  {
    return DB.accessor.query('SELECT * FROM users')
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
    return DB.accessor.query('SELECT * FROM users WHERE id = $(userID)',{userID: id})
      .then((result) =>
      {
        return result[0];
      })
      .catch((error) =>
      {
        throw error;
      })
  },
  postUser(pName, pEmail, pAlliance_id)
  {
    return DB.accessor.query('INSERT INTO users(name, email, alliance_id) VALUES ($(lName), $(lEmail), $(lAlliance_id)) RETURNING *',
    {lName: pName, lEmail: pEmail, lAlliance_id: pAlliance_id})
    //return DB.accessor.query('SELECT * FROM users WHERE name = $(lName)',{lName: pName})
    .then((result) =>
    {
      return result[0];
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  delUser(id)
  {
    return DB.accessor.query('DELETE FROM users WHERE id = $(userID)',{userID: id}) //DB.accessor.query('SELECT * FROM users WHERE id = $(userID)',{userID: id})
    .then((result) =>
    {
      //DB.accessor.query('DELETE FROM users WHERE id = $(userID)',{userID: id});
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  putUser(pId,pName,pEmail,pAlliance_id)
  {
    return DB.accessor.query('UPDATE users SET name=$(lName), email=$(lEmail), alliance_id=$(lAlliance_id) WHERE id=$(lId) RETURNING *',
    {lId: pId, lName: pName, lEmail: pEmail, lAlliance_id: pAlliance_id})
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
  //3.get all characters of user X
  getCharacter(pId)
  {
    return DB.accessor.query('SELECT * FROM characters WHERE user_id=$(lId)',{lId: pId})
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
