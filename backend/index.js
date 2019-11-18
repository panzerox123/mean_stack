const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./config.js').db;
const cart = require('./cart.js');

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to Database ${db}`))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors());
app.use(body_parser.json({ limit: '30mb', extended: true }));
app.use(body_parser.urlencoded({ limit: '30mb', extended: true }));

app.get('/view_cart', async (req, res) => {
    const result = await cart.find();
    console.log(result);
    res.status(200).send(result)
});

app.post('/add_to_cart', async (req, res) => {
    console.log(req.body)
    let {product,cost} = req.body
    console.log(product + ' ' + cost);
    let newItem = new cart({
        product,
        cost
    });
    newItem.save((err, crt) => {
        if (err) {
            console.log(err);
            res.status(400).send('Error');
        } else if (crt) {
            res.status(201).send("Added to cart!");
        }
    });
});

app.delete('/remove_from_cart', (req, res) => {
    item = req.query.item;
    console.log(item);
    cart.deleteOne({ product: item }, function (err) {
        if (err) return handleError(err)
        else return res.status(200);
    });
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
});