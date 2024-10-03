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

    // Muestra en la consola el cuerpo de la solicitud
    console.log("Se ha creado el usuario:",req.body)  

    // 1. Crear un nuevo usuario con los datos recibidos en req.body, y añadirle un id que es la longitud actual del array usuario + 1.
    const newUser = {...req.body, id: usuarios.length +1 } 

    // 2. Agregar el nuevo usuario al array usuario.
    usuarios.push(newUser) 

    // 3. Enviar una respuesta al cliente indicando que el usuario ha sido creado.
    res.send('Se ha creado un usuario') 
    
})

// metodo PUT
app.put('/usuarios/:id', (req, res) => {

    // Adquiere el id del usuario como numero entero
    const idUsuario = parseInt(req.params.id) 

    // compara el id del usuario con los id's del array, en caso de coincidir cambia los datos actuales por los nuevos
    usuarios = usuarios.map(user => user.id === idUsuario ? { ...user, ...req.body } : user) 

    // envia un mensaje de confirmacion sobre la actualizacion
    res.send('El usuario ha sido actualizado') 
})

// metodo DELETE
app.delete('/usuarios/:id' , (req,res) => {

    // Adquiere el id del usuario como numero entero
    const idUsuario = parseInt(req.params.id)

    // Recorrera y excluira todos los id's del array exceptuando al id del usuario que sera eliminado  
    usuarios = usuarios.filter(user => user.id !== idUsuario)

    // mensaje confirmando la eliminacion del usuario
    res.send('El usuario ha sido eliminado')
})

// Creando un manejo de errores e implementando un codigo de estado 404 para las rutas no encontradas
app.use((req, res) => {
    res.status(404).send('Lo sentimos, ruta no encontrada.');
});

// haciendo que el servidor este a la escucha en el puerto 3000
app.listen(port , () => {
    console.log(`Servidor a la escucha en el puerto: ${port}`)
})