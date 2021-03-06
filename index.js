const request = require('supertest');
const Brands = require('./routes/brands');
const BrandsAPI = require('./api/brands-api');
var cors = require('cors')



const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const bodyParser = require('body-parser');


const BrandsFunction = require('./functions/brands-function');


var exphbs = require('express-handlebars');
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://bantu:s0ty@t0b@n2@localhost:5432/my_shoes_db';
const pool = new Pool({
    connectionString
});


const brandsListFunction = BrandsFunction(pool);
const brandsListRoutes = Brands(brandsListFunction);
const brandsListAPI = BrandsAPI(brandsListFunction);


const app = express();
app.use(cors())

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(session({
    secret: "Please enter number!!",
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

app.get('/addFlash', async function (req, res) {
    req.flash('info', 'Flash Message Added');
    res.redirect('/');
});

app.get('/', function (req, res) {
    // req.flash('info', 'Welcome');
    res.render('index')
});


app.get('/api/shoes', brandsListAPI.getList)
app.get('/api/shoes/brand_name', brandsListAPI.getListOfBrands)
app.get('/api/shoes/color', brandsListAPI.getListOfColors)
app.get('/api/shoes/colors', brandsListAPI.getListOfDistinctColors)
app.get('/api/shoes/brand_name/:brand_name', brandsListAPI.getListOfSpecifiedColors)
app.get('/api/shoes/brand_names', brandsListAPI.getListOfDistinctBrands)
app.get('/api/shoes/brand_name/:brand_name', brandsListAPI.getListOfSpecifiedBrands)
app.get('/api/shoes/size/:size', brandsListAPI.getListOfSpecifiedSizes)
app.get('/api/shoes/sizes', brandsListAPI.getListOfDistinctSizes)
app.get('/api/shoes/size', brandsListAPI.getListOfSizes)
app.get('/api/shoes/brand_name/:brand_name/size/:size',brandsListAPI.getListOfSpecificSizesAndBrands)
// POST	/api/shoes
app.post('/api/shoes', brandsListAPI.addition)







// POST	/api/shoes/sold/:id	Update the stock levels when a shoe is sold

app.post('/api/shoes/sold/:id', function (req, res) {
res.render('index')
})





var portNumber = process.env.PORT || 3005;

//start everything up
app.listen(portNumber, function () {
    console.log('Starting Shoes on', portNumber);
});

