const {Schema, model} = require("mongoose")

const categorySchema = Schema({
  name: {
    type: String,
    required
  },
  isActive : {
    type : Boolean,
    required
  },
  img : {
    type: String,
    required
  }
}
  {timestamps: true}
)

