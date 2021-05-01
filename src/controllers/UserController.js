

export async function getUserProfiles(req, res, next) {
  let data = {}
  return res.json(data)
}

export async function addUserProfiles(req, res, next) {

  res.json({
    message: "created successfully",
    data: []
  })
}