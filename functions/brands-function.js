module.exports = function BrandsListFunction(pool){

    async function getList() {
       var query = await pool.query('select id, brand_name, color, size, price, qty_in_stock from brandsList')
        return query.rows

    }
    async function getListOfBrands() {
        var query = await pool.query('select brand_name from brandsList')

            return query.rows;
      }

      async function getListOfSizes() {
        var query = await pool.query('select size from brandsList')

            return query.rows;
      }

      async function getListOfSizesAndBrands() {
        var query = await pool.query('select brand_name, size from brandsList')

            return query.rows;
      }
return {
    getList,
    getListOfBrands,
    getListOfSizes,
    getListOfSizesAndBrands
}
}

