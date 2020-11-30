const Brands = require('./routes/brands');
const BrandsAPI = require('./api/brands-api');
const Colors = require('./routes/colors');
const ColorsAPI = require('./api/colors-api');
const Sizes = require('./routes/sizes');
const SizesAPI = require('./api/sizes-api');
const Prices = require('./routes/prices');
const PricesAPI = require('./api/prices-api');
const In_stock = require('./routes/in_stock');
const In_stockAPI = require('./api/in_stock-api');


const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const bodyParser = require('body-parser');


const BrandsFunction = require('./functions/brands-function');
const ColorsFunction = require('./functions/colors-function');
const SizesFunction = require('./functions/sizes-function');
const PricesFunction = require('./functions/prices-function');
const In_stockFunction = require('./functions/in_stock-function');


var exphbs = require('express-handlebars');
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://bantu:s0ty@t0b@n2@localhost:5432/my_shoes_db';
const pool = new Pool({
    connectionString
});


const brandsFunction = BrandsFunction(pool);
const brandsRoutes = Brands(brandsFunction);
const categoryAPI = BrandsAPI(brandsFunction);
const colorsFunction = ColorsFunction(pool);
const colorsRoutes = Colors(colorsFunction);
const colorsAPI = ColorsAPI(colorsFunction);
const sizesFunction = SizesFunction(pool);
const sizesRoutes = Sizes(sizesFunction);
const sizesAPI = SizesAPI(sizesFunction);
const pricesFunction = PricesFunction(pool);
const pricesRoutes = Prices(pricesFunction);
const pricesAPI = PricesAPI(pricesFunction);
const in_stockFunction = In_stockFunction(pool);
const in_stockRoutes = In_stock(in_stockFunction);
const in_stockAPI = In_stockAPI(in_stockFunction);


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

app.get('/api/shoes', function (req, res) {
    res.render('index')
})

// GET	/api/shoes/brand/:brandname	List all shoes for a given brand
app.get('/api/shoes/brand/:brandname', function (req, res) {
    res.render('')
})

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

app.post('/api/shoes/brand/', async function (req, res) {
    var branding = req.body.brand;
    // var colouring = req.body.color;
    // var sizing = req.body.size;
    // var pricing = req.body.price;
    // var stocking = req.body.in_stock
    if (branding === "") {
        req.flash('error', 'Please enter a brand name')
        res.redirect('/')
    }
    else {
        // var cilId = await colorsFunction.brandColorsId();
        var brands = await brandsFunction.insertFun(branding);
        // var colors = await colorsFunction.insertFun(colouring);
        if (brands === true) {
            req.flash('success', "You have successfully entered brand")
        }
    //     else if(colors === true){
    //          req.flash('success', "You have successfully entered color")

    //     }
     }
    //  const colId = await colorsFunction.colorId(colouring)

    res.render('index', {
        brand: await brandsFunction.getList(),
        // brand: await colorsFunction.getList()
        // color: colouring,
        // colors,
        // colId,
        // sizing,
        // pricing,
        // stocking
    })
})


var portNumber = process.env.PORT || 3005;

//start everything up
app.listen(portNumber, function () {
    console.log('Starting Shoes on', portNumber);
});

