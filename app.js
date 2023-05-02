//Declaraciones 
const express = require("express"); //Servidor
const hbs = require('hbs'); //HTML -Dinamicos
const bodyParser = require('body-parser'); //Body - POST
const port = process.env.port || 3000; //Puerto de ejecucion

const app = express()

//Motor para generar las vistas dinamicas
app.set('view engine', 'hbs')
//Por ejemplo header, menu vertical , pie de pagina
hbs.registerPartials(__dirname + '/view/partials',()=>{})

// Use- Middleware
app.use(express.static('public'));//parte publica de la app
app.use(bodyParser.urlencoded({extended : true} ))//procesar el body en las solicitudes POST
app.use(bodyParser.json()) //Manejar datos en formato .json

//procesar solicitudes del tipo GET y POST en los navegadores
//tipo get manejamos el dashboard y 400
//tipo post el login
app.post('/dashboard', (req,res)=>{ //ruta para el dashboard
    //res.send('Aqui va el dash por POST')
    res.render('dashboard')
}) 
app.get('/login',(req,res)=>{
    //res.send('Aqui va el login por GET')
    res.render('login')
})
app.get('*',(req,res)=>{
    //res.send('Aqui va el 404 por GET')
    res.render('404',{
        nombre:"Jose Luis",
        edad: "27"
    })
})

app.listen(port,()=>{
    console.log('Servidor express corriendo en el puerto: ', port);
})