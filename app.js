const express = require("express");
const config = require("config");
const path = require('path');
const mongoose = require("mongoose");

const app = express();

// Middleware для парсинга request в json
app.use(express.json({extended: true}));

app.use('/api/pizzas', require('./routes/pizzas.routes'));
app.use('/api/auth', require('./routes/auth.routes'));

if(process.env.NODE_ENV === "production") {
    app.use('/', express.static(path.join(__dirname, "client", 'build' )));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

// const PORT = config.get("port") || 5000;
const PORT = process.env.PORT || 5000;


async function start() {
    try{
        await mongoose.connect(process.env.MONGODB_URI ||config.get("mongoUri"),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => console.log(`App on port ${PORT}`));
    } catch (e) {
        console.warn("Server Error", e.message);
        process.exit(1);
    }
}

start();