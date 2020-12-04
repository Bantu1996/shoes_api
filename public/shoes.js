const shoesElem = document.querySelector(".shoes");
const shoesList = document.querySelector(".shoesList");
const shoesTemplateText = document.querySelector(".shoesTemplateText").innerHTML;
const shoesTemplate = Handlebars.compile(shoesTemplateText);

const sizeElem = document.querySelector(".size");
const sizeList = document.querySelector(".sizeList");
const sizeTemplateText = document.querySelector(".sizeTemplateText").innerHTML;
const sizeSelection = document.querySelector(".sizeSelection");
const sizeTemplate = Handlebars.compile(sizeTemplateText);

const sizeInElem = document.querySelector(".sizeIn");
const sizeInList = document.querySelector(".sizeInList");
const sizeInTemplateText = document.querySelector(".sizeInTemplateText").innerHTML;
const sizeInSelection = document.querySelector(".sizeInSelection");
const sizeInTemplate = Handlebars.compile(sizeInTemplateText);

const brandsElem = document.querySelector(".brand");
const brandList = document.querySelector(".brandList");
const brandTemplateText = document.querySelector(".brandTemplateText").innerHTML;
const brandSelection = document.querySelector(".brandSelection");
const brandTemplate = Handlebars.compile(brandTemplateText);

const brandsInElem = document.querySelector(".brandIn");
const brandInList = document.querySelector(".brandInList");
const brandInTemplateText = document.querySelector(".brandInTemplateText").innerHTML;
const brandInSelection = document.querySelector(".brandInSelection");
const brandInTemplate = Handlebars.compile(brandInTemplateText);

const colorElem = document.querySelector(".color");
const colorList = document.querySelector(".colorList");
const colorTemplateText = document.querySelector(".colorTemplateText").innerHTML;
const colorSelection = document.querySelector(".colorSelection");
const colorTemplate = Handlebars.compile(colorTemplateText);

const colorInElem = document.querySelector(".colorIn");
const colorInList = document.querySelector(".colorInList");
const colorInTemplateText = document.querySelector(".colorInTemplateText").innerHTML;
const colorInSelection = document.querySelector(".colorInSelection");
const colorInTemplate = Handlebars.compile(colorInTemplateText);



const addBtn = document.querySelector(".addBtn")
const subBtn = document.querySelector(".subBtn")


axios
    .get("/api/shoes/brand_names")
    .then(function(results) {
        brandList.innerHTML = brandTemplate({
            brand: results.data.data
        });
    });

    axios
    .get("/api/shoes/brand_names")
    .then(function(results) {
        brandInList.innerHTML = brandInTemplate({
            brandIn: results.data.data
        });
    });

    axios
    .get("/api/shoes/sizes")
    .then(function(results) {
        sizeInList.innerHTML = sizeInTemplate({
            sizeIn: results.data.data
        });
    });

    axios
    .get("/api/shoes/colors")
    .then(function(results) {
        colorList.innerHTML = colorTemplate({
            color: results.data.data
        });
    });

    axios
    .get("/api/shoes/colors")
    .then(function(results) {
        colorInList.innerHTML = colorInTemplate({
            colorIn: results.data.data
        });
    });

    axios
    .get("/api/shoes/sizes")
    .then(function(results) {
        sizeList.innerHTML = sizeTemplate({
            size: results.data.data
        });
    });
    
    
    function filterShoes() {
        
        let brand = brandSelection.value;
        
        let size = sizeSelection.value;
        
        if(brand && size){
            axios
            .get("/api/shoes/brand_name/" + brand  + "/size/" + size)
            .then(function(results){ 
                console.log( results.data.data)
                shoesList.innerHTML = shoesTemplate({
                    shoes : results.data.data
            })
        }) 
        }
        else if(brand){
            axios
            .get("/api/shoes/brand_name/" + brand)
            .then(function(results){
                
                console.log( results.data.data)
                shoesList.innerHTML = shoesTemplate({
                    shoes : results.data.data
            })
        }) 
        }else if(size){
            axios
            .get("/api/shoes/size/" + size)
            .then(function(results){
                
                console.log( results.data.data)
                shoesList.innerHTML = shoesTemplate({
                    shoes : results.data.data
                    
    
            })
        
        }) 
        }
        else{
            axios
            .get("/api/shoes")
            .then(function(results){ 
                console.log( results.data.data)
                shoesList.innerHTML = shoesTemplate({
                    shoes : results.data.data
            })
        }) 
        }
}
    function addition(data) {

        return axios.post('/api/shoes', data)
   
}


subBtn.addEventListener('click', addition)
addBtn.addEventListener('click', filterShoes)