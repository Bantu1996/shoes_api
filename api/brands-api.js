
module.exports = function (brandsListFunction) {


    async function getList(req, res) {
        try {
            let brandsList = await brandsListFunction.getList();
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: 'success',
                data: brandsList
            });
        }
        catch (err) {
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: "error",
                error: err.stack
            });
        }
    };

    async function getListOfBrands(req, res) {
        try {
            // var brand = req.params.brand_name;
            let brandsList = await brandsListFunction.getListOfBrands();
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: 'success',
                data: brandsList
            });
        }
        catch (err) {
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: "error",
                error: err.stack
            });
        }
    };
    

    async function getListOfDistinctBrands(req, res) {
        try {
            // var brand = req.params.brand_name;
            let brandsList = await brandsListFunction.getListOfDistinctBrands();
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: 'success',
                data: brandsList
            });
        }
        catch (err) {
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: "error",
                error: err.stack
            });
        }
    };

    
    async function getListOfSpecifiedBrands(req, res) {
        try {
            var brand_name = req.params.brand_name;
            let specificBrandsList = await brandsListFunction.getListOfSpecifiedBrands(brand_name);
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: 'success',
                data: specificBrandsList
            });
        }
        catch (err) {
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: "error",
                error: err.stack
            });
        }
    };
    
    async function getListOfSpecifiedSizes(req, res) {
        try {
            var size = req.params.size;
            let specificSizesList = await brandsListFunction.getListOfSpecifiedSizes(size);
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: 'success',
                data: specificSizesList
            });
        }
        catch (err) {
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: "error",
                error: err.stack
            });
        }
    };

    async function getListOfDistinctSizes(req, res) {
        try {
            // var size = req.params.size;
            let specificSizesList = await brandsListFunction.getListOfDistinctSizes();
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: 'success',
                data: specificSizesList
            });
        }
        catch (err) {
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: "error",
                error: err.stack
            });
        }
    };

    
    async function getListOfSizes(req, res) {
        try {
            // var size = req.params.size;
            let sizesList = await brandsListFunction.getListOfSizes();
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: 'success',
                data: sizesList
            });
        }
        catch (err) {
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: "error",
                error: err.stack
            });
        }
    };
    
    
    async function getListOfSpecificSizesAndBrands(req, res) {
        try {
            var brand = req.params.brand_name;
            var size = req.params.size;
            let specificSizesAndBrandsList = await brandsListFunction.getListOfSpecificSizesAndBrands(brand, size);
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: 'success',
                data: specificSizesAndBrandsList
            });
        }
        catch (err) {
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: "error",
                error: err.stack
            });
        }
    };
    return {
        getList,
        getListOfBrands,
        getListOfDistinctBrands,
        getListOfSpecifiedBrands,
        getListOfSizes,
        getListOfDistinctSizes,
        getListOfSpecifiedSizes,
        getListOfSpecificSizesAndBrands
    }

}