const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API de Calculadora');
});

app.post('/calculate', (req, res) => {
    const { expression } = req.body;

    try {
        const result = eval(expression); 

        res.json({ result: result.toString() });
    } catch (error) {
        res.status(400).json({ error: 'Invalid Expression' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
