module.exports = function BrandsListFunction(pool){

    async function getList() {
       var query = await pool.query('select id, brand_name, color, size, price, qty_in_stock from brandsList')
        return query.rows

    }
    // async function getListOfBrands(name) {
    //     var query = await pool.query('select brand_name from brandsList where brand_name = $1', [name])
    //      return query.rows
 
    //  }
 

return {
    getList,
    // getListOfBrands
}
}