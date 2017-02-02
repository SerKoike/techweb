const DB = require('../models/database');

module.exports =
{
  getById(id)
  {
    return DB.query('SELECT * FROM users WHERE id = $(userID)',{userID: id})
      .then((result) =>
      {
        return result;
      })
      .catch((error) =>
      {
        throw error;
      })
  },
  getAll()
  {
    return DB.query('SELECT * FROM users')
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
    DB.query('INSERT INTO users(name, email, alliance_id) VALUES ($(name), $(email), $(alliance_id))',{name: pName, email: pEmail, alliance_id: pAlliance_id});
    return  DB.query('SELECT * FROM users')
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
    return DB.query('DELETE FROM users WHERE id = $(userID)',{userID: id})
    .then((result) =>
    {
      return result;
    })
    .catch((error) =>
    {
      throw error;
    })
  },
  putUser(pId,pName,pEmail,pAlliance_id)
  {
    return DB.query('UPDATE users SET name=$(lName), email=$(lEmail), alliance_id=$(lAlliance_id) WHERE id=$(lId)',{lId: pId, lName: pName, lEmail: pEmail, lAlliance_id: pAlliance_id})
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
