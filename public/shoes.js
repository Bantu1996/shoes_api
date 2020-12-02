const sizeElem = document.querySelector(".size");
const sizeList = document.querySelector(".sizeList");
const sizeTemplateText = document.querySelector(".sizeTemplateText").innerHTML;
const sizeSelection = document.querySelector(".sizeSelection");
const sizeTemplate = Handlebars.compile(sizeTemplateText);

const brandsElem = document.querySelector(".brand");
const brandsList = document.querySelector(".brandsList");
const brandsTemplateText = document.querySelector(".brandsTemplateText").innerHTML;
const brandSelection = document.querySelector(".brandSelection");
const brandsTemplate = Handlebars.compile(brandsTemplateText);
const brandsFilterTemplateText = document.querySelector(".brandsFilterTemplateText").innerHTML;
const sizeFilterTemplateText = document.querySelector(".sizeFilterTemplateText").innerHTML;
const Elem = document.querySelector(".size");

const addBtn = document.querySelector(".addBtn")

function filterShoes() {

    // let brand = brandSelection.value;
    
    // let size = sizeSelection.value;

    axios
    .get("/api/shoes")
    .then(function(results){
        // brandsListFilter.innerHTML = brandsFilterTemplate({
         let shoesFilter = results.data
            console.log(shoesFilter)
            

        // })
    
    }) 

}

addBtn.addEventListener('click', filterShoes)