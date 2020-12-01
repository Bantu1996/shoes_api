const request = require('supertest');
const Brands = require('./routes/brands');
const BrandsAPI = require('./api/brands-api');
const Colors = require('./routes/colors');
const ColorsAPI = require('./api/colors-api');
const Sizes = require('./routes/sizes');
const SizesAPI = require('./api/sizes-api');
const Stock_level = require('./routes/stock_level');
const Stock_levelAPI = require('./api/stock_level-api');


const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const bodyParser = require('body-parser');


const BrandsFunction = require('./functions/brands-function');
const BrandsListFunction = require('./functions/brandsList-function');
const ColorsFunction = require('./functions/colors-function');
const SizesFunction = require('./functions/sizes-function');
const Stock_levelFunction = require('./functions/stock_level-function');


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
// const brandsListFunction = BrandsListFunction(pool)
//  const brandsListRoutes = BrandsList(brandsListFunction)
// const brandsListAPI = BrandsListAPI(brandsListFunction)

const colorsFunction = ColorsFunction(pool);
const colorsRoutes = Colors(colorsFunction);
const colorsAPI = ColorsAPI(colorsFunction);
const sizesFunction = SizesFunction(pool);
const sizesRoutes = Sizes(sizesFunction);
const sizesAPI = SizesAPI(sizesFunction);
const stock_levelFunction = Stock_levelFunction(pool);
const stock_levelRoutes = Stock_level(stock_levelFunction);
const stock_levelAPI = Stock_levelAPI(stock_levelFunction);


const app = express();

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






//GET	/api/shoes	List all shoes in stock

app.get('/api/shoes', brandsListAPI.getList)

// GET	/api/shoes/brand/:brandname	List all shoes for a given brand
// app.get('/api/shoes/brand/:brand_name', async function (req, res) {
//     var data = await brandsListFunction.getListOfBrands()
//     console.log(data);

//     res.send(data)
// })
app.get('/api/brandsList', brandsListAPI.getList)


// GET	/api/shoes/size/:size	List all shoes for a given size

app.get('/api/shoes/size/:size', function (req, res) {

    res.render('')
})

// GET	/api/shoes/brand/:brandname/size/:size	List all shoes for a given brand and size

app.get('/api/shoes/brand/:brandname/size/:size', function (req, res) {
    res.render('')
})

// POST	/api/shoes/sold/:id	Update the stock levels when a shoe is sold

app.post('/api/shoes/sold/:id', function (req, res) {
    res.render('index')
})

// POST	/api/shoes

app.post('/api/shoes/brand', async function (req, res) {
    // var branding = req.body.brand;
    // var colouring = req.body.color;

    // var brands = await brandsFunction.insertFun(branding);
    // var colors = await colorsFunction.insertFun(colouring);


    res.send(await brandsListFunction.getList())

})


var portNumber = process.env.PORT || 3005;

//start everything up
app.listen(portNumber, function () {
    console.log('Starting Shoes on', portNumber);
});

