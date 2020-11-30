module.exports = function BrandsFunction(pool){

    async function checkBrands(name) {
        var using = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        var check = await pool.query('SELECT brand_name FROM brands WHERE brand_name=$1 ', [using]);
        return check;
    }


    async function insertFun(brand) {
        var using = brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase()
        let query = await pool.query('insert into brands(brand_name) values ($1)', [using]);
        return query

    }

    async function getList() {
        var list = await pool.query('SELECT id, brand_name FROM brands')
        return list.rows;
    }


    return{
        checkBrands,
        insertFun,
        getList
        
    }
}


