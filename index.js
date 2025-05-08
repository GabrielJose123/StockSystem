const express = require('express')
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json);

const db = mysql.createConnection({
    host: '127.0.0.1',
    user:'Gabo123',
    password:'1234',
    database:'Greenly'
});

db.connect((err) => {
    if (err) {
        console.log('erro de conxao com o banco de dados', err);
        return
    }
    console.log('conectando ao banco de dados')
});

app.post('/enviar', (req, res) => {
    const { nome, email } = req.body;

    const sql = 'Insert Into usuario (nome,email) values (?,?)'
    db.query(sql, [nome, email], (err, result) => {
        if (err) {
            console.log('erro ao inserir dados',err);
            return res.status(500).send('erro ao inserir os dados')
        }
        res.send('dados enviados com sucesso');
    });
});

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000')
})