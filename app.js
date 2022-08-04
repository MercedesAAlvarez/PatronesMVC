const connectLivereload = require('connect-livereload')
const express = require('express');
const app = express();
const port = 3017;
const path = require('path');
const livereload =require('livereload');
const liveReloadServer = livereload.createServer();

/* Rutas */
/* traer las rutas del maincontroller */
const mainRouter = require('./routers/main'); /* ruta main requerida */

/* views engine setup */
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
/* es importante ya que el app.set, esta seteando la carpeta views es para cuando utilizamos el res.render nos renderice en la carpeta views el archivo home,q asu vez tiene con extension el view engine q es el html,por esp se setea estas dos lineas de app.set.es necesario aplicar una plantilla en este caso el ejs*/


app.use(express.static(path.join(__dirname,'public')));
liveReloadServer.watch(path.join(__dirname,'public'));
app.use(connectLivereload())


app.use('/',mainRouter)

/* app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/about',(req,res) => res.sendFile(path.join(__dirname,'views','about.html')));
 */

liveReloadServer.server.once('connection',() => {
    setTimeout(() => {
        liveReloadServer.refresh('/')
    }, 50);
})


app.listen(port,()=> console.log(`Servidor levantado en http://localhost:${port}`))