
module.exports = function (brandsListFunction) {


    async function getList(req, res) {
        try {
            let brandsList = await brandsListFunction.getList();
            res.json({
                msg: 'This is CORS-enabled for all origins!',
                status: 'success',
                data: brandsList
            });
        }
        catch (err) {
            res.json({
                msg: 'This is CORS-enabled for all origins!',
                status: "error",
                error: err.stack
            });
        }
    };
    
    async function getListOfBrands(req, res, next) {
        try {
            var brand = req.params.name;
            let specificBrandsList = await brandsListFunction.getListOfBrands(brand);
            res.json({
                msg: 'This is CORS-enabled for all origins!',
                status: 'success',
                data: specificBrandsList
            });
        }
        catch (err) {
            res.json({
                msg: 'This is CORS-enabled for all origins!',
                status: "error",
                error: err.stack
            });
        }
    };
    
    async function getListOfSizes(req, res) {
        try {
            let specificSizesList = await brandsListFunction.getListOfSizes();
            res.json({
                msg: 'This is CORS-enabled for all origins!',
                status: 'success',
                data: specificSizesList
            });
        }
        catch (err) {
            res.json({
                msg: 'This is CORS-enabled for all origins!',
                status: "error",
                error: err.stack
            });
        }
    };
    

    async function getListOfSizesAndBrands(req, res) {
        try {
            let specificSizesAndBrandsList = await brandsListFunction.getListOfSizesAndBrands();
            res.json({
                msg: 'This is CORS-enabled for all origins!',
                status: 'success',
                data: specificSizesAndBrandsList
            });
        }
        catch (err) {
            res.json({
                msg: 'This is CORS-enabled for all origins!',
                status: "error",
                error: err.stack
            });
        }
    };
    return {
        getList,
        getListOfBrands,
        getListOfSizes,
        getListOfSizesAndBrands
    }

}