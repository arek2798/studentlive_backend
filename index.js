const dotenv = require('dotenv');
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
dotenv.config();
const PORT = process.env.PORT || 9000;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));

if (!mongoose.connect(process.env.NODE_DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })) console.log("blad")
mongoose.set('useCreateIndex', true);

const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', () => {
    console.log('Connected to MongoDB database!!!');
    app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));
    app.use('/api', routes);
});