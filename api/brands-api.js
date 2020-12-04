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
    



    async function getListOfSpecifiedColors(req, res) {
        try {
            var size = req.params.color;
            let specificSizesList = await brandsListFunction.getListOfSpecifiedColors(color);
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: 'success',
                data: specificColorsList
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

    async function getListOfDistinctColors(req, res) {
        try {
            // var size = req.params.size;
            let specificColorLists = await brandsListFunction.getListOfDistinctColors();
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: 'success',
                data: specificColorLists
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

    
    async function getListOfColors(req, res) {
        try {
            // var size = req.params.size;
            let colorList = await brandsListFunction.getListOfColors();
            res.json({
                // msg: 'This is CORS-enabled for all origins!',
                status: 'success',
                data: colorList
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

    async function addition(req, res) {
		try {
            let id = req.body.id;
            let input = req.body;
            let increment = await brandsListFunction.incrementQtyById(id);
            let increment2 =await brandsListFunction.incrementQtyById(input);
            let adding = await brandsListFunction.addition(input);
            
			res.json({
				status: 'success',
                data1: adding,
                data: increment,
                data3: increment2
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
        getList,
        getListOfBrands,
        getListOfDistinctBrands,
        getListOfSpecifiedBrands,
        getListOfSizes,
        getListOfDistinctSizes,
        getListOfSpecifiedSizes,
        getListOfColors,
        getListOfSpecifiedColors,
        getListOfDistinctColors,
        getListOfSpecificSizesAndBrands,
        addition
        
    }

}