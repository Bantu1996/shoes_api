module.exports = function BrandsListFunction(pool){

    async function getList() {
       var query = await pool.query('select id, brand_name, color, size, price, qty_in_stock from brandsList')
        // let query = await pool.query('insert into brandsList(id, brand_name, color, size, price, qty_in_stock) values ($!, $2, $3, $4, $5, $6)');
        return query.rows

    }
return {
    getList
}
}