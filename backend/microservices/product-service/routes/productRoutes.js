import express from 'express'
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getTopProducts,
} from '../controllers/productController.js'

const router = express.Router()

router.route('/').get(getProducts).post(createProduct)
router.get('/top', getTopProducts)
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct)

export default router

