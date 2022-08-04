const express = require('express');
const livereload =require('livereload');
const liveReloadServer = livereload.createServer()
const connectLivereload = require('connect-livereload')
const app = express();
const port = 3017;
const path = require('path')

app.use(express.static(path.join(__dirname,'public')));
liveReloadServer.watch(path.join(__dirname,'public'));
app.use(connectLivereload())
/*  */
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/about',(req,res) => res.sendFile(path.join(__dirname,'views','about.html')));

liveReloadServer.server.once('connection',() => {
    setTimeout(() => {
        liveReloadServer.refresh('/')
    }, 50);
})
app.listen(port,()=> console.log(`Servidor levantado en http://localhost:${port}`))