// const shoesElem = document.querySelector(".shoes");
// const shoesList = document.querySelector(".shoesList");
// const brandsElem = document.querySelector(".brand");
// const colorsElem = document.querySelector(".color")
// const pricesElem = document.querySelector(".price")
// const sizesElem = document.querySelector(".size")
// const in_stockElem = document.querySelector(".in_stock")
// const shoesTemplateText = document.querySelector(".shoesTemplateText").innerHTML;
// const shoesTemplate = Handlebars.compile(shoesTemplateText);
const addBtn =document.querySelector(".addBtn")

// let brandsListTemplateInstance = Handlebars.compile(brandsListTemplate.innerHTML);

// const brandSelection = document.querySelector(".brandSelection");
// const filterButton = document.querySelector(".button");
// const sizeListFilter = document.querySelector(".sizeListFilter");
// const colorsListFilter = document.querySelector(".colorsListFilter");
// const sizeFilterTemplateText = document.querySelector(".sizeFilterTemplateText").innerHTML;
// const colorsFilterTemplateText = document.querySelector(".colorsFilterTemplateText").innerHTML;
// const sizeFilterTemplate = Handlebars.compile(sizeFilterTemplateText);
// const colorsFilterTemplate = Handlebars.compile(colorsFilterTemplateText);



function filterShoes() {

    // let brand = brandSelection.value;
    
    // let size = sizeSelection.value;

    axios
    .get('/api/shoes')
    .then(function(results){
        let response = results.data;
        // let data = response.data;
        console.log(response);
        
        // let html = brandsListTemplateInstance({
        //     brandsList: data
        // });
        // brandsElem.innerHTML = html;
    }).catch(e => console.log(e))

    

}

addBtn.addEventListener('click', filterShoes)














// axios
// .get("http://api-tutor.herokuapp.com/v1/colors")
// .then(function(results){
//     colorsList.innerHTML = colorsTemplate({
//         colors : results.data
//     });
// });

// axios
// .get("http://api-tutor.herokuapp.com/v1/makes")
// .then(function(results){
//     brandsList.innerHTML = brandsTemplate({
//         brands : results.data
//     });
// });


// const brandsElem = document.querySelector(".brands");
// const brandsList = document.querySelector(".brandsList");
// const brandsTemplateText = document.querySelector(".brandsTemplateText").innerHTML;
// const brandsTemplate = Handlebars.compile(brandsTemplateText);


// const colorsElem = document.querySelector(".colors");
// const colorsList = document.querySelector(".colorsList");
// const colorsTemplateText = document.querySelector(".colorsTemplateText").innerHTML;
// const colorsTemplate = Handlebars.compile(colorsTemplateText);