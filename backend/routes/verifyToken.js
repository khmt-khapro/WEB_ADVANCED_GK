const jwt = require("jsonwebtoken")

const verifyToken = (req, res, cb) => {
  const authHeader = req.headers.token
  if (authHeader) {
    const token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json("Token is not valid")
      req.user = user
      // callback tự định nghĩa ở dòng 18
      cb()
    })
  } else {
    return res.status(401).json("You are not authenticated !")
  }
}

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      //call next middleware in user.js
      next()
    } else {
      res.status(403).json("You are not allow to do this action!")
    }
  })
}

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      //call next middleware in user.js
      next()
    } else {
      res.status(403).json("You are not allow to do this action!")
    }
  })
}

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
}
