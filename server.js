const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello World');
});

baseRouter.post('/add', (req, res) => {
    const {first,second}=req.body;
    res.json({ "result": first+second });
});


baseRouter.post('/subtract', (req, res) => {
    var a=req.body.first;
    var b=req.body.second;
    res.json({ "result": a-b });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});