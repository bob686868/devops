const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createPool({
  host: 'mysql-service',
  user: 'root',
  password: 'password123',
  database: 'my_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// You don't need connectWithRetry() with a pool!
// It will automatically attempt to acquire a connection when you run a query.

// Example of simple retry logic in your Node.js app
// function connectWithRetry() {
//   db.connect((err) => {
//     if (err) {
//       console.error('Failed to connect to db, retrying in 5 seconds...');
//       setTimeout(connectWithRetry, 5000);
//     } else {
//       console.log('Connected to MySQL!');
//     }
//   });
// }
// connectWithRetry();

app.get('/pets', (req, res) => {
  db.query('SELECT * FROM pets', (err, results) => {
    console.log('request sent')
    if (err) {
      console.error('Database query error:', err); // Check this in docker logs
      return res.status(500).json({ error: 'Database query failed', details: err.message });
    }
    console.log('request passed')
    res.json(results);
  });
});

app.get('/abd',(req,res)=>res.send('hello'))

// POST new pet
app.post('/pets', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).send('Name is required');

  db.query('INSERT INTO pets (name) VALUES (?)', [name], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, name });
  });
});


app.listen(3001, () => console.log('Server running on port 3001'));

