

const express = require("express");
const cors = require("cors");
require("dotenv").config()
const stripe = require("stripe")(
	process.env.SECRET_KEY
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello world"));
// app.get("/evangadi", (req, res) => res.status(200).send("evangadi"));
app.post("/payments/create", async (req, res) => {
	const total = req.query.total;

	// console.log("Payment Request Recieved for this amount >>> ", total);
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: parseInt(total), // subunits of the currency
			currency: "usd",
		});

		// OK - Created
		res.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).send("something went wrong");
	}
});

// - Listen command
// exports.api = functions.https.onRequest(app);

app.listen(5500, (err) => {
	if (!err) {
		console.log("server is running on http://localhost:5500");
	}
});

//  (http://127.0.0.1:5005/c-93147/us-central1/api). the baseURL