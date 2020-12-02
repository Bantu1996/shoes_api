module.exports = function BrandsListFunction(pool){

    async function getList() {
       var query = await pool.query('select id, brand_name, color, size, price, qty_in_stock from brandsList')
        return query.rows

    }
    async function getListOfBrands() {
        var query = await pool.query('select brand_name from brandsList')

            return query.rows;
      }

      async function getListOfDistinctBrands() {
        var query = await pool.query('select DISTINCT brand_name from brandsList')

            return query.rows;
      }

      async function getListOfSpecifiedBrands(brand) {
        var query = await pool.query('select * from brandsList where brand_name=$1', [brand])

            return query.rows;
      }

      async function getListOfSizes() {
        var query = await pool.query('select size from brandsList')

            return query.rows;
      }

      async function getListOfDistinctSizes() {
        var query = await pool.query('select DISTINCT size from brandsList')

            return query.rows;
      }

      async function getListOfSpecifiedSizes(size) {
        var query = await pool.query('select * from brandsList where size=$1', [size])

            return query.rows;
      }
      async function getListOfSizesAndBrands() {
        var query = await pool.query('select brand_name, size from brandsList')

            return query.rows;
      }
      async function getListOfSpecificSizesAndBrands(brand, size) {
        var query = await pool.query('select * from brandsList where brand_name = $1 AND size=$2;', [brand, size])

            return query.rows;
      }
return {
    getList,
    getListOfDistinctBrands,
    getListOfBrands,
    getListOfSpecifiedBrands,
    getListOfDistinctSizes,
    getListOfSizes,
    getListOfSpecifiedSizes,
    getListOfSizesAndBrands,
    getListOfSpecificSizesAndBrands
}
}

