var cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

const port = process.env.PORT || 3308;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.send("Zyguel Philip E. Cabogoy");
});


// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes');
// using as middle ware 
app.use('/api/v1/employees', employeeRoutes)
// listen for requests
app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`);
});