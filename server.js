// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const routes = require("./routes");
const Chatkit = require("@pusher/chatkit-server");
const stripe = require("stripe")("sk_test_zPWgKlVgaGyMsf54oVPeCWN700vthfHiJ8");
const cors = require("cors");
// Requiring our models for syncing
const db = require("./models");
// Sets up the Express App
//  =============================================================
const app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(require("body-parser").text());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(cors())
const PORT = process.env.PORT || 5001;

// Chatkit Create User
const chatkit = new Chatkit.default({
  instanceLocator: "v1:us1:22ea8e99-d0c0-4562-b5e8-847a27eaa8e2",
  key: "703ac5f5-f91a-4262-8e6e-53ff26344fdd:M6qnHdT9n0NylRU5Ox+64cwVGUz/Vv380xwFVlKJRcc=",
});

app.post("/users", (req, res) => {
  const { username } = req.body;
  chatkit
    .createUser({
      id: username,
      name: username,
    })
    .then(() => res.sendStatus(201))
    .catch((error) => {
      if (error.error === "services/chatkit/user_already_exists") {
        res.sendStatus(200);
      } else {
        res.status(error.status).json(error);
      }
    });
});

app.post("/authenticate", (req, res) => {
  const authData = chatkit.authenticate({ userId: req.query.user_id });
  res.status(authData.status).send(authData.body);
});

// Stripe
app.post("/charge", async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body,
    });

    res.json({ status });
  } catch (err) {
    res.status(500).end();
  }
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
// =============================================================
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
