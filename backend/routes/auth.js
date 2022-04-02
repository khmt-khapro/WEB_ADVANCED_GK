const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString(),
    email: req.body.email,
  })

  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) {
      return res.status(401).json("Wrong username")
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    )

    const passwordStr = hashedPassword.toString(CryptoJS.enc.Utf8)
    if (passwordStr !== req.body.password) {
      return res.status(401).json("Wrong password")
    }

    // create access token
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    )
    const { password, ...otherInfo } = user._doc
    res.status(200).json({ ...otherInfo, accessToken })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
