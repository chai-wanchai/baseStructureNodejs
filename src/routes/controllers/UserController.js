import usersModel from '../../db/models/UserModel'

export async function getUserProfiles(req, res, next) {
  let data = await usersModel.find().exec()
  return res.json(data)
}

export async function addUserProfiles(req, res, next) {
  const users = {
    firstname: req.body.firstname,
    lastname: req.body.lastname
  }
  usersModel.create(users, function (err, results) {
    if (err) {
      res.json({
        error: err
      })
    }
    res.json({
      message: "created successfully",
      data: results
    })
  })
}