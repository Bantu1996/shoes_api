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

      async function getListOfColors() {
        var query = await pool.query('select color from brandsList')

            return query.rows;
      }

      async function getListOfDistinctColors() {
        var query = await pool.query('select DISTINCT color from brandsList')

            return query.rows;
      }

      async function getListOfSpecifiedColors(color) {
        var query = await pool.query('select * from brandsList where color=$1', [color])

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
      async function addition(shoe){
        let data = [
          // shoe.id,
          shoe.brand_name,
          shoe.size,
          shoe.color,
          shoe.price,
          // shoe.qty_in_stock
        ]
        var query = await pool.query('insert into brandsList(id, brand_name, color, size, price) values ($1, $2, $3, $4, $5)', [data])
        return query.rows[0];
      }

      async function  incrementQtyById(id) {
        await pool.query("update brandsList set qty_in_stock = (qty_in_stock + 1) where id = $1", [id]);
      }
    

      async function  incrementQtyByName(name) {
        await pool.query("update brandsList set qty_in_stock = (qty_in_stock + 1) where brand_name = $1", [name]);
      }

      
return {
    getList,
    getListOfDistinctBrands,
    getListOfBrands,
    getListOfSpecifiedBrands,
    getListOfDistinctSizes,
    getListOfSizes,
    getListOfSpecifiedSizes,
    getListOfColors,
    getListOfDistinctColors,
    getListOfSpecifiedColors,
    getListOfSizesAndBrands,
    getListOfSpecificSizesAndBrands,
    addition,
    incrementQtyById,
    incrementQtyByName

}
}

