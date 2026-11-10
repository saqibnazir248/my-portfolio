const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

const PORT = 5000;


/* MIDDLEWARE */

app.use(cors());

app.use(express.json());


/* MYSQL */

const db = mysql.createConnection({

  host: "localhost",

  user: "root",

  password: "saqib123",

  database: "portfolio_db"

});


/* MYSQL CONNECTION */

db.connect((error) => {

  if (error) {

    console.log(
      "❌ MySQL connection failed:"
    );

    console.log(error.message);

    return;
  }

  console.log(
    "✅ MySQL connected successfully!"
  );

});


/* HEALTH CHECK */

app.get(
  "/api/health",
  (req, res) => {

    res.json({
      success: true,
      message:
        "Portfolio API is running"
    });

  }
);


/* CONTACT API */

app.post(
  "/api/contact",
  (req, res) => {

    const {
      name,
      email,
      message
    } = req.body;


    if (
      !name ||
      !email ||
      !message
    ) {

      return res
        .status(400)
        .json({

          success: false,

          error:
            "All fields are required."

        });

    }


    const sql = `
      INSERT INTO contacts
      (name, email, message)
      VALUES (?, ?, ?)
    `;


    db.query(
      sql,

      [
        name,
        email,
        message
      ],

      (error, result) => {

        if (error) {

          console.log(error);

          return res
            .status(500)
            .json({

              success: false,

              error:
                "Unable to save message."

            });

        }


        res.json({

          success: true,

          message:
            "Message saved successfully!",

          id: result.insertId

        });

      }
    );

  }
);


/* START SERVER */

app.listen(
  PORT,
  () => {

    console.log(
      `🚀 Server running on http://localhost:${PORT}`
    );

  }
);