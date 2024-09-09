import {Router} from 'express'
import {createProducts, deleteProduct, getProducts,getProductsBYID, updateAva, updateProduct} from './handlers/product'
import { body,param } from 'express-validator'
import { handleInputErros } from './middleware'


const router=Router()
router.get('/',getProducts)
router.get('/:id',
    param('id')
        .isInt().withMessage('El id debe ser entero')
        .isNumeric().withMessage('El id debe ser un numero'),
    handleInputErros,
    getProductsBYID)

router.post('/',
    body('name')
        .notEmpty().withMessage('El nombre del producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('Valor tiene que ser nuemro')
        .notEmpty().withMessage('El precio del producto no puede ir vacio'),
        handleInputErros,
    createProducts)
// Sobreescribe todo ACTULIZA
router.put('/:id',
    
    body('name')
        .notEmpty().withMessage('El nombre del producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('Valor tiene que ser nuemro')
        .notEmpty().withMessage('El precio del producto no puede ir vacio'),
    body('available')
    .isBoolean().withMessage('El valro debe ser boleano'),
    handleInputErros,
    updateProduct)
    //patch cambia solo el valor que especifiques  MODIFICA
router.patch('/:id',
    param('id')
        .isInt().withMessage('El id debe ser entero')
        .isNumeric().withMessage('El id debe ser un numero'),
    handleInputErros,   
    updateAva)
router.delete('/:id',
    param('id')
        .isInt().withMessage('El id debe ser entero')
        .isNumeric().withMessage('El id debe ser un numero'),
    handleInputErros, 
    deleteProduct)
export default router