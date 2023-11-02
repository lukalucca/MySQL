const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

const app = express()

// definindo handlebars como template engine
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

//pasta de arquivos estaticos como CSS, imagens
app.use(express.static("public"))

//trabalhar com dados no formato json
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

//rotas
app.post("/register/save", (req, res)=> {
    const {title, pageqty} = request.body

    const query = `
    INSERT INTO books (tile, pageqty)
    VALUES ('${title}', '${book}')
    `
    conn.query(query, (error) =>{
        if (error){
            console.log(error)
            return
        }

        response.redirect("/")
    })
})

app.get('/register', (req, res)=>{
    express.response("register")
}) 

app.get('/', (req, res)=> {
    resposta.render("Home")
})

// conexão com mySQL
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "node_mysql",
    port: 3306
})

conn.connect((error) => {
    if(error) {
        console.log(error)
        return
    }

    console.log("conectado ao MySQL!")

    app.listen(3000,() =>{
        console.log("servidor rodando na porta 3000!")
    })
})