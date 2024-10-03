// importando el framework 'express'
import express from 'express'

// creando instancia de la aplicacion 'express'
const app = express()

//este proceso convierte los datos 'json' en un objeto JavaScript accesible
app.use(express.json())// 'middleware' es un intermediario que le dice a la aplicacion en que formato debe responder

// creando puerto 3000
const port = 3000

// simulador de una base de datos
let usuarios = [{
    "id": 1,
    "nombre": "Juan Perez",
    "edad": 25,
}]

// <--- agregando metodos http 'GET' 'POST' 'PUT' 'DELETE' ---->

// metodo GET
app.get('/usuarios' , (req,res) =>{
    res.json(usuarios)
})

// metodo POST
app.post('/usuarios' , (req,res) => {
    console.log("Se ha creado el usuario:",req.body)  //Muestra en la consola el cuerpo de la solicitud

    const newUser = {...req.body, id: usuarios.length +1 } // 1. Crear un nuevo usuario con los datos recibidos en req.body, y añadirle un id que es la longitud actual del array usuario + 1.

    usuarios.push(newUser) // 2. Agregar el nuevo usuario al array usuario.

    res.send('Se ha creado un usuario') // 3. Enviar una respuesta al cliente indicando que el usuario ha sido creado.
    
})

// haciendo que el servidor este a la escucha en el puerto 3000
app.listen(port , () => {
    console.log(`Servidor a la escucha en el puerto: ${port}`)
})