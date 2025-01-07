import express from 'express';
import analyzerRouter from "../src/routes/analyzer.route"


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());



app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.use("/api", analyzerRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
