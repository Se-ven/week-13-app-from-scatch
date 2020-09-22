const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/sequelize');
const { getAllPeople, getPerson, saveNewPerson } = require('./controllers/plans');
const { response } = require('express');

const app = express();

app.get('/', async (req, res) => {
    res.send({
        message: "Welcome to the top level of Nerd Gainer Data!"
    });
});

app.get('/debug-env', (req, res) => {
    response.send(config)
});

app.get('/:urlValue', getPerson);

app.post('/', bodyParser.json(), saveNewPerson);

app.get('/debug-db', (req, res) => {
    response.send(connection.query(''))
});

app.use('/FoodGroups', require('./routes/FoodGroups'));
app.use('/Macros', require('./routes/Macros'));
app.use('/People', require('./routes/People'));
// app.use('/workoutsRoutes', require('./routes/workoutsRoutes'))

startDatabase().then(async () => {
    app.listen(3001, async () => {
        console.log('Nerd Gainer data server has started on port 3001. Follow http://localhost:3001/');
    });
});