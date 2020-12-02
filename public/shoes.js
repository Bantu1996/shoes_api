const sizeElem = document.querySelector(".size");
const sizeList = document.querySelector(".sizeList");
const sizeTemplateText = document.querySelector(".sizeTemplateText").innerHTML;
const sizeSelection = document.querySelector(".sizeSelection");
const sizeTemplate = Handlebars.compile(sizeTemplateText);

const brandsElem = document.querySelector(".brand");
const brandList = document.querySelector(".brandList");
const brandTemplateText = document.querySelector(".brandTemplateText").innerHTML;
const brandSelection = document.querySelector(".brandSelection");
const brandTemplate = Handlebars.compile(brandTemplateText);


const shoesElem = document.querySelector(".shoes");
const shoesList = document.querySelector(".shoesList");
const shoesTemplateText = document.querySelector(".shoesTemplateText").innerHTML;
const shoesTemplate = Handlebars.compile(shoesTemplateText);


const addBtn = document.querySelector(".addBtn")


axios
    .get("/api/shoes/brand_names")
    .then(function(results) {
        brandList.innerHTML = brandTemplate({
            brand: results.data.data
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

   
         if(brand){
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
      

}

addBtn.addEventListener('click', filterShoes)