import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    countInStock: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // optional: who created the product
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product

