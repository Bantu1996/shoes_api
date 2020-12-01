
module.exports = function (brandsListFunction) {


    async function getList(req, res) {
        try {
            let brandsList = await brandsListFunction.getList();
            res.json({
                status: 'success',
                data: brandsList
            });
        }
        catch (err) {
            res.json({
                status: "error",
                error: err.stack
            });
        }
    };
    return {
        getList
    }

}