module.exports = function ColorsFunction(pool){

    async function checkColors(name) {
        var using = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        var check = await pool.query('SELECT color_name FROM colors WHERE color=$1 ', [using]);
        return check;
    }

 async function brandColorsId(id) {
        var check = await pool.query('SELECT id FROM colors WHERE colors_id=$1 ', [id]);
        return check;
    }

// async function colorId(){
// var results = await pool.query('select color, brands_id from colors join brands on colors.brands_id = brands.id;')
// return results.rows
// }

    async function insertFun(color) {
        var using = color.charAt(0).toUpperCase() + color.slice(1).toLowerCase()
        let query = await pool.query('insert into colors(color) values ($1);', [using]);
        return query

    }

    async function getList() {
        var list = await pool.query('SELECT id, color FROM colors')
        return list.rows;
    }
    return{
        checkColors,
        // colorId,
        insertFun,
        getList,
        brandColorsId
    }
}
