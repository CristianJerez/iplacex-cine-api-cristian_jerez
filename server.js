import cors from 'cors'
import express, { urlencoded } from 'express'
import actorRoutes from './src/actor/actorRoutes.js'
import client from './src/common/db.js'
import peliculaRoutes from './src/pelicula/peliculaRoutes.js'

const PORT = 3000 || 4000
const app = express()

app.use(express.json())
app.use(urlencoded({ extended: true}))
app.use(cors())

app.use('/api', peliculaRoutes)
app.use('/api', actorRoutes)

app.get('/',(req, res) =>{
    let message = 'Bienvenido al cine Iplacex'

    return res.status(200).send(message)
})


await client.connect()
.then(() =>{
    console.log('Conectado a cluster')
    app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
})

.catch((e) =>{
    console.log('A ocurrido un error al conectar al cluster de atlas', e)
})
