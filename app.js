const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 4000;

// MySQL connection configuration
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ashif@786@1234",
  database: "car_inventory"
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Get all items
app.get('/api/car-inventory', (req, res) => {
  con.query('SELECT * FROM items', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
