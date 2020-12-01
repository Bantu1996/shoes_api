module.exports = function SizesFunction(pool){


        async function getList() {
           var query = await pool.query('select id, brand_name, color, size, price, qty_in_stock from brandsList')
            return query.rows
    
        }
     
    
    return {
        getList
    }
 
}
