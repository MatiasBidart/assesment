const express = require('express'); 
const {port} = require('./config');
const cors = require('cors');
const countriesRouter = require('./countries/countries.router');


const app = express();
app.use(express.json());
app.use(cors());


app.get('/',
    (req,res) => {
    res.status(200).json({
        message: 'OK', users: `localhost:${port}/api/v1/countries`
    })
    }
)

app.use('/api/v1/countries', countriesRouter)

app.listen(port, () =>{console.log(`Server started at port ${port}`)})