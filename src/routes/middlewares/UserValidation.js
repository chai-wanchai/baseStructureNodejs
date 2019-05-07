import _ from 'lodash'
export async function addUserValidation(req, res, next) {
  let {firstname,lastname} = req.body
  if(_.isEmpty(req.body)){
    return res.status(400).json({
      message:'request body not be empty'
    })
  }else if (_.isEmpty(firstname)){
    return res.status(400).json({
      message:'firstname not be empty'
    })
  }
  else if (_.isEmpty(lastname)){
    return res.status(400).json({
      message:'lastname not be empty'
    })
  }
  next()
}