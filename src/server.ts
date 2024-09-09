import express from "express"
import router from "./router"
import db from './config/db'
import colors from 'colors'

async function connectDB() {
    try{
        await db.authenticate()
        db.sync()
        // console.log(colors.bgGreen.white('conexion exitosa'))
    }catch(error){
        // console.log(error)
        console.log(colors.bgRed.white('No se puede conectar a esta base de datos'))
    }
}

connectDB()
const app=express()
//LLER DATOS DEL POST 
app.use(express.json())
app.use('/api/products',router)
app.get('/api',(req,res)=>{
    res.json({Nicolas:'dice hola'})
})
export default app