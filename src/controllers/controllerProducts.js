const MemoryProd = require('../db/daos/memoryDaos/MemoryProd')
const apiProd = new MemoryProd()

const getProducts = async (req,res)=>{
    res.render('productos')
}

const getChargeProducts = async (req,res)=>{
    let completeList=await apiProd.getAll()
    // let user = usuarios.find(usuario => usuario.username == req.user.username)
        // BASE DE DATOS--------- 
    // const user = mongoDbUserContainer.getUser(username)
    res.render("form",{completeList})
}

const postChargeProducts = async (req,res)=>{
    await apiProd.save(req.body)
    res.redirect('/productos/cargarProductos')
}

module.exports={getProducts,
    getChargeProducts,
    postChargeProducts}