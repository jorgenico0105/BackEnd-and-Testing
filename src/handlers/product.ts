import {request, Request,Response} from 'express'
import Product from '../models/Product.model';
import { json } from 'sequelize';


export const createProducts=async (req:Request,res:Response)=>{
        try {
            const product = await Product.create(req.body)
            res.json({data:product})
        } catch (error) {
            console.log(error)
        }
}

export const getProducts=async(req:Request,res:Response)=>{
    try {
        const products = await Product.findAll({
            order:[
                ['price','DESC']
            ]
        })
        res.json({data:products})
    } catch (error) {
        console.error(error)
    }
    
}
export const getProductsBYID=async(req:Request,res:Response)=>{
    try {
        const idPro=req.params.id
        const product = await Product.findByPk(idPro)
        if(!product){
            return res.status(404).json({error:'Producto no encontrado'})
        }
        res.json({data:product})
    } catch (error) {
        console.error(error)
    }
    
}
export const updateProduct=async(req:Request,res:Response)=>{
    try {
        const idPro=req.params.id
        const product = await Product.findByPk(idPro)
        if(!product){
            return res.status(404).json({error:'Producto no encontrado'})
        }
        await product.update(req.body)
        await product.save()
        res.json({data:product})
    } catch (error) {
        console.log(error)
    }
}
export const updateAva=async(req:Request,res:Response)=>{
   
        const {id}=req.params
        const product = await Product.findByPk(id)
        if(!product){
            return res.status(404).json({error:'Producto no encontrado'})
        }
        product.available = !product.dataValues.available
        await product.save()
        res.json({data:product})
   
}
export const deleteProduct= async(req,res)=>{
    const idPro=req.params.id
    const product= await Product.findByPk(idPro)
    if(!product){
        return res.status(404).json({error:'Producto no encontrado'})
    }
    await product.destroy()
    res.json({data:'Producto elminiado'})
}