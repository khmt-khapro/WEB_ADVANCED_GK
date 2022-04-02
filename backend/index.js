const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
const port = process.env.PORT || 5000

app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/orders", orderRoute)
app.use("/api/carts", cartRoute)
app.use("/api/checkout", stripeRoute)

mongoose
  .connect(process.env.CONNECT_STRING)
  .then(() => {
    console.log("connected !")
  })
  .catch((err) => {
    console.log(err)
  })

app.listen(port, () => {
  console.log(`Server is start at port: ${port}`)
})
