// importanto el framework 'express'
import express from 'express'

// creando instancia de la aplicacion 'express'
const app = express()

// creando puerto 3000
const port = 3000

// haciendo que el servidor este a la escucha en el puerto 3000
app.listen(port , () => {
    console.log(`Servidor a la escucha en el puerto: ${port}`)
})