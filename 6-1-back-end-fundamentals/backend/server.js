// TODO 1: Import Express
import express from 'express';

// TODO 2: Allow React to access the server
import cors from 'cors';

// TODO 3: Create the Express app
const app = express();

// enable CORS
app.use(cors());

// TODO 4: Create the home route "/"
app.get('/', (req, res) => {
  res.send('Hello from the back-end server');
});

// TODO 5: Create the "/about" route
app.get('/about', (req, res) => {
  res.send('This is the about route');
});

// TODO 6: Create the "/student" route
app.get('/student', (req, res) => {
  res.json({
    name: 'Aisha',
    major: 'Computer Science'
  });
});

// TODO 7: Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});