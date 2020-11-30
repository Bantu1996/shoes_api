module.exports = function (brandsFunction) {
	async function branding(req, res) {
		try {
			let brandS = await brandsFunction.insertFun();
			res.json({
				status: 'success',
				data: brandS
			});
		}
		catch (err) {
			res.json({
				status: "error",
				error: err.stack
			});
		}
	};
    return{
        branding
    }
}