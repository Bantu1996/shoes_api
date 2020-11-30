const assert = require('assert');
const brandsFunction = require('../brands-function');
const pg = require("pg");
const Pool = pg.Pool;

// we are using a special test database for the tests
const connectionString = process.env.DATABASE_URL || 'postgresql://bantu:s0ty@t0b@n2@localhost:5432/my_shoes_api_db_test';

const pool = new Pool({
  connectionString
});


var brands = brandsFunction(pool)

describe('Shoes API', function () {

  // const INSERT_QUERY = " INSERT INTO greeting(greeted_name, greet_counter) VALUES ($1, $2)";

  beforeEach(async function () {
    // clean the tables before each test run
    await pool.query("delete from brands");

  });




after(function () {
    pool.end();
  })


})