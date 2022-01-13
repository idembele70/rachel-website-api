const { Schema, model } = require('mongoose')

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  img: { type: String }
},
  { timestamps: true }
)

const User = model("users", userSchema)

module.exports = User