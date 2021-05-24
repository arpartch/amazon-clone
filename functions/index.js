const functions = require("firebase-functions");
const express = require("express"); 
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51IuiwpB8bRJJqgz34fC7APsFXnktgXuBUDsO6dOnniweqiX3zLXiKcG8MA6hQBLl3p9HVAdBXHaA5P79lkTQpOVn00QqJuLAP2')

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment request received BOOM! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen
exports.api = functions.https.onRequest(app)

// expamle end point
//http://localhost:5001/clone-d1d19/us-central1/api