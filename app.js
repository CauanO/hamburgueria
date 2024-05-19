const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const Pessoas = require('./models/Form');
const { where } = require('sequelize');

app.use(express.static('./public'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.render('home');
})

app.post('/add', function(req, res){ 
    Pessoas.create({
	        nome: req.body.name,
	        email: req.body.email,
	        cep: req.body.cep,
	        logradouro: req.body.logradouro,
	        uf: req.body.uf,
	        mensagem: req.body.mensagem
	    }).then(function(){
	    }).catch(function(erro){
	        res.send("Hover um error" + erro)
	    })
	})

app.listen(8081, function() {
    console.log("Servidor rodando!")
})