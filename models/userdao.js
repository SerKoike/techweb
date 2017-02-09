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
        return result;
      })
      .catch((error) =>
      {
        throw error;
      })
  },
  newUser(pName, pEmail, pAlliance_id)
  {
    DB.accessor.query('INSERT INTO users(name, email, alliance_id) VALUES ($(name), $(email), $(alliance_id))',{name: pName, email: pEmail, alliance_id: pAlliance_id});
    return DB.accessor.query('SELECT * FROM users WHERE name=$(name) AND email=$(email) AND alliance_id=$(alliance_id)',{name: pName, email: pEmail, alliance_id: pAlliance_id})
    .then((result) =>
    {
      return result;
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
    DB.accessor.query('UPDATE users SET name=$(lName), email=$(lEmail), alliance_id=$(lAlliance_id) WHERE id=$(lId)',{lId: pId, lName: pName, lEmail: pEmail, lAlliance_id: pAlliance_id})
    return DB.accessor.query('SELECT * FROM users WHERE id=$(lId)',{lId: pId})
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
